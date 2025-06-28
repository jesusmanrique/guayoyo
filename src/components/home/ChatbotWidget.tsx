"use client";
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.defer = true;
    script.innerHTML = `
      import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
      Chatbot.init({
        "n8nChatUrl": "https://guayoyo-n8n.wwpige.easypanel.host/webhook/28235335-26d7-4986-8c84-7d87278f97ed/chat",
        "metadata": {},
        "theme": {
          "button": {
            "backgroundColor": "rgba(30,40,60,0.7)",
            "right": 24,
            "bottom": 24,
            "size": 54,
            "iconColor": "#3ee6ff",
            "customIconSrc": "/chat-bubble-fab.svg",
            "customIconSize": 60,
            "customIconBorderRadius": 16,
            "autoWindowOpen": {
              "autoOpen": false,
              "openDelay": 1
            },
            "borderRadius": 24,
            "boxShadow": "0 4px 32px 0 rgba(62,230,255,0.18), 0 1.5px 8px 0 rgba(30,40,60,0.18)"
          },
          "tooltip": {
            "showTooltip": false,
            "tooltipMessage": "",
            "tooltipBackgroundColor": "rgba(30,40,60,0.7)",
            "tooltipTextColor": "#fff",
            "tooltipFontSize": 15
          },
          "chatWindow": {
            "borderRadiusStyle": "rounded",
            "avatarBorderRadius": 21,
            "messageBorderRadius": 16,
            "showTitle": true,
            "title": "Habla con Sofia",
            "titleAvatarSrc": "/chat-bubble.svg",
            "welcomeMessage": "Hola! 👋 Soy Sofia, tu asistente de IA en GUAYOYO.TECH",
            "backgroundColor": "rgba(30,40,60,0.92)",
            "height": 370,
            "width": 410,
            "fontSize": 16,
            "renderHTML": false,
            "clearChatOnReload": false,
            "boxShadow": "0 4px 32px 0 rgba(62,230,255,0.18), 0 1.5px 8px 0 rgba(30,40,60,0.18)",
            "botMessage": {
              "backgroundColor": "rgba(62,230,255,0.25)",
              "textColor": "#fff",
              "showAvatar": true,
              "avatarSrc": "/chat-bubble.svg"
            },
            "userMessage": {
              "backgroundColor": "rgba(92,170,255,0.25)",
              "textColor": "#fff",
              "showAvatar": true,
              "avatarSrc": "/user.svg"
            },
            "textInput": {
              "placeholder": "Escribe un mensaje...",
              "backgroundColor": "rgba(62,230,255,0.10)",
              "textColor": "#fff",
              "sendButtonColor": "#3ee6ff",
              "maxChars": 255,
              "maxCharsWarningMessage": ".",
              "autoFocus": true,
              "borderRadius": 16,
              "sendButtonBorderRadius": 50
            },
            "voiceInputConfig": {
              "enabled": false,
              "maxRecordingTime": 15,
              "recordingNotSupportedMessage": "To record audio, use modern browsers like Chrome or Firefox that support audio recording"
            }
          }
        }
      });
    `;

    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      // Remove chatbot UI elements if needed
      const chatbotElements = document.querySelectorAll(
        ".n8n-chat-button, .n8n-chat-window"
      );
      chatbotElements.forEach((el) => el.remove());
    };
  }, []);

  return null;
};

export default ChatbotWidget;
