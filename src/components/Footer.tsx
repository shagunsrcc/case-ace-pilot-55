import { Sparkles, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

const footerSections = [
  {
    title: "Platform",
    links: [
      { name: "Mock Interviews", path: "https://share.google/H4g96lVD29YRs8ch2" },
      { name: "Resource Bank", path: "/resource-bank" },
      { name: "Competition Calendar", path: "/competition-calendar" },
      { name: "Resume Scoring", path: "https://share.google/iHAkudeksTEC8Awvf" },
    ]
  },
  {
    title: "About Us",
    links: [
      { name: "Anushka Sharma", path: "https://www.linkedin.com/in/anushka-sharma-009a99327/" },
      { name: "Shagun Chaubey", path: "https://www.linkedin.com/in/shagun-chaubey/" }
    ]
  },
  {
    title: "Contact Us",
    links: [
      { name: "team.consultory@gmail.com", path: "mailto:team.consultory@gmail.com" }
    ]
  }
];

const Footer = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLinkClick = async (path: string) => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (path === "https://preview--crimson-talk-hive.lovable.app/") {
      navigate('/community-forum');
    } else if (path === "https://preview--mock-interview.lovable.app/") {
      navigate('/mock-case-interviews');
    } else if (path.startsWith("https")) {
      if (session) {
        window.open(path, "_blank")
      } else {
        navigate("/auth");
      }
    } else {
      window.open(path, "_self");
    }
  };

  const handleAuthClick = (isSignUp: boolean) => {
    navigate('/auth', { state: { isSignUp } });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Consultory</span>
            </div>

            <p className="text-background/80 max-w-md leading-relaxed">
              Built for ambitious students who think ahead. Practice, prep and present with structure and smart tools that work as hard as you do.
            </p>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 hover:bg-background/10"
                onClick={() => window.open('https://www.instagram.com/consultory2025/', '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 hover:bg-background/10"
                onClick={() => window.open('https://www.linkedin.com/company/consultory-co/about/', '_blank')}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-10 h-10 p-0 hover:bg-background/10"
                onClick={() => window.open('mailto:team.consultory@gmail.com', '_self')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>

            {/* Auth buttons */}
            {!user && (
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAuthClick(false)}
                  className="border-background/20 text-foreground hover:bg-background/10"
                >
                  Sign In
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleAuthClick(true)}
                  className="bg-background text-foreground hover:bg-background/90"
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>

          {/* Links */}
          {footerSections.filter(section => section.title !== "About Us").map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleLinkClick(link.path)}
                      className="text-background/80 hover:text-background transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-6">
            <div className="text-center sm:text-left">
              <p className="text-background/60 text-sm">
                © 2025 Consultory. All rights reserved.
              </p>
              <p className="text-background/80 text-sm font-medium mt-1">
                Built by students, for students.
              </p>
            </div>

            {/* About Us */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">About Us</h3>
              <div className="flex gap-8">
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-background/80 text-sm font-medium">Anushka Sharma</p>
                    <p className="text-background/60 text-xs">Co-founder, Consultory</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-background/10"
                    onClick={() => window.open('https://www.linkedin.com/in/anushka-sharma-009a99327/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <p className="text-background/80 text-sm font-medium">Shagun Chaubey</p>
                    <p className="text-background/60 text-xs">Co-founder, Consultory</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-8 h-8 p-0 hover:bg-background/10"
                    onClick={() => window.open('https://www.linkedin.com/in/shagun-chaubey/', '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;