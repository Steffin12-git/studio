'use client';

import { useState, useRef, useEffect, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { portfolioAssistant, type PortfolioAssistantInput } from '@/ai/flows/portfolio-assistant-flow';
import { Bot, User, X, Send, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          role: 'model',
          content: "Hi! I'm Steffin's AI assistant. Ask me about his skills, projects, or experience. How can I help you?",
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const chatHistory: PortfolioAssistantInput['history'] = messages.map(m => ({ role: m.role, content: m.content }));
      chatHistory.push({ role: 'user', content: input });
      
      const result = await portfolioAssistant({ history: chatHistory });
      const modelMessage: Message = { role: 'model', content: result.response };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error('AI assistant error:', error);
      const errorMessage: Message = {
        role: 'model',
        content: 'Sorry, I seem to be having some trouble right now. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transform hover:-translate-y-1 transition-transform"
        >
          {isOpen ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
        </Button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm">
          <div className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col h-[60vh]">
            <header className="p-4 border-b border-white/10 flex items-center">
                <Bot className="h-6 w-6 text-white mr-3" />
                <h3 className="font-headline text-lg text-white">AI Assistant</h3>
            </header>
            
            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3 text-sm',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'model' && <Bot className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />}
                    <div
                      className={cn(
                        'p-3 rounded-lg max-w-[85%]',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-black/40 text-gray-200 rounded-bl-none'
                      )}
                    >
                      <p className="leading-relaxed">{message.content}</p>
                    </div>
                     {message.role === 'user' && <User className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />}
                  </div>
                ))}
                {loading && (
                    <div className="flex items-start gap-3 text-sm justify-start">
                        <Bot className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                        <div className="p-3 rounded-lg bg-black/40 text-gray-200 rounded-bl-none">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
            
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about my skills..."
                  className="bg-gray-800/80 border-gray-600 text-white focus:ring-accent pr-12 h-12 text-base"
                  disabled={loading}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-primary hover:bg-primary/80"
                  disabled={loading}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}