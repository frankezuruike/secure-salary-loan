import { Button } from "@/components/ui/button";
import { Shield, Users, PieChart, LogOut, Menu } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  userType: 'customer' | 'officer' | null;
  onUserTypeChange: (type: 'customer' | 'officer' | null) => void;
}

export const Navigation = ({ userType, onUserTypeChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-card border-b shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BeraCode AI MFB
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {userType === 'customer' && (
              <>
                <Button variant="ghost" size="sm">Dashboard</Button>
                <Button variant="ghost" size="sm">My Loans</Button>
                <Button variant="ghost" size="sm">Apply</Button>
                <Button variant="ghost" size="sm">Profile</Button>
              </>
            )}
            
            {userType === 'officer' && (
              <>
                <Button variant="ghost" size="sm">
                  <PieChart className="h-4 w-4 mr-2" />
                  Portfolio
                </Button>
                <Button variant="ghost" size="sm">
                  <Users className="h-4 w-4 mr-2" />
                  Customers
                </Button>
                <Button variant="ghost" size="sm">Risk Analysis</Button>
                <Button variant="ghost" size="sm">Reports</Button>
              </>
            )}
            
            {userType ? (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onUserTypeChange(null)}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            ) : (
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => onUserTypeChange('customer')}
                >
                  Customer Login
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => onUserTypeChange('officer')}
                >
                  Staff Login
                </Button>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {userType === 'customer' && (
                <>
                  <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
                  <Button variant="ghost" className="w-full justify-start">My Loans</Button>
                  <Button variant="ghost" className="w-full justify-start">Apply</Button>
                  <Button variant="ghost" className="w-full justify-start">Profile</Button>
                </>
              )}
              
              {userType === 'officer' && (
                <>
                  <Button variant="ghost" className="w-full justify-start">Portfolio</Button>
                  <Button variant="ghost" className="w-full justify-start">Customers</Button>
                  <Button variant="ghost" className="w-full justify-start">Risk Analysis</Button>
                  <Button variant="ghost" className="w-full justify-start">Reports</Button>
                </>
              )}
              
              {!userType && (
                <>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => onUserTypeChange('customer')}
                  >
                    Customer Login
                  </Button>
                  <Button 
                    variant="default" 
                    className="w-full justify-start"
                    onClick={() => onUserTypeChange('officer')}
                  >
                    Staff Login
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};