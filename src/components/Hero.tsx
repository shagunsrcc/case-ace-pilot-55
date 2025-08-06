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
                Your all-in-one case prep platform, designed for students who want an edge. From mock interviews to deck reviews, get the structure and support that top teams rely on.
              </p>
            </div>

            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="group shadow-medium hover:shadow-strong transition-all duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start winning today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>


            {/* Metrics Block */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <span className="text-lg font-semibold text-secondary">6 High Quality Tools</span>
              <span className="text-lg font-semibold text-secondary">50+ Hours Saved</span>
              <span className="text-lg font-semibold text-secondary">100% Free, Always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;