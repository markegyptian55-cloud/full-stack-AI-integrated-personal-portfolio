// ==========================================
// 0. PRELOADER & NETFLIX AUDIO LOGIC
// ==========================================
const enterBtn = document.getElementById('enter-btn');
const preloader = document.getElementById('preloader');
const netflixSound = document.getElementById('netflixSound');

if (enterBtn && preloader && netflixSound) {
  enterBtn.addEventListener('click', () => {
    // تشغيل الصوت بقوة وتخطي منع المتصفح
    netflixSound.volume = 1.0;
    netflixSound.play().catch(error => console.log("Audio Error:", error));

    // إخفاء شاشة التحميل بتأثير زجاجي (Fade out)
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';

    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500); // بيستنى نص ثانية لحد ما الشفافية تنزل لصفر
  });
} else {
  console.log("تنبيه: زرار الدخول أو شاشة التحميل أو ملف الصوت مش موجودين في الـ HTML");
}


document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. ADDING CHATBOT UI TO EXISTING BRANDING
  // ==========================================

  const style = document.createElement('style');
  style.innerHTML = `
    .chat-widget {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 9999;
      font-family: var(--font-body);
    }
    
    [dir="rtl"] .chat-widget {
      right: auto;
      left: 30px;
    }

    /* Adding neural-pulse keyframe animation */
    @keyframes neural-pulse {
      0% { box-shadow: 0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(0, 240, 255, 0.2); transform: scale(1); }
      50% { box-shadow: 0 0 20px rgba(0, 240, 255, 0.8), 0 0 40px rgba(0, 240, 255, 0.4); transform: scale(1.05); }
      100% { box-shadow: 0 0 10px rgba(0, 240, 255, 0.4), 0 0 20px rgba(0, 240, 255, 0.2); transform: scale(1); }
    }

    .chat-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: var(--bg-surface);
      border: 1px solid var(--accent-teal);
      color: var(--accent-teal);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0, 201, 167, 0.2);
      transition: var(--transition);
      animation: neural-pulse 2s infinite ease-in-out;
    }

    .chat-btn:hover {
      transform: scale(1.1);
      /* When hovered, we might want to override or blend with the animation */
      box-shadow: 0 6px 20px rgba(0, 201, 167, 0.6), 0 0 40px rgba(0, 240, 255, 0.6);
      animation: none; /* stop pulse on hover */
    }

    .neural-core-icon {
      width: 32px;
      height: 32px;
      color: var(--accent-teal);
    }

    .chat-window {
      position: absolute;
      bottom: 80px;
      right: 0;
      width: 350px;
      height: 450px;
      /* Deep Glassmorphism Effect */
      background: rgba(13, 17, 23, 0.65);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: var(--radius-md);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(0, 240, 255, 0.05);
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    }

    [dir="rtl"] .chat-window {
      right: auto;
      left: 0;
    }

    .chat-window.open {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .chat-header {
      background: rgba(255, 255, 255, 0.03);
      padding: 15px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .chat-header h3 {
      font-size: 1rem;
      color: var(--text-head);
      margin: 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .chat-header h3 span {
      display: inline-block;
      width: 8px;
      height: 8px;
      background: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 10px var(--accent-green);
    }

    .close-chat {
      background: none;
      border: none;
      color: var(--text-muted);
      cursor: pointer;
      font-size: 1.2rem;
      transition: var(--transition);
    }

    .close-chat:hover {
      color: var(--accent-teal);
    }

    .chat-body {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .chat-msg {
      max-width: 80%;
      padding: 10px 14px;
      border-radius: 12px;
      font-size: 0.9rem;
      line-height: 1.4;
      backdrop-filter: blur(8px);
    }

    .msg-bot {
      background: rgba(255, 255, 255, 0.05);
      color: var(--text-body);
      align-self: flex-start;
      border-bottom-left-radius: 2px;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .msg-user {
      background: rgba(0, 240, 255, 0.1);
      color: var(--text-head);
      align-self: flex-end;
      border-bottom-right-radius: 2px;
      border: 1px solid rgba(0, 240, 255, 0.2);
    }

    .chat-footer {
      padding: 15px;
      background: rgba(255, 255, 255, 0.02);
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      gap: 10px;
    }

    .chat-input {
      flex: 1;
      background: rgba(10, 10, 10, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--text-body);
      padding: 10px 15px;
      border-radius: 20px;
      outline: none;
      transition: var(--transition);
    }

    .chat-input:focus {
      border-color: var(--accent-teal);
      box-shadow: 0 0 0 2px rgba(0, 240, 255, 0.1);
    }

    .chat-send {
      background: var(--text-head);
      color: rgba(10, 10, 10, 0.9);
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: var(--transition);
    }

    .chat-send:hover {
      background: var(--accent-teal);
      transform: scale(1.05);
      box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
    }

    .typing-indicator {
      align-self: flex-start;
      display: flex;
      gap: 4px;
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      border-bottom-left-radius: 2px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      display: none;
    }

    .typing-indicator span {
      width: 6px;
      height: 6px;
      background: var(--text-muted);
      border-radius: 50%;
      animation: bounce 1.4s infinite ease-in-out both;
    }

    .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
    .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

    @keyframes bounce {
      0%, 80%, 100% { transform: scale(0); }
      40% { transform: scale(1); }
    }
  `;
  document.head.appendChild(style);

  const isDark = document.documentElement.getAttribute('data-theme') === 'dark' || !document.documentElement.hasAttribute('data-theme');

  const widgetHtml = `
    <div class="chat-widget">
      <div class="chat-window" id="chat-window">
        <div class="chat-header">
          <h3><span></span> AI Assistant</h3>
          <button class="close-chat" id="close-chat">✕</button>
        </div>
        <div class="chat-body" id="chat-body">
          <div class="chat-msg msg-bot">Hello! I'm Mohamed's AI assistant. How can I help you today?</div>
          <div class="typing-indicator" id="typing-indicator">
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="chat-footer">
          <input type="text" id="chat-input" class="chat-input" placeholder="Type a message..." autocomplete="off">
          <button class="chat-send" id="chat-send">➤</button>
        </div>
      </div>
      <button class="chat-btn" id="chat-btn">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="neural-core-icon">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5" fill="none"/>
          <path d="M12 2V6M12 18V22M2 12H6M18 12H22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </button>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHtml);

  // Chat logic
  const chatBtn = document.getElementById('chat-btn');
  const closeChat = document.getElementById('close-chat');
  const chatWindow = document.getElementById('chat-window');
  const chatInput = document.getElementById('chat-input');
  const chatSend = document.getElementById('chat-send');
  const chatBody = document.getElementById('chat-body');
  const typingIndicator = document.getElementById('typing-indicator');

  chatBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      chatInput.focus();
    }
  });

  closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });

  const appendMessage = (text, sender) => {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-msg', sender === 'user' ? 'msg-user' : 'msg-bot');
    msgDiv.textContent = text;
    // Insert before typing indicator
    chatBody.insertBefore(msgDiv, typingIndicator);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const sendMessage = async () => {
    const text = chatInput.value.trim();
    if (!text) return;

    appendMessage(text, 'user');
    chatInput.value = '';

    // Show typing indicator
    typingIndicator.style.display = 'flex';
    chatBody.scrollTop = chatBody.scrollHeight;

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      typingIndicator.style.display = 'none';

      if (data.status === 'success') {
        appendMessage(data.response, 'bot');
      } else {
        appendMessage('Sorry, I encountered an error.', 'bot');
      }
    } catch (error) {
      typingIndicator.style.display = 'none';
      appendMessage('الخادم غير متصل. يرجى تشغيل الباك إند.', 'bot');
      console.error('Chat error:', error);
    }
  };

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  // ==========================================
  // 2. CONNECTING EXISTING CONTACT FORM
  // ==========================================
  document.addEventListener('submit', async (e) => {
    if (e.target && e.target.id === 'contact-form') {
      const name = document.getElementById('contact-name')?.value || '';
      const email = document.getElementById('contact-email')?.value || '';
      const message = document.getElementById('contact-message')?.value || '';
      const subject = document.getElementById('contact-subject')?.value || 'Other';

      if (name.trim() && email.trim() && message.trim()) {
        try {
          await fetch('http://localhost:8000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
          });
        } catch (error) {
          console.error("Failed to connect to backend:", error);
        }
      }
    }
  });

});
