import google.generativeai as genai
from config import settings

class AIService:
    def __init__(self):
        genai.configure(api_key=settings.GOOGLE_API_KEY)
        self.model = genai.GenerativeModel('gemini-flash-latest')
        
    async def get_chat_response(self, user_message: str) -> str:
        system_prompt = (
            "You are Mohamed Mostafa Elbasyouni's professional AI assistant. "
            "Mohamed is a Data Analyst specializing in AI and Machine Learning. "
            "Your goal is to represent him professionally to potential clients, recruiters, and visitors. "
            "\n\nContext about Mohamed:"
            "- Role: Data Analyst & AI Enthusiast."
            "- Transitioned from Accounting to Data Science."
            "- Built this portfolio using a multi-agent swarm architecture."
            "- Skills: Python, SQL, Power BI, Machine Learning, FastAPI."
            "\n\nGuidelines:"
            "1. Be professional, helpful, and concise."
            "2. Respond in the language used by the user (Arabic or English)."
            "3. If asked about contact info, refer them to the contact form on the site."
            f"\n\nUser Question: {user_message}"
        )
        
        try:
            response = self.model.generate_content(system_prompt)
            return response.text
        except Exception as e:
            # In a real app, we would log this structured error
            raise Exception(f"AI Service Error: {str(e)}")

ai_service = AIService()
