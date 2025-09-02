import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Smartphone, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-banking.jpg";
import customersImage from "@/assets/customers-using-app.jpg";

interface HeroSectionProps {
  onGetStarted: () => void;
}

export const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Smart Loan Management for{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Nigerian MFBs
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Revolutionize your microfinance operations with automated salary deductions, 
                  advanced risk assessment, and proactive loan monitoring.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  onClick={onGetStarted}
                  className="text-lg px-8 py-6"
                >
                  Get Started Today
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-sm font-medium">BVN & NIN Verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-sm font-medium">Automated Deductions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-sm font-medium">Risk Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <span className="text-sm font-medium">Real-time Analytics</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional banking interface" 
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border">
                <div className="flex items-center space-x-4">
                  <div className="bg-success/10 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Bad Loan Reduction</p>
                    <p className="text-2xl font-bold text-success">85%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose BeraCode AI MFB?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform reduces bad loans by 85% through smart automation and proactive risk management
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Advanced Verification</h3>
              <p className="text-muted-foreground">
                BVN, NIN, and employment verification ensure you're lending to verified salary earners
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Automated Repayments</h3>
              <p className="text-muted-foreground">
                Direct salary deductions and smart reminders ensure timely payments every month
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-medium transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/30">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4">Proactive Monitoring</h3>
              <p className="text-muted-foreground">
                Real-time risk alerts and portfolio analytics help prevent defaults before they happen
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={customersImage} 
                alt="Nigerian professionals using the app" 
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Trusted by Nigerian Professionals
              </h2>
              <p className="text-xl text-muted-foreground">
                "BeraCode AI MFB transformed our lending process. We've seen an 85% reduction in bad loans 
                and our customers love the seamless experience."
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AO</span>
                </div>
                <div>
                  <p className="font-bold">Frank Ezuruike</p>
                  <p className="text-muted-foreground">CEO, Abuja MFB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};