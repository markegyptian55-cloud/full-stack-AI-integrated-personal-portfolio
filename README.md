<div align="center">
  <h1>Hi, I'm Mohamed Elbasyouni 👋</h1>
  <h3>Data Analyst & Applied AI Engineer</h3>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Gemini_API-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" />
  <img src="https://img.shields.io/badge/Data_Analysis-FF6F00?style=for-the-badge&logo=googleanalytics&logoColor=white" />
</div>

<br>

## 👤 About Me
I am a Data Analyst and Applied AI Engineer with a Bachelor of Commerce from Zagazig University (2020). I am currently enrolled in the Specialized Diploma in Applied AI & Data Analytics at the Egyptian Military Academy and compiling my expertise through the "Digital Egypt Pioneers" (DigiLance) 9-month initiative. My primary focus is building data-driven AI solutions, scalable backend architectures, and machine learning models.

## 🚀 Project Overview
This repository hosts my full-stack, AI-integrated personal portfolio. It features a futuristic **Glassmorphism UI**, a custom AI chatbot powered by the **Google Gemini API**, and a high-performance **FastAPI backend** designed to orchestrate interactive and intelligent digital experiences.

## 🛠️ Tech Stack
| Tier | Technologies used |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript, Glassmorphism UI |
| **Backend** | Python, FastAPI, Uvicorn, SQLite |
| **AI Integration** | Google Gemini API (google-generativeai) |

## ✨ Core Features
- **Cinematic Experience:** Enjoy a Netflix-style cinematic intro sequence upon loading.
- **Neural-core Chatbot:** Interact with a customized AI chatbot, encapsulated in a sleek glassmorphic interface, ready to discuss my professional background.
- **Responsive UI:** Fully responsive design adapting robustly across mobile, tablet, and desktop devices.
- **High-Performance API:** Lightning-fast backend operations managed by FastAPI.

## ⚙️ Local Setup & Installation

Run the following commands in your terminal to set up the project locally:

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/Mohamed-Portfolio.git
cd Mohamed-Portfolio
```

2. **Navigate to the backend directory and set up a virtual environment:**
```bash
cd backend
python -m venv venv
```

3. **Activate the virtual environment:**
```bash
# On Windows:
.\venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate
```

4. **Install backend dependencies:**
```bash
pip install fastapi uvicorn google-generativeai pydantic sqlalchemy
```

5. **Start the Uvicorn server:**
```bash
uvicorn main:app --reload
```
*The backend should now run at `http://localhost:8000` or `http://127.0.0.1:8000`.*

6. **Run the Frontend:**
Open `index.html` from the root directory using a local server (e.g., Live Server in VSCode or a simple Python http.server) to view the portfolio.

## 🎯 Future Roadmap
- Integration of live interactive data dashboards.
- Embedding advanced Exploratory Data Analysis (EDA) tools directly into the UI.
- Expanding the Neural-core Chatbot to analyze data inputs on the fly.
