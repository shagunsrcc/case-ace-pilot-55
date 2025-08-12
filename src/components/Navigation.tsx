import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, LogOut } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const handleNavClick = (item: { name: string; href: string }) => {
    if (item.name === "Features") {
      const featuresElement = document.getElementById('features');
      if (featuresElement) {
        featuresElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item.name === "Community") {
      navigate('/community-forum');
    } else if (item.href.startsWith('/')) {
      navigate(item.href);
    } else {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Resources", href: "/resource-bank" },
    { name: "Community", href: "/community-forum" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Consultory</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <span className="text-sm text-muted-foreground">
                  Welcome, {user.email}
                </span>
                <Button 
                  variant="ghost" 
                  className="font-medium"
                  onClick={handleSignOut}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  className="font-medium"
                  onClick={() => navigate('/auth')}
                >
                  Sign in
                </Button>
                <Button 
                  className="shadow-soft hover:shadow-medium transition-all duration-300"
                  onClick={() => navigate('/auth')}
                >
                  Get started
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    handleNavClick(item);
                    setIsOpen(false);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2 text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                {user ? (
                  <>
                    <span className="text-sm text-muted-foreground px-3 py-2">
                      Welcome, {user.email}
                    </span>
                    <Button 
                      variant="ghost" 
                      className="justify-start"
                      onClick={handleSignOut}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      className="justify-start"
                      onClick={() => navigate('/auth')}
                    >
                      Sign in
                    </Button>
                    <Button 
                      className="justify-start"
                      onClick={() => navigate('/auth')}
                    >
                      Get started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;