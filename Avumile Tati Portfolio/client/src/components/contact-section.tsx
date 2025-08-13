import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Clock, Github, Linkedin, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { ContactFormData } from "@/lib/types";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "tatiavumile@gmail.com",
      color: "text-accent-blue bg-accent-blue/20"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location", 
      value: "Cape Town, South Africa",
      color: "text-accent-cyan bg-accent-cyan/20"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Response Time",
      value: "Usually within 24 hours",
      color: "text-accent-purple bg-accent-purple/20"
    }
  ];

  const socialLinks = [
    {
      href: "https://github.com/avumiletati",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      testId: "social-github"
    },
    {
      href: "https://linkedin.com/in/avumiletati", 
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      testId: "social-linkedin"
    },
    {
      href: "mailto:tatiavumile@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      testId: "social-email"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-dark-800/50" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4" data-testid="contact-title">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-cyan mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Let's work together! I'm always interested in new opportunities and exciting projects.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6" data-testid="contact-info-title">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4" data-testid="connect-title">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.testId}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="w-12 h-12 bg-dark-600 border border-dark-500 rounded-lg flex items-center justify-center hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 transform hover:scale-110"
                    data-testid={link.testId}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-dark-700/50 border-dark-600" data-testid="contact-form-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-white mb-6" data-testid="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-slate-300 mb-2">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-dark-600 border-dark-500 text-white placeholder-slate-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                      placeholder="Your Name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-300 mb-2">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-dark-600 border-dark-500 text-white placeholder-slate-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                      placeholder="your.email@example.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-slate-300 mb-2">Subject</Label>
                  <Input
                    id="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="bg-dark-600 border-dark-500 text-white placeholder-slate-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue"
                    placeholder="Project Discussion"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-slate-300 mb-2">Message</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-dark-600 border-dark-500 text-white placeholder-slate-400 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue resize-none"
                    placeholder="Tell me about your project..."
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full btn-gradient px-8 py-4 font-semibold text-white hover:shadow-lg hover:shadow-accent-blue/25 transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-dark-700"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
