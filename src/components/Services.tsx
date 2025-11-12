import { Phone, MessageSquare, Workflow, Globe, ArrowRight, Bot, FileSpreadsheet, ChevronDown, ChevronUp, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";


export const Services = () => {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: Phone,
      title: "AI Voice Agents",
      description: "Voice agents for calls, WhatsApp, and web. 24/7 customer support.",
      popular: true,
      link: "/services/voice-agents"
    },
    {
      icon: MessageSquare,
      title: "AI Chat Automation",
      description: "WhatsApp, Web, and Social chatbots with instant responses.",
      popular: true,
      link: "/services/chat-automation"
    },
    {
      icon: Bot,
      title: "Personal Chatbots",
      description: "Custom AI assistants for personalized customer interactions.",
      popular: false,
      link: "/services/personal-chatbots"
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate tasks, reminders, and CRM integrations.",
      popular: false,
      link: "/services/workflow-automation"
    },
    {
      icon: Globe,
      title: "Dynamic Website Building",
      description: "Create stunning websites with built-in AI assistance.",
      popular: true,
      link: "/services/ai-website-builder"
    },
    {
      icon: FileSpreadsheet,
      title: "Automated Calling",
      description: "Make automated calls from spreadsheets or CRM data.",
      popular: false,
      link: "/services/automated-calling"
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent mix-blend-overlay blur-3xl animate-float" />
      </div>
      
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-20 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="gradient-primary mb-4 text-xs px-3 py-1">
              <Zap className="w-3.5 h-3.5 mr-1.5" />
              Our Solutions
            </Badge>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Our <span className="gradient-text section-heading">AI Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From AI Voice Agents to AI Website Builders, we empower businesses with intelligent automation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            {services.slice(0, showAll ? services.length : 4).map((service, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 space-y-4 relative overflow-hidden h-full flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{
                       background: 'radial-gradient(circle at center, rgba(194, 139, 0, 0.03) 0%, transparent 70%)',
                     }}
                />
                
                {service.popular && (
                  <Badge className="absolute top-3 right-3 text-xs gradient-primary border border-amber-400/20 shadow-sm">
                    POPULAR
                  </Badge>
                )}
                
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-violet-500 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-amber-400/20 transition-all duration-300"
                  animate={{
                    y: hoveredIndex === index ? -4 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  <service.icon className="h-5 w-5 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-amber-400 group-hover:to-violet-500 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm flex-grow transition-colors duration-300 group-hover:text-foreground/90">
                  {service.description}
                </p>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-fit px-0 -ml-2 group-hover:bg-gradient-to-r group-hover:from-amber-400/10 group-hover:to-violet-500/10 group-hover:text-foreground transition-all duration-300"
                  onClick={() => service.link && navigate(service.link)}
                >
                  <span className="relative z-10">Learn more</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                
                {/* Subtle border animation on hover */}
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 border border-transparent group-hover:border-amber-400/20 transition-all duration-300 rounded-xl" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!showAll ? (
              <motion.div
                key="show-more"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-8"
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glow-border text-lg group relative overflow-hidden"
                  onClick={() => setShowAll(true)}
                >
                  <span className="relative z-10 flex items-center">
                    Explore All Automations
                    <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-violet-500/5 to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="show-less"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-center mt-8"
              >
                <Button 
                  variant="ghost" 
                  size="lg" 
                  className="text-muted-foreground hover:text-foreground group transition-colors"
                  onClick={() => {
                    setShowAll(false);
                    // Smooth scroll to services section
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className="relative z-10 flex items-center">
                    Show Less
                    <ChevronUp className="ml-2 h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
