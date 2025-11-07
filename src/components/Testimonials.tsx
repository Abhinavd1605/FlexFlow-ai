import { TestimonialSlider } from "./TestimonialSlider";

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            What Our <span className="gradient-text">Client Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with FlexFlow AI.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};
