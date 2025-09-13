import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Users, 
  Clock, 
  MapPin, 
  Search,
  Wifi,
  Printer,
  Coffee,
  Monitor,
  Volume2,
  VolumeX,
  Calendar,
  Phone
} from "lucide-react";

export const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const floorData = [
    {
      floor: "Ground Floor",
      totalSeats: 400,
      availableSeats: 85,
      zones: [
        { name: "General Study Area", seats: 200, available: 45, type: "general" },
        { name: "Computer Lab", seats: 50, available: 12, type: "computer" },
        { name: "Collaborative Spaces", seats: 100, available: 20, type: "group" },
        { name: "Circulation Desk Area", seats: 50, available: 8, type: "service" }
      ],
      amenities: ["Information Desk", "Book Returns", "Printing Services", "Café Corner"],
      noiseLevel: "Moderate conversation allowed"
    },
    {
      floor: "Second Floor",
      totalSeats: 500,
      availableSeats: 125,
      zones: [
        { name: "Quiet Study Zone", seats: 300, available: 75, type: "quiet" },
        { name: "Reading Room", seats: 100, available: 25, type: "reading" },
        { name: "Research Carrels", seats: 80, available: 20, type: "individual" },
        { name: "Reference Section", seats: 20, available: 5, type: "reference" }
      ],
      amenities: ["Silent Study", "Research Collections", "Copy Machines", "Study Carrels"],
      noiseLevel: "Whisper zone - Very quiet"
    },
    {
      floor: "Third Floor",
      totalSeats: 300,
      availableSeats: 180,
      zones: [
        { name: "Group Study Rooms", seats: 120, available: 80, type: "group" },
        { name: "Presentation Practice", seats: 40, available: 25, type: "presentation" },
        { name: "Graduate Study Area", seats: 100, available: 60, type: "graduate" },
        { name: "Faculty Research", seats: 40, available: 15, type: "faculty" }
      ],
      amenities: ["Bookable Rooms", "Whiteboards", "Projectors", "Graduate Resources"],
      noiseLevel: "Normal conversation allowed"
    }
  ];

  const resources = [
    {
      category: "Digital Resources",
      items: [
        { name: "Academic Databases", description: "Access to 500+ academic databases", available: true },
        { name: "E-Book Collection", description: "Over 100,000 digital books", available: true },
        { name: "Research Journals", description: "Scientific and academic journals", available: true },
        { name: "Multimedia Collection", description: "Videos, audio, and interactive content", available: true }
      ]
    },
    {
      category: "Physical Collections",
      items: [
        { name: "General Collection", description: "300,000+ books and materials", available: true },
        { name: "Reference Materials", description: "Encyclopedias, dictionaries, atlases", available: true },
        { name: "Special Collections", description: "Rare books and historical documents", available: true },
        { name: "Periodicals", description: "Current and back issues of magazines", available: true }
      ]
    },
    {
      category: "Technology Services",
      items: [
        { name: "Computer Workstations", description: "50 public computers with software", available: true },
        { name: "Laptop Lending", description: "Short-term laptop checkout", available: true },
        { name: "Printing & Scanning", description: "Black & white and color printing", available: true },
        { name: "Wi-Fi Access", description: "Free high-speed internet", available: true }
      ]
    }
  ];

  const studyRooms = [
    {
      name: "Group Study Room A",
      capacity: 6,
      floor: "3rd Floor",
      amenities: ["Whiteboard", "TV Display", "Outlets"],
      availability: "Available now",
      nextBooking: "2:00 PM - 4:00 PM"
    },
    {
      name: "Group Study Room B", 
      capacity: 8,
      floor: "3rd Floor",
      amenities: ["Projector", "Whiteboard", "Conference Table"],
      availability: "Occupied until 1:30 PM",
      nextBooking: "3:00 PM - 5:00 PM"
    },
    {
      name: "Presentation Practice Room",
      capacity: 4,
      floor: "3rd Floor", 
      amenities: ["Recording Equipment", "Projector", "Podium"],
      availability: "Available now",
      nextBooking: "4:00 PM - 6:00 PM"
    },
    {
      name: "Silent Study Room",
      capacity: 12,
      floor: "2nd Floor",
      amenities: ["Individual Desks", "Reading Lights", "Silent Zone"],
      availability: "Available now",
      nextBooking: "Evening reserved"
    }
  ];

  const libraryHours = {
    "Monday - Thursday": "7:00 AM - 11:00 PM",
    "Friday": "7:00 AM - 9:00 PM", 
    "Saturday": "9:00 AM - 8:00 PM",
    "Sunday": "10:00 AM - 10:00 PM"
  };

  const getOccupancyColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage <= 20) return "text-destructive";
    if (percentage <= 50) return "text-orange-500";
    return "text-accent";
  };

  const getZoneIcon = (type: string) => {
    switch (type) {
      case "computer": return Monitor;
      case "quiet": return VolumeX;
      case "group": return Users;
      case "general": return BookOpen;
      case "reading": return BookOpen;
      default: return BookOpen;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Library Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your gateway to knowledge with 1,200 study spaces and extensive resources
        </p>
      </div>

      {/* Library Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="text-center shadow-soft">
          <CardContent className="pt-6">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">300K+</div>
            <div className="text-sm text-muted-foreground">Books & Materials</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft">
          <CardContent className="pt-6">
            <Users className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">1,200</div>
            <div className="text-sm text-muted-foreground">Study Seats</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft">
          <CardContent className="pt-6">
            <Monitor className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold">50</div>
            <div className="text-sm text-muted-foreground">Computer Stations</div>
          </CardContent>
        </Card>
        <Card className="text-center shadow-soft">
          <CardContent className="pt-6">
            <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-muted-foreground">Access Available</div>
          </CardContent>
        </Card>
      </div>

      {/* Floor-by-Floor Seating */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Real-Time Seating Availability</h2>
        <div className="space-y-6">
          {floorData.map((floor, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>{floor.floor}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      {floor.noiseLevel === "Whisper zone - Very quiet" && <VolumeX className="w-4 h-4" />}
                      {floor.noiseLevel !== "Whisper zone - Very quiet" && <Volume2 className="w-4 h-4" />}
                      {floor.noiseLevel}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getOccupancyColor(floor.availableSeats, floor.totalSeats)}`}>
                      {floor.availableSeats} available
                    </div>
                    <div className="text-sm text-muted-foreground">
                      of {floor.totalSeats} seats
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {floor.zones.map((zone, zoneIndex) => {
                      const ZoneIcon = getZoneIcon(zone.type);
                      return (
                        <div key={zoneIndex} className="p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <ZoneIcon className="w-4 h-4 text-muted-foreground" />
                            <span className="font-medium text-sm">{zone.name}</span>
                          </div>
                          <div className={`text-lg font-bold ${getOccupancyColor(zone.available, zone.seats)}`}>
                            {zone.available}/{zone.seats}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Floor Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {floor.amenities.map((amenity, amenityIndex) => (
                        <Badge key={amenityIndex} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Study Rooms */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Study Room Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studyRooms.map((room, index) => (
            <Card key={index} className="shadow-soft">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{room.name}</h3>
                    <Badge 
                      variant={room.availability.includes("Available") ? "default" : "secondary"}
                      className={room.availability.includes("Available") ? "bg-accent" : ""}
                    >
                      {room.availability}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Capacity: {room.capacity} people</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{room.floor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>Next booking: {room.nextBooking}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Amenities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {room.amenities.map((amenity, amenityIndex) => (
                        <Badge key={amenityIndex} variant="outline" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    variant={room.availability.includes("Available") ? "default" : "outline"} 
                    size="sm" 
                    className="w-full"
                    disabled={!room.availability.includes("Available")}
                  >
                    {room.availability.includes("Available") ? "Reserve Room" : "View Schedule"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Resources & Services */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Resources & Services</h2>
        <div className="space-y-6">
          {resources.map((category, index) => (
            <Card key={index} className="shadow-soft">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <Badge variant={item.available ? "default" : "secondary"} className="mt-1">
                        {item.available ? "Available" : "Unavailable"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Library Information */}
      <div className="bg-gradient-subtle rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-6">Library Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Operating Hours</h3>
            <div className="space-y-2">
              {Object.entries(libraryHours).map(([day, hours]) => (
                <div key={day} className="flex justify-between">
                  <span className="font-medium">{day}:</span>
                  <span>{hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>Main Desk: +1 (555) 300-0001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>Research Help: +1 (555) 300-0002</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>Central Campus, Building A</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-muted-foreground" />
                <span>Free Wi-Fi: CampusLibrary</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};