import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Play, MessageCircle, Bot, Zap, CheckCircle, MessageSquare } from "lucide-react";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

export const PersonalChatbots = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent mix-blend-overlay blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-purple-500/10 via-transparent to-transparent mix-blend-overlay blur-3xl animate-float animation-delay-2000" />
      </div>

      <Navbar />
      
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 md:py-24 relative"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div variants={item} className="mb-6">
                <span className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                  AI-Powered Chat Solutions
                </span>
              </motion.div>
              <motion.h1 
                variants={item} 
                className="text-4xl md:text-6xl font-heading font-bold mb-6"
              >
                Personal <motion.span 
                  className="gradient-text"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                >Chatbots</motion.span> for Every Need
              </motion.h1>
              <motion.p variants={item} className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Create custom AI chatbots that understand context, remember conversations, and provide personalized experiences for your users.
              </motion.p>
              <motion.div 
                variants={item} 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full max-w-xs mx-auto"
              >
                <Button 
                  size="lg" 
                  className="gradient-primary w-full"
                  onClick={() => window.open('https://drive.google.com/file/d/1y5HpEXruoI70gqSxpARphHbaiaEl9EqW/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                >
                  <Play className="mr-2 h-5 w-5" /> Watch Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 md:py-24 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-500/5 dark:to-purple-500/5"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={item} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Choose Our <span className="gradient-text">Personal Chatbots</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform customer interactions with AI that understands and remembers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <MessageCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                  title: "24/7 Availability",
                  description: "Your chatbot never sleeps, providing instant responses to customer queries around the clock."
                },
                {
                  icon: <Bot className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                  title: "Context-Aware",
                  description: "Understands conversation context and provides relevant, personalized responses."
                },
                {
                  icon: <Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                  title: "Lightning Fast",
                  description: "Instant responses that keep your customers engaged and satisfied."
                },
                {
                  icon: <MessageSquare className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                  title: "Multi-Platform",
                  description: "Deploy on your website, mobile app, or popular messaging platforms."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
                  title: "Easy Integration",
                  description: "Seamlessly integrate with your existing tools and workflows."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 md:py-24 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Transform Your Customer Experience?
            </motion.h2>
            <motion.p variants={item} className="text-xl mb-8 max-w-2xl mx-auto text-indigo-100">
              Get started with our AI-powered personal chatbots and provide exceptional 24/7 support to your customers.
            </motion.p>
            <motion.div 
              variants={item} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-xs mx-auto"
            >
              <Button 
                size="lg" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 w-full"
                onClick={() => window.open('https://drive.google.com/file/d/1y5HpEXruoI70gqSxpARphHbaiaEl9EqW/view?usp=sharing', '_blank', 'noopener,noreferrer')}
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </motion.div>
  );
};

export default PersonalChatbots;
