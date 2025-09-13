import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Mail, Phone, MapPin, Star, Award } from "lucide-react";

export const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Professor of Computer Science",
      department: "Computer Science",
      experience: "15 years",
      email: "s.chen@university.edu",
      phone: "+1 (555) 123-4567",
      office: "Tech Building, Room 301",
      specialization: ["Artificial Intelligence", "Machine Learning", "Data Science"],
      rating: 4.8,
      image: "/api/placeholder/150/150"
    },
    {
      id: 2,
      name: "Prof. Michael Rodriguez",
      title: "Associate Professor of Mathematics",
      department: "Mathematics",
      experience: "12 years",
      email: "m.rodriguez@university.edu",
      phone: "+1 (555) 234-5678",
      office: "Science Building, Room 205",
      specialization: ["Calculus", "Linear Algebra", "Statistics"],
      rating: 4.6,
      image: "/api/placeholder/150/150"
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      title: "Professor of Biology",
      department: "Life Sciences",
      experience: "18 years",
      email: "e.johnson@university.edu",
      phone: "+1 (555) 345-6789",
      office: "Biology Building, Room 102",
      specialization: ["Molecular Biology", "Genetics", "Biochemistry"],
      rating: 4.9,
      image: "/api/placeholder/150/150"
    },
    {
      id: 4,
      name: "Prof. David Kim",
      title: "Assistant Professor of Physics",
      department: "Physics",
      experience: "8 years",
      email: "d.kim@university.edu",
      phone: "+1 (555) 456-7890",
      office: "Physics Building, Room 401",
      specialization: ["Quantum Physics", "Thermodynamics", "Optics"],
      rating: 4.7,
      image: "/api/placeholder/150/150"
    },
    {
      id: 5,
      name: "Dr. Lisa Wang",
      title: "Professor of Business Administration",
      department: "Business",
      experience: "20 years",
      email: "l.wang@university.edu",
      phone: "+1 (555) 567-8901",
      office: "Business Building, Room 250",
      specialization: ["Strategic Management", "Finance", "Marketing"],
      rating: 4.5,
      image: "/api/placeholder/150/150"
    },
    {
      id: 6,
      name: "Prof. Robert Thompson",
      title: "Associate Professor of English Literature",
      department: "English",
      experience: "14 years",
      email: "r.thompson@university.edu",
      phone: "+1 (555) 678-9012",
      office: "Humanities Building, Room 115",
      specialization: ["Victorian Literature", "Creative Writing", "Literary Theory"],
      rating: 4.4,
      image: "/api/placeholder/150/150"
    }
  ];

  const filteredFaculty = facultyMembers.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const departments = [...new Set(facultyMembers.map(member => member.department))];

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Meet our distinguished faculty members and their expertise
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search faculty by name, department, or specialization..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {departments.map((dept) => {
          const count = facultyMembers.filter(member => member.department === dept).length;
          return (
            <Card key={dept} className="text-center shadow-soft">
              <CardContent className="pt-4">
                <div className="text-2xl font-bold text-primary">{count}</div>
                <div className="text-sm text-muted-foreground">{dept}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((member) => (
          <Card key={member.id} className="shadow-soft hover:shadow-medium transition-smooth">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="text-xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription className="text-primary font-medium">
                {member.title}
              </CardDescription>
              <div className="flex items-center justify-center gap-1 mt-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{member.rating}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span>{member.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-primary">{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{member.office}</span>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Specializations:</h4>
                <div className="flex flex-wrap gap-1">
                  {member.specialization.map((spec, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact Faculty
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredFaculty.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No faculty members found matching your search.</p>
        </div>
      )}
    </div>
  );
};