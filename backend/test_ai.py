import asyncio
from services.ai_service import ai_service
from config import settings
print("Using API Key:", settings.GOOGLE_API_KEY[:5])
async def main():
    try:
        import google.generativeai as genai
        genai.configure(api_key=settings.GOOGLE_API_KEY)
        model = genai.GenerativeModel('gemini-flash-latest')
        res = model.generate_content("Hello")
        print("Success:", res.text)
    except Exception as e:
        print("Error:", repr(e))

asyncio.run(main())
