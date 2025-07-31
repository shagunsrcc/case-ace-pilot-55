import { Sparkles, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Platform",
    links: [
      "Mock Interviews",
      "AI Deck Evaluator", 
      "Resource Bank",
      "Competition Calendar"
    ]
  },
  {
    title: "Resources",
    links: [
      "Case Frameworks",
      "Winning Decks",
      "Cheat Sheets",
      "Success Stories"
    ]
  },
  {
    title: "Community",
    links: [
      "Partner Matching",
      "Study Groups",
      "Mentorship",
      "Events"
    ]
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Careers",
      "Contact",
      "Privacy Policy"
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Consultory</span>
            </div>
            
            <p className="text-background/80 max-w-md leading-relaxed">
              The AI-powered platform helping ambitious students dominate case competitions 
              with confidence. Built for the next generation of strategic thinkers.
            </p>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-background/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-background/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-background/10">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-10 h-10 p-0 hover:bg-background/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-background/80 hover:text-background transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2024 Consultory. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-background transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;