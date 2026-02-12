
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types';

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am the SPB & Co. Digital Assistant. How can I help you with your cost accounting, audit, or GST queries today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model,
        contents: [
          {
            parts: [{ text: `You are a professional digital assistant for "S.P.B. & Co.", a leading Cost and Management Accountant firm.
            Firm Facts:
            - Founder: FCMA Sunder Prakash Budkoti (FCMA)
            - Established: 2010
            - Experience: 15 years
            - Services: Cost Audit, Management Consulting, GST Advisory, Project Financing, BPO, TRAI Audit.
            - Location: Indirapuram, Ghaziabad.
            - Contact: Users can reach us via phone (097167 19137) or email (spbcoca@gmail.com). There is no online form, please direct them to these contact methods.
            
            Always be professional, concise, and helpful. If asked about technical compliance, advise the user to contact our office directly via phone or email for a specific consultation.
            
            User query: ${input}` }]
          }
        ],
        config: {
          systemInstruction: "Maintain a high-class professional accounting tone. Use clear, bulleted points for complex lists. Avoid legal advice; instead, point to direct firm contact via phone or email."
        }
      });

      const aiText = response.text || "I apologize, but I'm unable to process that right now. Please call us at 097167 19137.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 text-white p-5 rounded-3xl shadow-2xl hover:bg-blue-900 transition-all hover:scale-110 active:scale-95 flex items-center justify-center relative group"
        >
          <MessageSquare size={28} />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            SPB Digital Support
          </span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[450px] h-[600px] rounded-[2.5rem] shadow-[0_24px_48px_rgba(0,0,0,0.2)] flex flex-col border border-slate-100 overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-800 p-6 text-white flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="bg-white/20 p-2 rounded-xl backdrop-blur-md">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-wider">SPB Support AI</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-blue-200 font-bold uppercase tracking-tight">Active Consultation</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-blue-800 text-white' : 'bg-white text-blue-700 border border-slate-100'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-4 rounded-3xl text-sm font-medium leading-relaxed ${msg.role === 'user' ? 'bg-blue-800 text-white rounded-tr-none shadow-md' : 'bg-white text-slate-700 rounded-tl-none shadow-sm border border-slate-100'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-blue-700 shadow-sm">
                    <Loader2 size={16} className="animate-spin" />
                  </div>
                  <div className="bg-white p-4 rounded-3xl rounded-tl-none text-sm shadow-sm border border-slate-100 text-slate-400 italic">
                    Referencing cost records...
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Cost Audit, GST..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm font-medium focus:ring-4 focus:ring-blue-100 focus:border-blue-700 outline-none transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="bg-blue-800 text-white p-4 rounded-2xl hover:bg-blue-900 disabled:opacity-50 transition-all shadow-lg"
              >
                <Send size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;
