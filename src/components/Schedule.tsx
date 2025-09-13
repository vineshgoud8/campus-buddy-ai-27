import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Users, Calendar, BookOpen, Filter } from "lucide-react";

export const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState("current");

  const timeSlots = [
    "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const schedule = {
    Monday: [
      {
        time: "9:00 AM - 10:30 AM",
        course: "Computer Science 101",
        instructor: "Dr. Sarah Chen",
        location: "Tech Building - Room 301",
        type: "Lecture",
        students: 45
      },
      {
        time: "2:00 PM - 3:30 PM",
        course: "Database Systems",
        instructor: "Prof. Michael Rodriguez",
        location: "Computer Lab 2",
        type: "Lab",
        students: 25
      }
    ],
    Tuesday: [
      {
        time: "10:00 AM - 11:30 AM",
        course: "Advanced Mathematics",
        instructor: "Dr. Emily Johnson",
        location: "Science Building - Room 205",
        type: "Lecture",
        students: 38
      },
      {
        time: "3:00 PM - 4:30 PM",
        course: "Software Engineering",
        instructor: "Prof. David Kim",
        location: "Tech Building - Room 105",
        type: "Seminar",
        students: 30
      }
    ],
    Wednesday: [
      {
        time: "9:00 AM - 10:30 AM",
        course: "Computer Science 101",
        instructor: "Dr. Sarah Chen",
        location: "Tech Building - Room 301",
        type: "Lecture",
        students: 45
      },
      {
        time: "1:00 PM - 2:30 PM",
        course: "Business Administration",
        instructor: "Dr. Lisa Wang",
        location: "Business Building - Room 250",
        type: "Workshop",
        students: 35
      }
    ],
    Thursday: [
      {
        time: "11:00 AM - 12:30 PM",
        course: "Physics Laboratory",
        instructor: "Prof. Robert Thompson",
        location: "Physics Building - Room 401",
        type: "Lab",
        students: 20
      },
      {
        time: "2:00 PM - 3:30 PM",
        course: "Database Systems",
        instructor: "Prof. Michael Rodriguez",
        location: "Computer Lab 2",
        type: "Lab",
        students: 25
      }
    ],
    Friday: [
      {
        time: "10:00 AM - 11:30 AM",
        course: "Advanced Mathematics",
        instructor: "Dr. Emily Johnson",
        location: "Science Building - Room 205",
        type: "Lecture",
        students: 38
      },
      {
        time: "4:00 PM - 5:30 PM",
        course: "Research Seminar",
        instructor: "Multiple Faculty",
        location: "Conference Hall",
        type: "Seminar",
        students: 60
      }
    ]
  };

  const upcomingClasses = [
    {
      course: "Computer Science 101",
      time: "Tomorrow 9:00 AM",
      location: "Tech Building - Room 301",
      instructor: "Dr. Sarah Chen",
      urgent: false
    },
    {
      course: "Database Systems Lab",
      time: "Today 2:00 PM",
      location: "Computer Lab 2",
      instructor: "Prof. Michael Rodriguez",
      urgent: true
    },
    {
      course: "Advanced Mathematics",
      time: "Tomorrow 10:00 AM",
      location: "Science Building - Room 205",
      instructor: "Dr. Emily Johnson",
      urgent: false
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Lecture": return "bg-primary text-primary-foreground";
      case "Lab": return "bg-accent text-accent-foreground";
      case "Seminar": return "bg-secondary text-secondary-foreground";
      case "Workshop": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Class Schedules</h1>
        <p className="text-xl text-muted-foreground mb-8">
          View your weekly timetable and upcoming classes
        </p>
      </div>

      {/* Upcoming Classes */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Upcoming Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {upcomingClasses.map((class_, index) => (
            <Card key={index} className={`shadow-soft ${class_.urgent ? 'border-destructive' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{class_.course}</h3>
                    <p className="text-sm text-muted-foreground">{class_.instructor}</p>
                  </div>
                  {class_.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      Soon
                    </Badge>
                  )}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{class_.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{class_.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Weekly Schedule */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Weekly Schedule</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        <Tabs value={selectedWeek} onValueChange={setSelectedWeek}>
          <TabsList className="mb-6">
            <TabsTrigger value="current">Current Week</TabsTrigger>
            <TabsTrigger value="next">Next Week</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {days.map((day) => (
                <div key={day} className="space-y-4">
                  <h3 className="text-lg font-semibold text-center p-4 bg-secondary rounded-lg">
                    {day}
                  </h3>
                  <div className="space-y-3">
                    {schedule[day as keyof typeof schedule]?.map((class_, index) => (
                      <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <Badge className={getTypeColor(class_.type)} variant="secondary">
                                {class_.type}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                {class_.students} students
                              </span>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm">{class_.course}</h4>
                              <p className="text-xs text-muted-foreground">{class_.instructor}</p>
                            </div>
                            
                            <div className="space-y-1 text-xs">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-muted-foreground" />
                                <span>{class_.time}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-muted-foreground" />
                                <span>{class_.location}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="next">
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Next week's schedule will be available soon.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};