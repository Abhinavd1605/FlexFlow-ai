import { Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Team member images (stored in public/team/images/)
const vishnuImage = '/team/images/vishnu.jpg';

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
};
export const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Siddamsetti Vishnu Vardhan",
      role: "Founder & CEO",
      description:
        "Full Stack & AI Engineer from IIIT Pune, passionate about building intelligent automation products using React, FastAPI, and cloud-native architectures. Vishnu has developed multiple SaaS and AI-driven systems, now channeling that experience to scale FlexFlow AI into a next-gen automation agency.",
      image: vishnuImage,
      social: {
        linkedin: "https://linkedin.com/in/vishnu-siddamsetti",
        twitter: "vishnu_vardhan07",
        email: "vishnu@flexflow.ai",
      },
    },
    {
      name: "Hrishikesh Poloju",
      role: "Co-Founder & CTO",
      description:
        "Distributed Systems & Backend Engineer from IIIT Pune with deep expertise in scalable infrastructures and data pipelines. Having worked on AI automation tools and SaaS systems, Hrishikesh now drives FlexFlow’s core technology, blending innovation with real-world performance.",
      image: "/team/hrishikesh.jpg",
      social: {
        linkedin: "https://linkedin.com/in/hrishikeshpoloju",
        twitter: "hrishipoloju",
        email: "hrishikesh@flexflow.ai",
      },
    },
  ];
  return (
    <section id="team" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              The <span className="gradient-text">Founders</span> Behind FlexFlow AI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Before launching FlexFlow AI, we built SaaS products and custom AI solutions 
              for clients across domains — from real-time automation systems to data-driven dashboards.
              Now, we’re bringing that same technical depth to help modern businesses automate intelligently.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Avatar */}
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // If image fails to load, show the fallback
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div 
                      className={`w-full h-full flex items-center justify-center text-4xl text-muted-foreground font-bold ${member.image ? 'hidden' : 'flex'}`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6">{member.description}</p>

                    {/* Social */}
                    <div className="flex justify-center md:justify-start gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#0077b5] transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`https://twitter.com/${member.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-[#1da1f2] transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4">Join Our Journey 🚀</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We’re building FlexFlow AI to make automation smarter and accessible.
              If you’re passionate about AI, full-stack development, or creative tech —
              we’d love to have you on board.
            </p>
            <Button
              size="lg"
              className="group"
              onClick={() =>
                window.open("mailto:careers@flexflow.ai", "_blank", "noopener,noreferrer")
              }
            >
              Join the Team
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
