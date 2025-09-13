import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Clock, 
  MapPin, 
  Users, 
  UtensilsCrossed,
  BookOpen,
  FileText,
  Calendar
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "text" | "suggestion";
}

export const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your CampusHub AI assistant. I can help you with:\n\n• Faculty information and contact details\n• Class schedules and timetables\n• Campus facilities and locations\n• Dining services and menus\n• Library resources and seat availability\n• Administrative procedures\n• General campus information\n\nWhat would you like to know?",
      sender: "ai",
      timestamp: new Date(),
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    { text: "What's the library seating capacity?", icon: BookOpen },
    { text: "Show me today's dining menu", icon: UtensilsCrossed },
    { text: "Find Dr. Sarah Chen's office hours", icon: Users },
    { text: "What time does the computer lab close?", icon: Clock },
    { text: "How do I register for courses?", icon: FileText },
    { text: "Where is the Physics building?", icon: MapPin },
  ];

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(content.trim());
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes("library") && input.includes("seat")) {
      return "📚 **Library Information:**\n\nOur main library has **1,200 total seats** available:\n• Ground Floor: 400 seats (general study)\n• Second Floor: 500 seats (quiet study)\n• Third Floor: 300 seats (group study rooms)\n\n**Current Availability:** ~85% occupied\n**Peak Hours:** 10 AM - 4 PM\n**24/7 Access:** Available for registered students\n\nWould you like me to check real-time availability for specific floors?";
    }

    if (input.includes("dining") || input.includes("menu")) {
      return "🍽️ **Today's Dining Options:**\n\n**Main Cafeteria:**\n• Breakfast: 7 AM - 10 AM\n• Lunch: 11:30 AM - 2:30 PM\n• Dinner: 5 PM - 8 PM\n\n**Today's Specials:**\n• Grilled Chicken & Rice Bowl\n• Vegetarian Pasta Primavera\n• Asian Stir-fry Station\n• Fresh Salad Bar\n\n**Other Locations:**\n• Coffee Corner: 6 AM - 10 PM\n• Pizza Place: 11 AM - 11 PM\n• Healthy Bites: 8 AM - 6 PM\n\nAll locations accept meal plans and cash!";
    }

    if (input.includes("dr. sarah chen") || input.includes("sarah chen")) {
      return "👩‍🏫 **Dr. Sarah Chen - Computer Science:**\n\n**Contact Information:**\n• Email: s.chen@university.edu\n• Phone: +1 (555) 123-4567\n• Office: Tech Building, Room 301\n\n**Office Hours:**\n• Monday & Wednesday: 2 PM - 4 PM\n• Friday: 10 AM - 12 PM\n• Or by appointment\n\n**Specializations:**\n• Artificial Intelligence\n• Machine Learning\n• Data Science\n\n**Experience:** 15 years\n**Rating:** 4.8/5 stars\n\nWould you like me to help you schedule an appointment?";
    }

    if (input.includes("computer lab") || input.includes("lab")) {
      return "💻 **Computer Lab Information:**\n\n**Lab Hours:**\n• Monday-Friday: 7 AM - 10 PM\n• Saturday: 9 AM - 8 PM\n• Sunday: 10 AM - 6 PM\n\n**Available Labs:**\n• Computer Lab 1: 30 stations (Windows)\n• Computer Lab 2: 25 stations (Mac)\n• Programming Lab: 20 stations (Linux)\n\n**Current Status:** Computer Lab 2 - Available\n**Software:** Latest development tools installed\n**Printing:** Available at all locations\n\nNeed help finding a specific lab or checking availability?";
    }

    if (input.includes("register") || input.includes("course")) {
      return "📝 **Course Registration Process:**\n\n**Steps to Register:**\n1. Log into Student Portal\n2. Navigate to 'Course Registration'\n3. Search available courses\n4. Check prerequisites\n5. Add to cart and confirm\n\n**Important Dates:**\n• Early Registration: March 15-22\n• Regular Registration: April 1-15\n• Late Registration: April 16-30 (fees apply)\n\n**Need Help?**\n• Academic Advisor: advisors@university.edu\n• Registration Office: Room 150, Admin Building\n• Help Desk: +1 (555) 000-1234\n\n**Tip:** Popular courses fill quickly - register early!";
    }

    if (input.includes("physics building") || input.includes("building")) {
      return "🏢 **Campus Building Locations:**\n\n**Physics Building:**\n• Address: 123 Science Drive\n• Floors: 4 levels\n• Main Office: Ground Floor, Room 101\n\n**Nearby Buildings:**\n• Chemistry Building (2 min walk)\n• Mathematics Building (3 min walk)\n• Main Library (5 min walk)\n\n**Facilities:**\n• Research Labs: Floors 2-4\n• Lecture Halls: Ground Floor\n• Faculty Offices: Floor 3\n• Student Lounge: Floor 1\n\n**Parking:** Available in Lot C (5 min walk)\n\nNeed directions to any other campus buildings?";
    }

    // Default response
    return "🤖 I'd be happy to help you with that! As your CampusHub assistant, I can provide information about:\n\n• **Faculty & Staff** - Contact details, office hours, expertise\n• **Academics** - Course schedules, registration, requirements\n• **Facilities** - Building locations, lab hours, amenities\n• **Dining** - Menus, hours, locations\n• **Library** - Resources, seating, study spaces\n• **Administration** - Procedures, forms, contacts\n\nPlease feel free to ask me anything specific about campus life, and I'll provide detailed information to help you!";
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-hero rounded-full">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold">AI Campus Assistant</h1>
        </div>
        <p className="text-xl text-muted-foreground">
          Get instant answers about campus life, faculty, schedules, and more
        </p>
      </div>

      {/* Quick Suggestions */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Quick Questions:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {quickSuggestions.map((suggestion, index) => {
            const Icon = suggestion.icon;
            return (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="justify-start h-auto p-3 text-left"
                onClick={() => handleSendMessage(suggestion.text)}
              >
                <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-sm">{suggestion.text}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Chat Interface */}
      <Card className="shadow-strong">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-5 h-5 text-primary" />
            Campus Assistant
            <Badge variant="secondary" className="ml-auto">
              Online
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-96 p-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-3 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "ai" && (
                    <Avatar className="w-8 h-8 bg-primary">
                      <AvatarFallback>
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                    <div className={`text-xs mt-2 ${
                      message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="w-8 h-8 bg-accent">
                      <AvatarFallback>
                        <User className="w-4 h-4 text-accent-foreground" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="w-8 h-8 bg-primary">
                    <AvatarFallback>
                      <Bot className="w-4 h-4 text-primary-foreground" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                      <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
          
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                placeholder="Ask me anything about campus..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                className="flex-1"
              />
              <Button 
                onClick={() => handleSendMessage(inputMessage)}
                disabled={!inputMessage.trim() || isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};