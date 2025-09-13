import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  GraduationCap,
  UserCheck,
  Calendar,
  Building
} from "lucide-react";

export const Admin = () => {
  const procedures = [
    {
      category: "Academic Services",
      items: [
        {
          title: "Course Registration",
          description: "Register for classes and manage your academic schedule",
          deadline: "Registration opens March 15",
          status: "upcoming",
          steps: [
            "Log into Student Portal",
            "Navigate to Course Registration",
            "Search available courses",
            "Check prerequisites",
            "Add courses to cart",
            "Submit registration"
          ],
          contact: "registrar@university.edu",
          phone: "+1 (555) 400-0001"
        },
        {
          title: "Transcript Request",
          description: "Order official transcripts for graduation or transfer",
          deadline: "Allow 5-7 business days",
          status: "available",
          steps: [
            "Visit Student Records Office",
            "Complete transcript request form",
            "Provide photo ID",
            "Pay required fees",
            "Choose delivery method",
            "Receive confirmation"
          ],
          contact: "records@university.edu",
          phone: "+1 (555) 400-0002"
        },
        {
          title: "Graduation Application",
          description: "Apply for graduation and degree conferment",
          deadline: "Due 2 semesters before graduation",
          status: "available",
          steps: [
            "Meet with academic advisor",
            "Complete degree audit",
            "Submit graduation application",
            "Pay graduation fees",
            "Order cap and gown",
            "Attend graduation ceremony"
          ],
          contact: "graduation@university.edu",
          phone: "+1 (555) 400-0003"
        }
      ]
    },
    {
      category: "Financial Services",
      items: [
        {
          title: "Tuition Payment",
          description: "Pay tuition and fees online or in person",
          deadline: "Due by semester start",
          status: "urgent",
          steps: [
            "Log into Student Portal",
            "Navigate to Billing",
            "Review charges",
            "Select payment method",
            "Enter payment details",
            "Save confirmation receipt"
          ],
          contact: "billing@university.edu",
          phone: "+1 (555) 400-0011"
        },
        {
          title: "Financial Aid Application",
          description: "Apply for grants, scholarships, and student loans",
          deadline: "FAFSA due March 1",
          status: "upcoming",
          steps: [
            "Complete FAFSA online",
            "Submit required documents",
            "Review aid package",
            "Accept/decline aid offers",
            "Complete entrance counseling",
            "Sign master promissory note"
          ],
          contact: "finaid@university.edu",
          phone: "+1 (555) 400-0012"
        }
      ]
    },
    {
      category: "Student Life",
      items: [
        {
          title: "Housing Application",
          description: "Apply for on-campus housing and meal plans",
          deadline: "Priority deadline April 1",
          status: "available",
          steps: [
            "Complete housing application online",
            "Pay housing deposit",
            "Select roommate preferences",
            "Choose meal plan",
            "Attend housing orientation",
            "Move-in on assigned date"
          ],
          contact: "housing@university.edu",
          phone: "+1 (555) 400-0021"
        },
        {
          title: "Student ID Card",
          description: "Get your official student identification card",
          deadline: "Available during orientation",
          status: "available",
          steps: [
            "Visit ID Card Office",
            "Bring photo identification",
            "Have photo taken",
            "Activate card services",
            "Add dining plan funds",
            "Receive ID card"
          ],
          contact: "idcard@university.edu",
          phone: "+1 (555) 400-0022"
        }
      ]
    }
  ];

  const forms = [
    { name: "Course Add/Drop Form", category: "Academic", format: "PDF" },
    { name: "Leave of Absence Request", category: "Academic", format: "PDF" },
    { name: "Grade Appeal Form", category: "Academic", format: "PDF" },
    { name: "Emergency Contact Update", category: "Personal", format: "Online" },
    { name: "Address Change Form", category: "Personal", format: "Online" },
    { name: "Parking Permit Application", category: "Services", format: "PDF" },
    { name: "Student Organization Registration", category: "Activities", format: "PDF" },
    { name: "Health Insurance Waiver", category: "Health", format: "Online" },
    { name: "Internship Credit Request", category: "Academic", format: "PDF" },
    { name: "Study Abroad Application", category: "Academic", format: "Online" }
  ];

  const officeHours = [
    {
      office: "Registrar's Office",
      location: "Admin Building, Room 150",
      hours: "Mon-Fri: 8 AM - 5 PM",
      phone: "+1 (555) 400-0001",
      email: "registrar@university.edu",
      services: ["Registration", "Transcripts", "Enrollment Verification"]
    },
    {
      office: "Financial Aid Office",
      location: "Student Services Building, Room 200",
      hours: "Mon-Fri: 8 AM - 4:30 PM",
      phone: "+1 (555) 400-0012",
      email: "finaid@university.edu",
      services: ["FAFSA", "Scholarships", "Student Loans"]
    },
    {
      office: "Student Accounts",
      location: "Admin Building, Room 120",
      hours: "Mon-Fri: 8:30 AM - 4:30 PM",
      phone: "+1 (555) 400-0011",
      email: "billing@university.edu",
      services: ["Tuition Billing", "Payment Plans", "Refunds"]
    },
    {
      office: "Housing & Residence Life",
      location: "Residence Hall A, Ground Floor",
      hours: "Mon-Fri: 9 AM - 5 PM",
      phone: "+1 (555) 400-0021",
      email: "housing@university.edu",
      services: ["Room Assignments", "Meal Plans", "Maintenance"]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "urgent": return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "upcoming": return <Clock className="w-4 h-4 text-orange-500" />;
      case "available": return <CheckCircle className="w-4 h-4 text-accent" />;
      default: return <CheckCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent": return "text-destructive";
      case "upcoming": return "text-orange-500";
      case "available": return "text-accent";
      default: return "text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic": return GraduationCap;
      case "Personal": return UserCheck;
      case "Services": return Building;
      case "Activities": return Calendar;
      case "Health": return AlertCircle;
      default: return FileText;
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Administrative Procedures</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Complete guide to campus procedures, forms, and office information
        </p>
      </div>

      <Tabs defaultValue="procedures" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="procedures">Procedures</TabsTrigger>
          <TabsTrigger value="forms">Forms & Documents</TabsTrigger>
          <TabsTrigger value="offices">Office Hours</TabsTrigger>
        </TabsList>

        <TabsContent value="procedures" className="space-y-6">
          {procedures.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-soft">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.items.map((procedure, procedureIndex) => (
                    <Card key={procedureIndex} className="shadow-none border">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{procedure.title}</CardTitle>
                            <CardDescription className="mt-1">{procedure.description}</CardDescription>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusIcon(procedure.status)}
                            <span className={`text-sm font-medium ${getStatusColor(procedure.status)}`}>
                              {procedure.deadline}
                            </span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-3">Step-by-Step Process:</h4>
                          <div className="space-y-2">
                            {procedure.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start gap-3">
                                <Badge variant="outline" className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs">
                                  {stepIndex + 1}
                                </Badge>
                                <span className="text-sm">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <span className="text-primary">{procedure.contact}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span>{procedure.phone}</span>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Start Process
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="forms" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {forms.map((form, index) => {
              const IconComponent = getCategoryIcon(form.category);
              return (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-primary" />
                          <div>
                            <h3 className="font-semibold text-sm">{form.name}</h3>
                            <p className="text-xs text-muted-foreground">{form.category}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {form.format}
                        </Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                        {form.format === "Online" && (
                          <Button variant="default" size="sm" className="flex-1">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Fill Online
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="offices" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officeHours.map((office, index) => (
              <Card key={index} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">{office.office}</CardTitle>
                  <CardDescription>{office.hours}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{office.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-primary">{office.email}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Services Offered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {office.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="text-xs">
                          {service}
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
        </TabsContent>
      </Tabs>

      {/* Emergency Contacts */}
      <div className="bg-gradient-subtle rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Emergency Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <div>
              <div className="font-semibold">Campus Security</div>
              <div className="text-sm text-muted-foreground">24/7 Emergency: 911</div>
              <div className="text-sm text-muted-foreground">Non-Emergency: +1 (555) 911-0000</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8 text-primary" />
            <div>
              <div className="font-semibold">Student Services</div>
              <div className="text-sm text-muted-foreground">Main Line: +1 (555) 400-0000</div>
              <div className="text-sm text-muted-foreground">After Hours: +1 (555) 400-9999</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-8 h-8 text-accent" />
            <div>
              <div className="font-semibold">IT Help Desk</div>
              <div className="text-sm text-muted-foreground">Tech Support: +1 (555) 100-2000</div>
              <div className="text-sm text-muted-foreground">Email: helpdesk@university.edu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};