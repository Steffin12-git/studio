'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Send, Mail, Linkedin, Github, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';
import { AnimatedTitle } from '../common/AnimatedTitle';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

const contactLinks = [
    { name: 'Email', value: 'steffinthomas12@gmail.com', href: 'mailto:steffinthomas12@gmail.com', icon: Mail},
    { name: 'LinkedIn', value: 'linkedin.com/in/steffin-thomas-b85549260', href: 'https://linkedin.com/in/steffin-thomas-b85549260', icon: Linkedin},
    { name: 'GitHub', value: 'github.com/Steffin12-git', href: 'https://github.com/Steffin12-git', icon: Github},
]

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const templateParams = {
        from_name: values.name,
        from_email: values.email,
        to_name: 'Steffin Thomas',
        message: values.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      })
      .catch((err) => {
        console.error('FAILED...', err);
        toast({
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem sending your message. Please try again later.',
            variant: 'destructive',
          });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
        <div className="container mx-auto bg-card/50 backdrop-blur-md p-8 md-p-12 rounded-2xl border border-white/10 shadow-xl">
            <div className="text-center">
                <AnimatedTitle text="Get In Touch" />
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto lg:text-xl">
                Have a question or want to work together? Drop me a message!
                </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-card/70 p-8 rounded-lg border border-white/10 shadow-lg">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-muted-foreground lg:text-base">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} className="bg-background/80 border-border text-foreground focus:ring-accent lg:text-base" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-muted-foreground lg:text-base">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} className="bg-background/80 border-border text-foreground focus:ring-accent lg:text-base"/>
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-muted-foreground lg:text-base">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Tell me what's on your mind..."
                                className="min-h-[120px] bg-background/80 border-border text-foreground focus:ring-accent lg:text-base"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="text-center pt-2">
                        <Button type="submit" size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group w-full px-10 py-3 text-lg lg:text-xl lg:py-4" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                                </>
                            ) : (
                                <>
                                Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </Button>
                        </div>
                    </form>
                    </Form>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white lg:text-3xl">Quick Contact</h3>
                    {contactLinks.map(link => (
                        <div key={link.name} className="flex items-start gap-4 p-4 rounded-lg bg-card/70 border border-white/10 shadow-lg">
                            <div className="bg-secondary p-3 rounded-full">
                                <link.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white lg:text-xl">{link.name}</h4>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors break-all lg:text-base">
                                    {link.value}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
  );
}
