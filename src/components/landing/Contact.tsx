'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

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
import { AnimatedSection } from '../common/AnimatedSection';
import Link from 'next/link';

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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to a server
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <AnimatedSection id="contact">
        <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-headline">Get In Touch</h2>
                <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Have a question or want to work together? Drop me a message!
                </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-black/30 p-8 rounded-lg border border-white/10 shadow-lg">
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-gray-300">Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your Name" {...field} className="bg-gray-800/80 border-gray-600 text-white focus:ring-teal-500" />
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
                            <FormLabel className="text-gray-300">Email</FormLabel>
                            <FormControl>
                                <Input placeholder="your.email@example.com" {...field} className="bg-gray-800/80 border-gray-600 text-white focus:ring-teal-500"/>
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
                            <FormLabel className="text-gray-300">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                placeholder="Tell me what's on your mind..."
                                className="min-h-[120px] bg-gray-800/80 border-gray-600 text-white focus:ring-teal-500"
                                {...field}
                                />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <div className="text-center pt-2">
                        <Button type="submit" size="lg" className="rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group w-full px-10 py-3 text-lg">
                            Send Message <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        </div>
                    </form>
                    </Form>
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white">Quick Contact</h3>
                    {contactLinks.map(link => (
                        <div key={link.name} className="flex items-start gap-4 p-4 rounded-lg bg-black/30 border border-white/10 shadow-lg">
                            <div className="bg-gray-800/70 p-3 rounded-full">
                                <link.icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white">{link.name}</h4>
                                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors break-all">
                                    {link.value}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </div>
    </AnimatedSection>
  );
}
