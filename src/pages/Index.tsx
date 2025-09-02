import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CustomerDashboard } from "@/components/CustomerDashboard";
import { OfficerDashboard } from "@/components/OfficerDashboard";

const Index = () => {
  const [userType, setUserType] = useState<'customer' | 'officer' | null>(null);

  const handleGetStarted = () => {
    // For demo purposes, show customer login
    setUserType('customer');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation userType={userType} onUserTypeChange={setUserType} />
      
      {userType === 'customer' && <CustomerDashboard />}
      {userType === 'officer' && <OfficerDashboard />}
      {!userType && <HeroSection onGetStarted={handleGetStarted} />}
    </div>
  );
};

export default Index;