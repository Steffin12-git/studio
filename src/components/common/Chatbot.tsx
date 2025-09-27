'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { portfolioChatbot } from '@/ai/flows/portfolio-chatbot';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setLoading(true);
      setTimeout(() => {
        setMessages([
          {
            role: 'model',
            content: "Hi there! I'm Data Droid, Steffin's AI assistant. Ask me anything about his skills, projects, or experience!",
          },
        ]);
        setLoading(false);
      }, 1000);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if(viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const result = await portfolioChatbot({ 
          query: input,
          history: messages 
        });
      const modelMessage: Message = { role: 'model', content: result.answer };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      const errorMessage: Message = {
        role: 'model',
        content: "Sorry, I'm having a little trouble connecting to my brain right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.error('Chatbot error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-full w-16 h-16 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          aria-label="Toggle Chatbot"
        >
          <AnimatePresence>
            {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
          </AnimatePresence>
        </Button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col"
          >
            <header className="p-4 border-b border-white/20 flex items-center gap-3">
                <Bot className="h-7 w-7 text-white"/>
                <h3 className="text-lg font-bold text-white font-headline">Data Droid</h3>
            </header>

            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      'flex items-start gap-3',
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.role === 'model' && (
                        <Avatar className="w-8 h-8 border-2 border-primary">
                            <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                    )}
                     <div
                      className={cn(
                        'rounded-xl px-4 py-2 max-w-[80%]',
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-gray-800/80 text-white'
                      )}
                    >
                      <p className="text-sm lg:text-base">{message.content}</p>
                    </div>
                     {message.role === 'user' && (
                        <Avatar className="w-8 h-8 border-2 border-gray-500">
                             <AvatarFallback><User size={20}/></AvatarFallback>
                        </Avatar>
                    )}
                  </div>
                ))}
                 {loading && (
                    <div className="flex items-start gap-3 justify-start">
                         <Avatar className="w-8 h-8 border-2 border-primary">
                            <AvatarFallback><Bot size={20}/></AvatarFallback>
                        </Avatar>
                        <div className="rounded-xl px-4 py-2 bg-gray-800/80 text-white">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
            
            <footer className="p-4 border-t border-white/20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="bg-gray-800/80 border-gray-600 text-white focus:ring-accent"
                  autoFocus
                />
                <Button type="submit" size="icon" className="rounded-full flex-shrink-0" disabled={loading}>
                  <Send className="h-5 w-5" />
                </Button>
              </form>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
