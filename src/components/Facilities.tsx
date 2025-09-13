import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Users, 
  Wifi, 
  Car, 
  Accessibility,
  Phone,
  Mail,
  Building,
  Zap
} from "lucide-react";

export const Facilities = () => {
  const facilities = [
    {
      name: "Main Library",
      category: "Academic",
      description: "Multi-floor research and study facility",
      location: "Central Campus, Building A",
      hours: "24/7 for students",
      capacity: "1,200 seats",
      amenities: ["Free WiFi", "Study Rooms", "Computer Lab", "Printing Services", "Quiet Zones"],
      contact: "+1 (555) 100-0001",
      status: "Open",
      availability: 85
    },
    {
      name: "Student Recreation Center",
      category: "Recreation",
      description: "Complete fitness and wellness facility",
      location: "South Campus, Building F",
      hours: "5 AM - 11 PM",
      capacity: "500 members",
      amenities: ["Gym Equipment", "Swimming Pool", "Basketball Courts", "Yoga Studio", "Locker Rooms"],
      contact: "+1 (555) 100-0002",
      status: "Open",
      availability: 65
    },
    {
      name: "Science Laboratory Complex",
      category: "Academic",
      description: "State-of-the-art research facilities",
      location: "North Campus, Building C",
      hours: "8 AM - 10 PM",
      capacity: "200 researchers",
      amenities: ["Research Labs", "Equipment Library", "Clean Rooms", "Safety Stations", "Conference Rooms"],
      contact: "+1 (555) 100-0003",
      status: "Open",
      availability: 45
    },
    {
      name: "Student Union Building",
      category: "Social",
      description: "Hub for student activities and services",
      location: "Central Campus, Building B",
      hours: "6 AM - 12 AM",
      capacity: "1,000 visitors",
      amenities: ["Food Courts", "Meeting Rooms", "Game Room", "Student Services", "ATMs"],
      contact: "+1 (555) 100-0004",
      status: "Open",
      availability: 70
    },
    {
      name: "Technology Center",
      category: "Academic",
      description: "Advanced computing and multimedia facility",
      location: "East Campus, Building D",
      hours: "7 AM - 11 PM",
      capacity: "300 workstations",
      amenities: ["Computer Labs", "3D Printing", "VR Equipment", "Video Studio", "Tech Support"],
      contact: "+1 (555) 100-0005",
      status: "Open",
      availability: 55
    },
    {
      name: "Performing Arts Center",
      category: "Arts",
      description: "Theater and music performance venue",
      location: "West Campus, Building E",
      hours: "9 AM - 9 PM",
      capacity: "800 seats",
      amenities: ["Main Theater", "Rehearsal Rooms", "Music Studios", "Costume Shop", "Sound System"],
      contact: "+1 (555) 100-0006",
      status: "Open",
      availability: 30
    }
  ];

  const campusServices = [
    {
      name: "Campus Security",
      description: "24/7 safety and security services",
      contact: "+1 (555) 911-0000",
      email: "security@university.edu",
      location: "Security Office, Admin Building"
    },
    {
      name: "Maintenance Services",
      description: "Facility maintenance and repairs",
      contact: "+1 (555) 100-1000",
      email: "maintenance@university.edu",
      location: "Facilities Management, Building M"
    },
    {
      name: "IT Help Desk",
      description: "Technology support for students and staff",
      contact: "+1 (555) 100-2000",
      email: "helpdesk@university.edu",
      location: "Technology Center, Room 101"
    },
    {
      name: "Transportation Services",
      description: "Campus shuttle and parking information",
      contact: "+1 (555) 100-3000",
      email: "transport@university.edu",
      location: "Transportation Office, Parking Structure A"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-primary text-primary-foreground";
      case "Recreation": return "bg-accent text-accent-foreground";
      case "Social": return "bg-secondary text-secondary-foreground";
      case "Arts": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (availability: number) => {
    if (availability >= 70) return "text-destructive";
    if (availability >= 40) return "text-orange-500";
    return "text-accent";
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Campus Facilities</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Explore our modern facilities and campus services
        </p>
      </div>

      {/* Facilities Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                  <CardDescription className="mt-1">{facility.description}</CardDescription>
                </div>
                <Badge className={getCategoryColor(facility.category)} variant="secondary">
                  {facility.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{facility.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span>{facility.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>{facility.capacity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{facility.contact}</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Current Occupancy</span>
                  <span className={`text-sm font-medium ${getStatusColor(facility.availability)}`}>
                    {facility.availability}%
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      facility.availability >= 70 ? 'bg-destructive' : 
                      facility.availability >= 40 ? 'bg-orange-500' : 'bg-accent'
                    }`}
                    style={{ width: `${facility.availability}%` }}
                  />
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Amenities:</h4>
                <div className="flex flex-wrap gap-1">
                  {facility.amenities.map((amenity, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <MapPin className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campus Services */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Campus Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campusServices.map((service, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">{service.name}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{service.contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-primary">{service.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-muted-foreground" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Access Information */}
      <div className="bg-gradient-subtle rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Access Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3">
            <Wifi className="w-8 h-8 text-primary" />
            <div>
              <div className="font-semibold">Free WiFi</div>
              <div className="text-sm text-muted-foreground">Available campus-wide</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Car className="w-8 h-8 text-primary" />
            <div>
              <div className="font-semibold">Parking</div>
              <div className="text-sm text-muted-foreground">5 lots available</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Accessibility className="w-8 h-8 text-primary" />
            <div>
              <div className="font-semibold">Accessibility</div>
              <div className="text-sm text-muted-foreground">ADA compliant</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Zap className="w-8 h-8 text-primary" />
            <div>
              <div className="font-semibold">Power Outlets</div>
              <div className="text-sm text-muted-foreground">Available everywhere</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};