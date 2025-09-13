import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Home } from "@/components/Home";
import { Faculty } from "@/components/Faculty";
import { Schedule } from "@/components/Schedule";
import { Facilities } from "@/components/Facilities";
import { Dining } from "@/components/Dining";
import { Library } from "@/components/Library";
import { Admin } from "@/components/Admin";
import { AIChat } from "@/components/AIChat";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home onSectionChange={setActiveSection} />;
      case "faculty":
        return <Faculty />;
      case "schedule":
        return <Schedule />;
      case "facilities":
        return <Facilities />;
      case "dining":
        return <Dining />;
      case "library":
        return <Library />;
      case "admin":
        return <Admin />;
      case "chat":
        return <AIChat />;
      default:
        return <Home onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-20 md:pt-24">
        {renderSection()}
      </main>
    </div>
  );
};

export default Index;
