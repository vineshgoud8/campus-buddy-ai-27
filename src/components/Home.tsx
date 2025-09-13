import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  Calendar, 
  MapPin, 
  UtensilsCrossed, 
  BookOpen, 
  FileText,
  GraduationCap,
  Bell,
  TrendingUp
} from "lucide-react";

interface HomeProps {
  onSectionChange: (section: string) => void;
}

export const Home = ({ onSectionChange }: HomeProps) => {
  const quickStats = [
    { label: "Total Students", value: "12,847", icon: GraduationCap, color: "text-primary" },
    { label: "Faculty Members", value: "432", icon: Users, color: "text-accent" },
    { label: "Library Seats", value: "1,200", icon: BookOpen, color: "text-primary" },
    { label: "Dining Halls", value: "8", icon: UtensilsCrossed, color: "text-accent" },
  ];

  const quickAccess = [
    { 
      title: "Faculty Directory", 
      description: "Browse faculty profiles and experience",
      icon: Users,
      action: () => onSectionChange("faculty")
    },
    { 
      title: "Class Schedules", 
      description: "View your timetables and course schedules",
      icon: Calendar,
      action: () => onSectionChange("schedule")
    },
    { 
      title: "Campus Facilities", 
      description: "Explore campus buildings and amenities",
      icon: MapPin,
      action: () => onSectionChange("facilities")
    },
    { 
      title: "Dining Services", 
      description: "Check menus and dining hall hours",
      icon: UtensilsCrossed,
      action: () => onSectionChange("dining")
    },
    { 
      title: "Library Resources", 
      description: "Find books, study spaces and more",
      icon: BookOpen,
      action: () => onSectionChange("library")
    },
    { 
      title: "Admin Procedures", 
      description: "Access forms and administrative guides",
      icon: FileText,
      action: () => onSectionChange("admin")
    },
  ];

  const announcements = [
    {
      title: "New Library Study Rooms Available",
      description: "Additional study spaces now open on the 3rd floor",
      time: "2 hours ago",
      urgent: false
    },
    {
      title: "Campus WiFi Maintenance Tonight",
      description: "Network will be unavailable 11 PM - 2 AM",
      time: "5 hours ago",
      urgent: true
    },
    {
      title: "Faculty Research Symposium Next Week",
      description: "Join us for presentations on cutting-edge research",
      time: "1 day ago",
      urgent: false
    }
  ];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white shadow-strong">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to CampusHub
        </h1>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Your complete student portal for campus life
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          onClick={() => onSectionChange("chat")}
          className="gap-2"
        >
          <TrendingUp className="w-5 h-5" />
          Ask AI Assistant
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center shadow-soft hover:shadow-medium transition-smooth">
              <CardContent className="pt-6">
                <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickAccess.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="cursor-pointer shadow-soft hover:shadow-medium transition-smooth hover:scale-105"
                onClick={item.action}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Announcements */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Campus Announcements</h2>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Bell className={`w-4 h-4 ${announcement.urgent ? 'text-destructive' : 'text-primary'}`} />
                      <h3 className="font-semibold">{announcement.title}</h3>
                      {announcement.urgent && (
                        <span className="px-2 py-1 text-xs bg-destructive text-destructive-foreground rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-2">{announcement.description}</p>
                    <p className="text-sm text-muted-foreground">{announcement.time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};