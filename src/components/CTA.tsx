import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const benefits = [
  "AI-powered case feedback in seconds",
  "Access to well curated resources", 
  "Mock Case Interviews",
  "Real-time competition calendar updates"
];

const CTA = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/mock-case-interviews');
    } else {
      navigate('/auth', { state: { isSignUp: true } });
    }
  };
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

              {/* CTA Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  className="group shadow-medium hover:shadow-strong transition-all duration-300 px-12"
                  onClick={handleGetStarted}
                >
                  Get started for free
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Trusted by students from top-tier institutions
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;