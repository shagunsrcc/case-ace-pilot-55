import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  "AI-powered case feedback in seconds",
  "Access to 500+ winning case decks", 
  "Partner matching for mock interviews",
  "Real-time competition calendar updates"
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <Card className="max-w-4xl mx-auto bg-gradient-hero border-0 shadow-strong animate-scale-in">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary">
                  <Sparkles className="w-4 h-4" />
                  Ready to dominate your next case competition?
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Start winning{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    today
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Join the platform that's helped thousands of students from top-tier institutions 
                  win their dream case competitions.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-left animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="group shadow-medium hover:shadow-strong transition-all duration-300 px-8"
                >
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:bg-primary/5 px-8"
                >
                  Book a demo
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Trusted by students from
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
                  <span>IIM Ahmedabad</span>
                  <span>IIT Delhi</span>
                  <span>SRCC</span>
                  <span>BITS Pilani</span>
                  <span>ISB Hyderabad</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;