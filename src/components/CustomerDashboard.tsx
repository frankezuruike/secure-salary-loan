import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle,
  Clock,
  DollarSign,
  FileText
} from "lucide-react";

export const CustomerDashboard = () => {
  const loanData = {
    currentLoan: {
      amount: 500000,
      balance: 320000,
      nextPayment: {
        amount: 45000,
        date: "2024-01-15"
      },
      progress: 36
    },
    creditScore: 750,
    paymentHistory: [
      { date: "2023-12-15", amount: 45000, status: "paid" },
      { date: "2023-11-15", amount: 45000, status: "paid" },
      { date: "2023-10-15", amount: 45000, status: "paid" },
      { date: "2023-09-15", amount: 45000, status: "paid" },
    ]
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
          <p className="text-white/90">Your next payment of ₦45,000 is due on January 15th</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Balance</p>
                  <p className="text-2xl font-bold">₦320,000</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Credit Score</p>
                  <p className="text-2xl font-bold text-success">{loanData.creditScore}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Next Payment</p>
                  <p className="text-2xl font-bold">₦45,000</p>
                </div>
                <Calendar className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Loan Progress</p>
                  <p className="text-2xl font-bold">{loanData.currentLoan.progress}%</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Current Loan Details */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Current Loan Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Original Amount</p>
                    <p className="text-xl font-bold">₦500,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Remaining Balance</p>
                    <p className="text-xl font-bold">₦320,000</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-muted-foreground">Repayment Progress</p>
                    <p className="text-sm font-medium">{loanData.currentLoan.progress}% Complete</p>
                  </div>
                  <Progress value={loanData.currentLoan.progress} className="h-3" />
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Next Payment Due</p>
                      <p className="font-bold">January 15, 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Amount</p>
                      <p className="font-bold">₦45,000</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment History */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {loanData.paymentHistory.map((payment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-success" />
                        <div>
                          <p className="font-medium">₦{payment.amount.toLocaleString()}</p>
                          <p className="text-sm text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        Paid
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="default">
                  Make Payment
                </Button>
                <Button className="w-full" variant="outline">
                  View Loan Agreement
                </Button>
                <Button className="w-full" variant="secondary">
                  Apply for New Loan
                </Button>
                <Button className="w-full" variant="ghost">
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            {/* Account Status */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">BVN Verified</p>
                    <p className="text-sm text-muted-foreground">Verified on Dec 1, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Employment Verified</p>
                    <p className="text-sm text-muted-foreground">Techpoint Africa Ltd.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium">Bank Account Linked</p>
                    <p className="text-sm text-muted-foreground">GTBank ****1234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notification */}
            <Card className="border-0 shadow-soft border-l-4 border-l-warning">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Payment Reminder</p>
                    <p className="text-sm text-muted-foreground">
                      Your next payment of ₦45,000 is due in 3 days. Ensure sufficient balance in your linked account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};