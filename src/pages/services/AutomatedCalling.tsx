import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, PhoneCall, Zap, CheckCircle, FileSpreadsheet, Database } from "lucide-react";
import { CalendlyModal } from "@/components/CalendlyModal";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const AutomatedCalling = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/5 via-background/0 to-background/0" />
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent mix-blend-overlay blur-3xl animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-gradient-to-tr from-indigo-500/10 via-transparent to-transparent mix-blend-overlay blur-3xl animate-float animation-delay-2000" />
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
                <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                  Smart Calling Solutions
                </span>
              </motion.div>
              <motion.h1 
                variants={item} 
                className="text-4xl md:text-6xl font-heading font-bold mb-6"
              >
                Automated <motion.span 
                  className="gradient-text"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                >Calling System</motion.span>
              </motion.h1>
              <motion.p variants={item} className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
                Automate outbound calls from your spreadsheets or CRM with our intelligent calling system.
              </motion.p>
              <motion.div 
                variants={container}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="gradient-primary">
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full"
                    onClick={() => setShowCalendly(true)}
                  >
                    Book a Demo
                  </Button>
                </motion.div>
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
          className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-500/5 dark:to-indigo-500/5"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={item} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Powerful <span className="gradient-text">Calling Features</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Automate your outbound calling process and reach more customers in less time.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileSpreadsheet className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "Spreadsheet Integration",
                  description: "Upload contact lists directly from Excel or Google Sheets."
                },
                {
                  icon: <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "CRM Sync",
                  description: "Seamless integration with popular CRM platforms."
                },
                {
                  icon: <PhoneCall className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "Automated Dialing",
                  description: "Auto-dial contacts with intelligent call scheduling."
                },
                {
                  icon: <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "Call Recording",
                  description: "Record and store calls for quality assurance."
                },
                {
                  icon: <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "Smart Call Routing",
                  description: "Route calls to available agents based on skills and availability."
                },
                {
                  icon: <Phone className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
                  title: "Voicemail Drop",
                  description: "Automated voicemail delivery for missed calls."
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-card/50 dark:bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
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
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
        >
          <div className="container mx-auto px-4 text-center">
            <motion.h2 variants={item} className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Automate Your Calling Process?
            </motion.h2>
            <motion.p variants={item} className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
              Start making more calls in less time with our automated calling system.
            </motion.p>
            <motion.div 
              variants={container}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </motion.div>
              <motion.div variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-white text-white hover:bg-white/10"
                  onClick={() => setShowCalendly(true)}
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
      <CalendlyModal open={showCalendly} onOpenChange={setShowCalendly} />
    </motion.div>
  );
};

export default AutomatedCalling;
