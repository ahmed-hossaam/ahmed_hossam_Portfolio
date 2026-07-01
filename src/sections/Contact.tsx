import { useState } from "react";
import { Section } from "@/components/ui/section";
import { portfolioConfig } from "@/config/portfolioConfig";
import { motion } from "framer-motion";
import { fadeIn, slideInLeft, slideInRight } from "@/animations/variants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { sendEmail } from "@/services/emailjs";

export function Contact() {
  const { social } = portfolioConfig;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await sendEmail(formData);
      if (success) {
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message.", {
          description: "Please try again later or contact me directly via email.",
        });
      }
    } catch (error) {
      toast.error("An error occurred.", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    { icon: Mail, label: "Email", value: social.email, href: `mailto:${social.email}` },
    { icon: Phone, label: "Phone", value: social.phone, href: `tel:${social.phone}` },
    { icon: Github, label: "GitHub", value: "ahmed-hossaam", href: social.github },
    { icon: Linkedin, label: "LinkedIn", value: "Ahmed Hossam", href: social.linkedin },
  ];

  return (
    <Section id="contact" className="bg-background py-24">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary" />
          Get In Touch
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Let's connect and <span className="text-gradient">build</span>.
        </motion.h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
        <motion.div 
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/3 flex flex-col gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Open for opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            {contactMethods.map((method, idx) => (
              <a 
                key={idx} 
                href={method.href}
                target={method.icon === Mail || method.icon === Phone ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-border/50 hover:bg-secondary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <method.icon size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{method.label}</span>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{method.value}</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-2/3"
        >
          <div className="glass-panel p-8 md:p-10 rounded-2xl border border-border/50 shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus-visible:ring-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background/50 border-border/50 focus-visible:ring-primary h-12"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Internship Opportunity" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus-visible:ring-primary h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message here..." 
                  required 
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus-visible:ring-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full sm:w-auto mt-2 h-12 px-8 font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
