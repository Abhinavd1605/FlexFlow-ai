import { Car, Heart, Scissors, GraduationCap, Home, Dumbbell, Dog, Wrench } from "lucide-react";

export const Industries = () => {
  const industries = [
    { icon: Car, name: "Car Wash", description: "Automated booking and customer management" },
    { icon: Heart, name: "Clinic", description: "Patient scheduling and follow-ups" },
    { icon: Scissors, name: "Salon", description: "Appointment management and reminders" },
    { icon: GraduationCap, name: "Education", description: "Student queries and enrollment" },
    { icon: Home, name: "Real Estate", description: "Lead management and property inquiries" },
    { icon: Dumbbell, name: "Fitness", description: "Class bookings and member support" },
    { icon: Dog, name: "Pet Care", description: "Appointment scheduling and pet records" },
    { icon: Wrench, name: "Home Services", description: "Service requests and scheduling" },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Industries We <span className="gradient-text">Empower</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Tailored AI solutions for diverse business sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center space-y-3 hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto rounded-xl gradient-primary flex items-center justify-center group-hover:animate-glow">
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold">{industry.name}</h3>
                <p className="text-sm text-muted-foreground">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
