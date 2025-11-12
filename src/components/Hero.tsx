'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[650px] bg-black/[0.96] relative overflow-hidden border-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
        <div className="h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center h-full max-w-7xl mx-auto">
              {/* Left Content */}
              <div className="space-y-8 text-left">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 glass-card px-4 py-2 animate-fade-in w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  <span className="text-sm font-medium">✨ AI-Powered Business Automation</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-black leading-tight sm:leading-[1.1] animate-fade-in">
                  Automate <br />
                  Everything. <br />
                  <span className="gradient-text font-black">Effortlessly.</span>
                </h1>

                {/* Subheading */}
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl animate-fade-in">
                  FlexFlow AI builds smart agents that handle your calls, chats, and workflows — 
                  so your business never stops moving.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in">
                  <Button size="lg" className="gradient-primary font-semibold text-base group">
                    See Live Demo
                    <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="glow-border text-base group"
                    onClick={() => window.open('https://calendly.com/team-flexflowai/30min', '_blank', 'noopener,noreferrer')}
                  >
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right content */}
              <div className="relative h-full w-full min-h-[400px] lg:min-h-[500px]">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
  )
}
export default SplineSceneBasic