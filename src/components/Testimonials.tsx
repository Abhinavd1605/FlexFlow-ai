import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Owner, Premium Car Wash",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      content: "FlexFlow AI handles 70% of our calls — pure magic! Our customers love the instant responses and we've freed up our staff to focus on service quality.",
      rating: 5,
    },
    {
      name: "Dr. Priya Sharma",
      role: "Clinic Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      content: "Patient scheduling has never been easier. The AI understands medical terminology and handles appointment bookings flawlessly. Game changer for our clinic!",
      rating: 5,
    },
    {
      name: "Amit Patel",
      role: "Real Estate Agency",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
      content: "We've increased lead response time by 90%. The AI qualifies leads 24/7 and our conversion rates have skyrocketed. Best investment we've made!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonial" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              What Our <span className="gradient-text">Clients</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Real results from businesses that trust FlexFlow AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 space-y-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
