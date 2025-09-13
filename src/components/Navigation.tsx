import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Users, 
  Calendar, 
  MapPin, 
  UtensilsCrossed, 
  BookOpen, 
  FileText, 
  MessageCircle,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "faculty", label: "Faculty", icon: Users },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "facilities", label: "Facilities", icon: MapPin },
  { id: "dining", label: "Dining", icon: UtensilsCrossed },
  { id: "library", label: "Library", icon: BookOpen },
  { id: "admin", label: "Admin", icon: FileText },
];

export const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                CampusHub
              </h1>
              <div className="flex space-x-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "default" : "ghost"}
                      size="sm"
                      onClick={() => onSectionChange(item.id)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onSectionChange("chat")}
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              AI Assistant
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              CampusHub
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
          
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 space-y-2 animate-fade-in">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    size="sm"
                    onClick={() => {
                      onSectionChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full justify-start gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                );
              })}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  onSectionChange("chat");
                  setIsMobileMenuOpen(false);
                }}
                className="w-full justify-start gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                AI Assistant
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};