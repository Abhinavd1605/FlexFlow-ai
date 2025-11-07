import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      period: "/month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "100 AI calls per month",
        "Basic voice agent",
        "Google Sheets logging",
        "Email support",
        "7-day free trial",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "₹9,999",
      period: "/month",
      description: "Advanced automation for growing businesses",
      features: [
        "500 AI calls per month",
        "WhatsApp integration",
        "Custom voice personality",
        "CRM integration",
        "Priority support",
        "Analytics dashboard",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "₹14,999",
      period: "/month",
      description: "Enterprise-grade solutions for scaling operations",
      features: [
        "Unlimited AI calls",
        "Full dashboard access",
        "Advanced analytics",
        "Multi-language support",
        "Dedicated account manager",
        "Custom integrations",
        "API access",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`glass-card p-8 space-y-6 hover:scale-105 transition-all duration-300 relative ${
                  plan.popular ? "glow-border" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary">
                    MOST POPULAR
                  </Badge>
                )}

                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground mb-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={
                    plan.popular
                      ? "w-full gradient-primary font-semibold"
                      : "w-full"
                  }
                  variant={plan.popular ? "default" : "outline"}
                >
                  Start Free Trial
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
