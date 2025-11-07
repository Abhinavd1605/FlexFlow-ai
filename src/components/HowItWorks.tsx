import { Search, Palette, TestTube, Rocket } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Understand Your Process",
      description: "We analyze your business workflows and identify automation opportunities.",
    },
    {
      icon: Palette,
      title: "Design AI Agents",
      description: "Custom-built agents tailored to your specific business needs and goals.",
    },
    {
      icon: TestTube,
      title: "Integrate and Test",
      description: "Seamless integration with your systems, thoroughly tested for reliability.",
    },
    {
      icon: Rocket,
      title: "Scale with Automation",
      description: "Watch your business grow as AI handles routine tasks effortlessly.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From consultation to deployment in four simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 space-y-4 hover:scale-105 transition-transform duration-300 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                  
                  <div className="w-14 h-14 mx-auto rounded-2xl gradient-primary flex items-center justify-center group-hover:animate-glow">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
