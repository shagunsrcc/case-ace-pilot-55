import { Trophy, Users, Target, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12,000+",
    label: "Active Students",
    description: "From IIM, IIT, SRCC, BITS"
  },
  {
    icon: Trophy,
    value: "750+",
    label: "Competitions Won",
    description: "Across top-tier competitions"
  },
  {
    icon: Target,
    value: "94%",
    label: "Success Rate",
    description: "Students advance to finals"
  },
  {
    icon: Award,
    value: "200+",
    label: "Partner Companies",
    description: "Hosting case competitions"
  }
];

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by the best,{" "}
            <br className="hidden sm:block" />
            <span className="text-white/80">built for winners</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join thousands of ambitious students who've transformed their case competition performance with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                
                <div className="text-lg font-semibold text-white/90 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-white/70">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;