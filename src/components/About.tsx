import { Sparkles, Zap, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Intelligent Automation",
      description: "AI agents that learn and adapt to your business needs, delivering smarter solutions every day.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get your custom AI setup within 48 hours and start automating immediately.",
    },
    {
      icon: Target,
      title: "Purpose-Built",
      description: "Tailored solutions designed specifically for your industry and workflow requirements.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              The Future of <span className="gradient-text">Workflows</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              FlexFlow's mission is merging human creativity with AI intelligence to simplify 
              operations for SMBs and enterprises. We empower businesses to focus on what matters 
              most while AI handles the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-4 hover:scale-105 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
