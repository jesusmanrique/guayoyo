"use client";
import { useEffect } from "react";

const ChatbotWidget = () => {
  useEffect(() => {
    // Dynamically load the chatbot script
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
            "backgroundColor": "#ffba00",
            "right": 20,
            "bottom": 20,
            "size": 50,
            "iconColor": "#343437",
            "customIconSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
            "customIconSize": 66,
            "customIconBorderRadius": 4,
            "autoWindowOpen": {
              "autoOpen": false,
              "openDelay": 1
            },
            "borderRadius": "circle"
          },
          "tooltip": {
            "showTooltip": false,
            "tooltipMessage": "",
            "tooltipBackgroundColor": "#fff9f6",
            "tooltipTextColor": "#1c1c1c",
            "tooltipFontSize": 15
          },
          "chatWindow": {
            "borderRadiusStyle": "rounded",
            "avatarBorderRadius": 21,
            "messageBorderRadius": 6,
            "showTitle": true,
            "title": "Habla con Sofia",
            "titleAvatarSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
            "welcomeMessage": "Hola! 👋 Soy Sofia, tu asistente de IA en GUAYOYO.TECH",
            "backgroundColor": "#d3d2d1",
            "height": 450,
            "width": 400,
            "fontSize": 16,
            "renderHTML": false,
            "clearChatOnReload": false,
            "botMessage": {
              "backgroundColor": "#005078",
              "textColor": "#fefdfc",
              "showAvatar": true,
              "avatarSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg"
            },
            "userMessage": {
              "backgroundColor": "#3abdf7",
              "textColor": "#050505",
              "showAvatar": true,
              "avatarSrc": "https://www.svgrepo.com/show/526700/user-circle.svg"
            },
            "textInput": {
              "placeholder": "Escribe un mensaje...",
              "backgroundColor": "#fefdfc",
              "textColor": "#1e1e1f",
              "sendButtonColor": "#3abdf7",
              "maxChars": 255,
              "maxCharsWarningMessage": ".",
              "autoFocus": true,
              "borderRadius": 6,
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
