import logging
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import uvicorn

from config import settings
from database import engine, Base, get_db
from models import ContactMessage
from schemas import ContactRequest, ChatRequest
from services.ai_service import ai_service

# 1. Initialize Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)
logger = logging.getLogger(__name__)

# 2. Database Initialization
Base.metadata.create_all(bind=engine)

# 3. FastAPI App Setup
app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.PROJECT_VERSION,
    debug=settings.DEBUG
)

# 4. Security & Middleware (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 5. Security Headers (Middleware)
@app.middleware("http")
async def add_security_headers_middleware(request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["Content-Security-Policy"] = "default-src 'self'"
    return response

# 6. API Routes
@app.get("/")
async def root():
    return {"status": "active", "message": "Mohamed's AI Portfolio Backend is running."}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "version": settings.PROJECT_VERSION}

@app.post("/api/contact", status_code=status.HTTP_201_CREATED)
async def submit_contact_form(request: ContactRequest, db: Session = Depends(get_db)):
    try:
        new_msg = ContactMessage(
            full_name=request.full_name,
            email=request.email,
            subject=request.subject,
            message=request.message
        )
        db.add(new_msg)
        db.commit()
        db.refresh(new_msg)
        logger.info(f"New contact message from {request.email}")
        return {"status": "success", "message": "Message received professionally."}
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.post("/api/chat")
async def chat_with_ai(request: ChatRequest):
    try:
        response_text = await ai_service.get_chat_response(request.message)
        return {"status": "success", "response": response_text}
    except Exception as e:
        logger.error(f"AI Chat error: {str(e)}")
        return {
            "status": "error", 
            "response": "عذراً، أواجه مشكلة في الاتصال بذكائي الاصطناعي حالياً. يرجى المحاولة لاحقاً."
        }

if __name__ == "__main__":
    uvicorn.run("main:app", host=settings.HOST, port=settings.PORT, reload=settings.DEBUG)