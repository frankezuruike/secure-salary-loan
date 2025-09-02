import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  FileText,
  Search,
  Filter
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const OfficerDashboard = () => {
  const portfolioData = {
    totalLoans: 1250,
    activeLoans: 980,
    totalValue: 875000000,
    defaultRate: 2.3,
    collectionsThisMonth: 145000000
  };

  const riskAlerts = [
    {
      id: 1,
      customer: "Adebayo Johnson",
      issue: "Salary payment delayed by 7 days",
      riskLevel: "medium",
      loanAmount: 450000,
      nextPayment: "2024-01-20"
    },
    {
      id: 2,
      customer: "Funmi Adewale",
      issue: "Failed payment attempt (insufficient funds)",
      riskLevel: "high",
      loanAmount: 320000,
      nextPayment: "2024-01-18"
    },
    {
      id: 3,
      customer: "Kemi Okafor",
      issue: "Employment status verification pending",
      riskLevel: "low",
      loanAmount: 275000,
      nextPayment: "2024-01-25"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      applicant: "Ibrahim Musa",
      amount: 500000,
      status: "pending_verification",
      submitted: "2024-01-10",
      creditScore: 720
    },
    {
      id: 2,
      applicant: "Grace Eze",
      amount: 350000,
      status: "approved",
      submitted: "2024-01-09",
      creditScore: 785
    },
    {
      id: 3,
      applicant: "Tunde Akinola",
      amount: 600000,
      status: "under_review",
      submitted: "2024-01-08",
      creditScore: 690
    }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'success';
      case 'pending_verification': return 'warning';
      case 'under_review': return 'secondary';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Portfolio Overview</h1>
            <p className="text-muted-foreground">Monitor and manage your loan portfolio</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
            <Button variant="default">
              <Users className="h-4 w-4 mr-2" />
              Add New Customer
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-5 gap-6">
          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Loans</p>
                  <p className="text-2xl font-bold">{portfolioData.totalLoans}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Loans</p>
                  <p className="text-2xl font-bold text-success">{portfolioData.activeLoans}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Portfolio Value</p>
                  <p className="text-2xl font-bold">₦{(portfolioData.totalValue / 1000000).toFixed(0)}M</p>
                </div>
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Default Rate</p>
                  <p className="text-2xl font-bold text-success">{portfolioData.defaultRate}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Collections MTD</p>
                  <p className="text-2xl font-bold">₦{(portfolioData.collectionsThisMonth / 1000000).toFixed(0)}M</p>
                </div>
                <Clock className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Risk Alerts */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-warning" />
                  Risk Alerts
                  <Badge variant="destructive" className="ml-auto">
                    {riskAlerts.filter(alert => alert.riskLevel === 'high').length} High Risk
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {riskAlerts.map((alert) => (
                    <div key={alert.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-medium">{alert.customer}</p>
                          <Badge variant={getRiskColor(alert.riskLevel)}>
                            {alert.riskLevel.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{alert.issue}</p>
                        <p className="text-sm">
                          Loan: ₦{alert.loanAmount.toLocaleString()} | Due: {alert.nextPayment}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Applications */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Recent Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <p className="font-medium">{app.applicant}</p>
                          <Badge variant={getStatusColor(app.status)}>
                            {app.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Amount: ₦{app.amount.toLocaleString()} | Credit Score: {app.creditScore} | Submitted: {app.submitted}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Process
                      </Button>
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
                  <Search className="h-4 w-4 mr-2" />
                  Search Customer
                </Button>
                <Button className="w-full" variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter Portfolio
                </Button>
                <Button className="w-full" variant="secondary">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Risk Analysis
                </Button>
                <Button className="w-full" variant="ghost">
                  <FileText className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle>This Month's Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-muted-foreground">Collection Rate</p>
                    <p className="text-sm font-medium">94.5%</p>
                  </div>
                  <Progress value={94.5} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-muted-foreground">New Loans Disbursed</p>
                    <p className="text-sm font-medium">127</p>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-muted-foreground">Risk Score Improvement</p>
                    <p className="text-sm font-medium">12%</p>
                  </div>
                  <Progress value={12} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  System Health
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-sm">BVN API</p>
                    <p className="text-sm text-muted-foreground">Operational</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-sm">Bank Integration</p>
                    <p className="text-sm text-muted-foreground">Connected</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div>
                    <p className="font-medium text-sm">Payment Gateway</p>
                    <p className="text-sm text-muted-foreground">Active</p>
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