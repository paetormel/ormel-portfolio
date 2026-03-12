import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);


const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([
      {
        role: "bot",
        text: "Huy! Space Assistant mo 'to. Ano'ng maipaglilingkod ko sa ating future developer?",
      },
    ]);
  
    const scrollRef = useRef(null);
  
    useEffect(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);
  
    const handleSend = async () => {
      if (!input.trim() || loading) return;
  
      const currentInput = input;
      const userMsg = { role: "user", text: currentInput };
  
      setMessages((prev) => [...prev, userMsg]);
      setInput("");
      setLoading(true);
  
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const systemContext = `
        You are Ormel's personal AI assistant on his portfolio website.
        
        Your job is to reply as if you are representing Ormel's personality, skills, and style.
        Do not say you are an AI unless directly asked.
        Speak in natural Taglish.
        Keep answers friendly, confident, and short unless the user asks for more detail.
        
        About Ormel:
        - Ormel is a frontend developer.
        - He enjoys building clean, interactive, and modern web interfaces.
        - He loves cloning websites to improve his frontend skills.
        - He is currently studying backend development.
        - He works with HTML, CSS, JavaScript, React, Tailwind CSS, Git, GitHub, and Figma.
        - He is passionate about learning and improving as a developer.
        - His goal is to become a well-rounded full-stack developer.
        
        Behavior rules:
        - When asked about skills, answer based on Ormel's real stack.
        - When asked about projects, describe them as Ormel's work.
        - When asked about goals, say he is improving both frontend and backend skills.
        - When asked personal/professional questions, answer as Ormel's portfolio assistant.
        - Keep the tone approachable, modern, and a little witty.
        - Never invent fake experience, fake companies, or fake achievements.
        - If the answer is unknown, say it honestly in a natural way.
        
        Example tone:
        - "Si Ormel ay focused sa frontend ngayon, pero nag-aaral na rin siya ng backend para mas maging versatile."
        - "Mahilig siya mag-clone ng websites kasi doon niya nahahasa yung UI eye at coding skills niya."
        `;
  
        const prompt = `${systemContext}\nUser: ${currentInput}`;
  
        const result = await model.generateContent(prompt);
        const botText = result.response.text();
  
        setMessages((prev) => [...prev, { role: "bot", text: botText }]);
      } catch (error) {
        console.error("FULL ERROR LOG:", error);
  
        let errorDisplay = "Satellite connection lost. Try again later!";
  
        if (String(error?.message).includes("404")) {
          errorDisplay =
            "Model not found. Palitan mo ang model name ng current supported Gemini model.";
        } else if (String(error?.message).includes("403")) {
          errorDisplay =
            "Invalid or blocked API key. I-check mo yung Gemini API key mo sa Google AI Studio.";
        }
  
        setMessages((prev) => [...prev, { role: "bot", text: errorDisplay }]);
      } finally {
        setLoading(false);
      }
    };

  return (
    <div className="fixed bottom-5 right-5 z-9999 font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 h-[500px] w-[320px] sm:w-[380px] flex flex-col rounded-2xl border border-white/20 bg-black/90 backdrop-blur-2xl shadow-[0_0_50px_rgba(59,130,246,0.3)] overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <div className="bg-linear-to-r from-blue-900/80 to-purple-900/80 p-4 flex justify-between items-center border-b border-white/10 text-white">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="font-bold text-sm tracking-widest uppercase">Orbital Bot</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:scale-125 transition-transform text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-br-none shadow-blue-500/20 shadow-lg" 
                  : "bg-white/10 text-gray-200 border border-white/10 rounded-bl-none backdrop-blur-md"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-2xl animate-pulse text-[10px] text-blue-400 uppercase tracking-tighter">
                  Receiving Signal...
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/40">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500/50"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 p-2.5 rounded-xl transition-all shadow-lg active:scale-90"
              >
                <svg className="w-4 h-4 text-white transform rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full backdrop-blur-2xl bg-white/20 flex items-center justify-center text-white  hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 group overflow-hidden"
        >
          <div className="absolute inset-0 group-hover:animate-ping rounded-full" />
            <img src="/robot (2).png" alt="" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;