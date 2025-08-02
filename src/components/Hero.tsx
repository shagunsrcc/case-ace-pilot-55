import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleStartWinning = () => {
    if (user) {
      navigate('/mock-case-interviews');
    } else {
      navigate('/auth', { state: { isSignUp: true } });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-card px-4 py-2 rounded-full text-sm font-medium text-secondary">
                <Sparkles className="w-4 h-4" />
                Your unfair edge for every case comp
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Win{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  smarter
                </span>
                ,<br />
                not harder
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                The AI-powered co-pilot for case competitions. Practice, prepare, and perform with the structure and edge that top-tier students trust.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="group shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={handleStartWinning}
              >
                Start winning today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8 border-t border-muted/50">
              <div className="flex items-center gap-3 text-left">
                <div className="text-primary">✅</div>
                <span className="text-foreground/80">AI-powered case feedback in seconds</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="text-primary">✅</div>
                <span className="text-foreground/80">Partner matching for mock interviews</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="text-primary">✅</div>
                <span className="text-foreground/80">Access to a community platform to clarify your doubts</span>
              </div>
              <div className="flex items-center gap-3 text-left">
                <div className="text-primary">✅</div>
                <span className="text-foreground/80">Real-time competition calendar updates</span>
              </div>
            </div>

            {/* Metrics Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">8</div>
                <div className="text-sm text-muted-foreground">high quality tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-muted-foreground">hours saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-muted-foreground">free, always</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;