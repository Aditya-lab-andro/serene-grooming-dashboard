
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Star, User, Bell, Plus, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const GroomerSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar, path: '/dashboard' },
    { id: 'bookings', label: 'Bookings', icon: Clock, path: '/bookings' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' },
    { id: 'reviews', label: 'Reviews', icon: Star, path: '/reviews' },
    { id: 'availability', label: 'Availability', icon: Plus, path: '/availability' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className={cn(
      "bg-groomer-primary text-white transition-all duration-300 flex flex-col h-screen",
      isCollapsed ? "w-16" : "w-64"
    )}>
      {/* Header */}
      <div className="p-4 border-b border-groomer-dark/20">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h1 className="text-xl font-bold">PawCare Pro</h1>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-groomer-dark/20 rounded-lg transition-colors"
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={cn(
                "w-full flex items-center space-x-3 p-3 rounded-lg transition-all duration-200",
                isActive(item.path)
                  ? "bg-groomer-secondary text-groomer-primary"
                  : "hover:bg-groomer-dark/20 text-white"
              )}
            >
              <Icon size={20} />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-groomer-dark/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-groomer-secondary rounded-full flex items-center justify-center">
            <User size={16} className="text-groomer-primary" />
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-sm font-medium">Sarah's Grooming</p>
              <p className="text-xs text-gray-300">Professional Groomer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
