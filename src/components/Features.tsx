import {
  Brain,
  Calendar,
  FileText,
  MessageSquare,
  Presentation,
  TrendingUp,
  Users2,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Users2,
    title: "Mock Case Interviews",
    description: "Prepare for case interviews with structured, lifelike mock sessions, and get instant, tailored feedback designed to help you improve every time.",
    color: "text-red-800",
    route: "/mock-case-interviews"
  },
  {
    icon: Brain,
    title: "AI Case Deck Evaluator",
    description: "Upload your decks and get instant AI-powered feedback on structure and logic.",
    color: "text-red-800",
    route: "/case-ace-pilot-04"
  },
  {
    icon: FileText,
    title: "Curated Resource Bank",
    description: "A growing library of handpicked resources to help you stay ahead – from frameworks to winning decks.",
    color: "text-red-800",
    route: "/resource-bank"
  },
  {
    icon: Calendar,
    title: "Corporate Case Comp Calendar",
    description: "Never miss a deadline with our comprehensive corporate case competition tracker.",
    color: "text-red-800",
    route: "/competition-calendar"
  },
  {
    icon: TrendingUp,
    title: "Latest Casecomps",
    description: "Stay updated with the most current case competitions and opportunities available.",
    color: "text-red-800",
    route: "/trending-competitions"
  },
  {
    icon: MessageSquare,
    title: "Community Forum",
    description: "Connect with fellow case competitors, share insights, and collaborate on solutions.",
    color: "text-red-800",
    route: "/community-forum"
  }
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-foreground mb-6">
            <Zap className="w-4 h-4" />
            Everything you need to dominate
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Where{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              prep meets
            </span>{" "}
            performance
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From mock interviews to AI feedback, we've built the complete toolkit
            that transforms ambitious students into case competition winners.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            const handleCardClick = () => {
              navigate(feature.route);
            };

            return (
              <Card
                key={index}
                className="group hover:shadow-medium transition-all duration-300 border-border/50 bg-card/80 backdrop-blur-sm animate-scale-in cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={handleCardClick}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
