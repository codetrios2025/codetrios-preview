import { useEffect } from "react";

/**
 * Loads the CodeTrios chatbot once for the whole app.
 * Put codetrios-chatbot.js in your `public/` folder, then render <Chatbot />
 * once, e.g. at the bottom of App.js. The widget attaches itself to <body>,
 * so it stays open and keeps its conversation while visitors move between
 * React Router pages.
 */
export default function Chatbot() {
  useEffect(() => {
    if (window.CodeTriosBot || document.getElementById("codetrios-chatbot-script")) return;

    let loaded = false;
    let idleCallbackId;
    let fallbackTimerId;
    const interactionEvents = ["scroll", "click", "touchstart", "keydown"];

    const removeListeners = () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, loadChatbot);
      });
    };

    const loadChatbot = () => {
      if (loaded || window.CodeTriosBot || document.getElementById("codetrios-chatbot-script")) return;
      loaded = true;
      removeListeners();
      if (idleCallbackId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (fallbackTimerId !== undefined) window.clearTimeout(fallbackTimerId);

      const script = document.createElement("script");
      script.id = "codetrios-chatbot-script";
      script.src = "/codetrios-chatbot.js";
      script.async = true;
      document.body.appendChild(script);
    };

    interactionEvents.forEach((eventName) => {
      window.addEventListener(eventName, loadChatbot, {
        once: true,
        passive: true,
      });
    });

    if ("requestIdleCallback" in window) {
      idleCallbackId = window.requestIdleCallback(loadChatbot, { timeout: 3000 });
    } else {
      fallbackTimerId = window.setTimeout(loadChatbot, 3000);
    }

    return () => {
      removeListeners();
      if (idleCallbackId !== undefined && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      if (fallbackTimerId !== undefined) window.clearTimeout(fallbackTimerId);
    };
  }, []);

  return null; // the widget draws its own UI
}
