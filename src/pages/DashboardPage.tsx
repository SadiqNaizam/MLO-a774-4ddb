import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, LayoutDashboard, Settings, Bell } from 'lucide-react'; // Added more icons

const DashboardPage = () => {
  const navigate = useNavigate();
  console.log('DashboardPage loaded');

  const handleLogout = () => {
    console.log('User logging out...');
    // In a real app, you would clear authentication tokens/state here
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center text-2xl font-bold text-primary">
                <LayoutDashboard className="mr-2 h-6 w-6" />
                <span>MyDashboard</span>
              </Link>
              <NavigationMenu className="ml-10 hidden md:block">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/dashboard">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/dashboard/profile"> {/* Example link */}
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Profile
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link to="/dashboard/settings"> {/* Example link */}
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        <Settings className="mr-1 h-4 w-4" /> Settings
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              <Avatar>
                <AvatarImage src="https://i.pravatar.cc/40?u=dashboardUser" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10">
        <Card className="w-full max-w-3xl mx-auto shadow-xl">
          <CardHeader className="bg-gray-50 rounded-t-lg">
            <CardTitle className="text-2xl md:text-3xl">
              Welcome, Valued User!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div>
              <Label htmlFor="dashboard-message" className="text-lg font-semibold text-gray-800">
                Your Personal Dashboard
              </Label>
              <p id="dashboard-message" className="mt-1 text-gray-600">
                This is your central hub for managing your account, viewing insights, and accessing all application features.
                We are thrilled to have you on board!
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {[
                { title: "Active Projects", value: "5", icon: <LayoutDashboard size={20} className="text-blue-500"/> },
                { title: "Pending Tasks", value: "12", icon: <Bell size={20} className="text-red-500"/> },
                { title: "Profile Completion", value: "85%", icon: <Settings size={20} className="text-green-500"/> }
              ].map(item => (
                <Card key={item.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                    {item.icon}
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Recent Activity</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li className="p-2 border-l-4 border-blue-500 bg-blue-50">Logged in successfully.</li>
                    <li className="p-2 border-l-4 border-green-500 bg-green-50">Updated profile picture.</li>
                    <li className="p-2 border-l-4 border-yellow-500 bg-yellow-50">New notification: Project Alpha deadline approaching.</li>
                </ul>
            </div>

          </CardContent>
          <CardFooter className="bg-gray-50 rounded-b-lg p-4 text-right">
            <p className="text-xs text-gray-500">Last login: {new Date().toLocaleString()}</p>
          </CardFooter>
        </Card>
      </main>
       <footer className="py-4 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} MyApp Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardPage;