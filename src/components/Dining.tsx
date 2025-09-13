import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  UtensilsCrossed, 
  Clock, 
  MapPin, 
  DollarSign, 
  Star,
  Coffee,
  Pizza,
  Leaf,
  Users,
  Phone
} from "lucide-react";

export const Dining = () => {
  const [selectedDay, setSelectedDay] = useState("today");

  const diningHalls = [
    {
      name: "Main Cafeteria",
      description: "Full-service dining with international cuisine",
      location: "Student Union Building, Floor 1",
      hours: "7 AM - 9 PM",
      capacity: "400 seats",
      priceRange: "$8 - $15",
      rating: 4.2,
      phone: "+1 (555) 200-0001",
      amenities: ["All-You-Can-Eat", "International Food", "Salad Bar", "Grill Station"],
      currentWait: "5-10 min",
      busyLevel: 70
    },
    {
      name: "Coffee Corner",
      description: "Premium coffee, pastries, and light meals",
      location: "Library Building, Ground Floor",
      hours: "6 AM - 10 PM",
      capacity: "50 seats",
      priceRange: "$3 - $8",
      rating: 4.6,
      phone: "+1 (555) 200-0002",
      amenities: ["Specialty Coffee", "Fresh Pastries", "Wi-Fi", "Study-Friendly"],
      currentWait: "2-5 min",
      busyLevel: 45
    },
    {
      name: "Pizza Place",
      description: "Fresh pizzas, pasta, and Italian favorites",
      location: "Recreation Center, Food Court",
      hours: "11 AM - 11 PM",
      capacity: "80 seats",
      priceRange: "$6 - $12",
      rating: 4.4,
      phone: "+1 (555) 200-0003",
      amenities: ["Wood-Fired Pizza", "Fresh Pasta", "Delivery Available", "Late Night"],
      currentWait: "10-15 min",
      busyLevel: 85
    },
    {
      name: "Healthy Bites",
      description: "Organic, fresh, and health-conscious options",
      location: "Science Building, Floor 2",
      hours: "8 AM - 6 PM",
      capacity: "60 seats",
      priceRange: "$7 - $13",
      rating: 4.5,
      phone: "+1 (555) 200-0004",
      amenities: ["Organic Ingredients", "Vegan Options", "Smoothies", "Meal Prep"],
      currentWait: "3-7 min",
      busyLevel: 30
    }
  ];

  const todaysMenu = {
    "Main Cafeteria": {
      breakfast: [
        { item: "Scrambled Eggs & Bacon", price: "$4.50" },
        { item: "Pancakes with Syrup", price: "$3.75" },
        { item: "Fresh Fruit Bowl", price: "$3.25" },
        { item: "Oatmeal with Toppings", price: "$2.75" }
      ],
      lunch: [
        { item: "Grilled Chicken Bowl", price: "$8.50" },
        { item: "Vegetarian Pasta", price: "$7.25" },
        { item: "Asian Stir-Fry", price: "$8.00" },
        { item: "Caesar Salad", price: "$6.50" }
      ],
      dinner: [
        { item: "BBQ Ribs with Sides", price: "$12.75" },
        { item: "Salmon with Rice", price: "$11.50" },
        { item: "Veggie Burger", price: "$8.25" },
        { item: "Soup & Sandwich Combo", price: "$7.75" }
      ]
    },
    "Coffee Corner": [
      { item: "Espresso", price: "$2.25" },
      { item: "Cappuccino", price: "$3.75" },
      { item: "Iced Latte", price: "$4.25" },
      { item: "Croissant", price: "$2.50" },
      { item: "Bagel with Cream Cheese", price: "$3.00" },
      { item: "Muffin", price: "$2.75" }
    ],
    "Pizza Place": [
      { item: "Margherita Pizza (Personal)", price: "$8.50" },
      { item: "Pepperoni Pizza (Personal)", price: "$9.25" },
      { item: "Veggie Supreme Pizza", price: "$10.00" },
      { item: "Spaghetti Carbonara", price: "$9.75" },
      { item: "Caesar Salad", price: "$6.50" },
      { item: "Garlic Bread", price: "$3.25" }
    ],
    "Healthy Bites": [
      { item: "Quinoa Power Bowl", price: "$9.50" },
      { item: "Green Smoothie", price: "$5.25" },
      { item: "Avocado Toast", price: "$6.75" },
      { item: "Kale & Chickpea Salad", price: "$8.25" },
      { item: "Protein Smoothie Bowl", price: "$7.50" },
      { item: "Raw Energy Balls", price: "$3.75" }
    ]
  };

  const specialEvents = [
    {
      title: "International Food Week",
      date: "March 15-21",
      description: "Experience cuisines from around the world",
      location: "Main Cafeteria"
    },
    {
      title: "Late Night Pizza Special",
      date: "Every Friday",
      description: "Buy 2 get 1 free after 9 PM",
      location: "Pizza Place"
    },
    {
      title: "Healthy Monday",
      date: "Every Monday",
      description: "20% off all organic and vegan options",
      location: "Healthy Bites"
    }
  ];

  const getBusyLevelColor = (level: number) => {
    if (level >= 80) return "text-destructive";
    if (level >= 60) return "text-orange-500";
    return "text-accent";
  };

  const getBusyLevelText = (level: number) => {
    if (level >= 80) return "Very Busy";
    if (level >= 60) return "Busy";
    if (level >= 30) return "Moderate";
    return "Quiet";
  };

  return (
    <div className="container mx-auto px-6 py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Dining Services</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Discover delicious dining options across campus
        </p>
      </div>

      {/* Dining Locations */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Dining Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diningHalls.map((hall, index) => (
            <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{hall.name}</CardTitle>
                    <CardDescription className="mt-1">{hall.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{hall.rating}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.phone}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UtensilsCrossed className="w-4 h-4 text-muted-foreground" />
                      <span>{hall.currentWait}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Current Status</span>
                    <span className={`text-sm font-medium ${getBusyLevelColor(hall.busyLevel)}`}>
                      {getBusyLevelText(hall.busyLevel)}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        hall.busyLevel >= 80 ? 'bg-destructive' : 
                        hall.busyLevel >= 60 ? 'bg-orange-500' : 'bg-accent'
                      }`}
                      style={{ width: `${hall.busyLevel}%` }}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {hall.amenities.map((amenity, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  View Menu & Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Today's Menus */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Today's Menus</h2>
        <Tabs value={selectedDay} onValueChange={setSelectedDay}>
          <TabsList className="mb-6">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
            <TabsTrigger value="week">Weekly Specials</TabsTrigger>
          </TabsList>

          <TabsContent value="today" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(todaysMenu).map(([restaurant, menu]) => (
                <Card key={restaurant} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {restaurant === "Coffee Corner" && <Coffee className="w-5 h-5" />}
                      {restaurant === "Pizza Place" && <Pizza className="w-5 h-5" />}
                      {restaurant === "Healthy Bites" && <Leaf className="w-5 h-5" />}
                      {restaurant === "Main Cafeteria" && <UtensilsCrossed className="w-5 h-5" />}
                      {restaurant}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {Array.isArray(menu) ? (
                      <div className="space-y-2">
                        {menu.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-sm">{item.item}</span>
                            <Badge variant="outline">{item.price}</Badge>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Tabs defaultValue="breakfast" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-4">
                          <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                          <TabsTrigger value="lunch">Lunch</TabsTrigger>
                          <TabsTrigger value="dinner">Dinner</TabsTrigger>
                        </TabsList>
                        {Object.entries(menu).map(([mealType, items]) => (
                          <TabsContent key={mealType} value={mealType} className="space-y-2">
                            {items.map((item, idx) => (
                              <div key={idx} className="flex justify-between items-center">
                                <span className="text-sm">{item.item}</span>
                                <Badge variant="outline">{item.price}</Badge>
                              </div>
                            ))}
                          </TabsContent>
                        ))}
                      </Tabs>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tomorrow">
            <div className="text-center py-12">
              <UtensilsCrossed className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-xl text-muted-foreground">Tomorrow's menu will be available this evening.</p>
            </div>
          </TabsContent>

          <TabsContent value="week">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialEvents.map((event, index) => (
                <Card key={index} className="shadow-soft">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-3">{event.description}</p>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Meal Plans */}
      <div className="bg-gradient-subtle rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Meal Plan Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="shadow-soft">
            <CardContent className="pt-4 text-center">
              <h3 className="font-semibold text-lg">Basic Plan</h3>
              <p className="text-2xl font-bold text-primary">$299/month</p>
              <p className="text-sm text-muted-foreground">10 meals per week</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="pt-4 text-center">
              <h3 className="font-semibold text-lg">Standard Plan</h3>
              <p className="text-2xl font-bold text-primary">$449/month</p>
              <p className="text-sm text-muted-foreground">15 meals per week</p>
            </CardContent>
          </Card>
          <Card className="shadow-soft">
            <CardContent className="pt-4 text-center">
              <h3 className="font-semibold text-lg">Unlimited Plan</h3>
              <p className="text-2xl font-bold text-primary">$599/month</p>
              <p className="text-sm text-muted-foreground">Unlimited access</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};