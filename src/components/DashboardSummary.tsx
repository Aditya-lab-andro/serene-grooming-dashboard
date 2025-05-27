
import { Calendar, Clock, Star, Bell } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const DashboardSummary = () => {
  const stats = [
    {
      title: 'Total Bookings',
      value: '24',
      subtitle: 'This Month',
      icon: Calendar,
      trend: '+12%',
      color: 'bg-groomer-secondary text-groomer-primary'
    },
    {
      title: 'Total Earnings',
      value: '$3,240',
      subtitle: 'This Month',
      icon: Bell,
      trend: '+8%',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Upcoming Today',
      value: '5',
      subtitle: 'Appointments',
      icon: Clock,
      trend: '2 home visits',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      subtitle: 'From 89 reviews',
      icon: Star,
      trend: '+0.2',
      color: 'bg-yellow-100 text-yellow-700'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      petName: 'Buddy',
      ownerName: 'John Smith',
      service: 'Full Grooming',
      time: '10:00 AM',
      type: 'salon'
    },
    {
      id: 2,
      petName: 'Luna',
      ownerName: 'Emily Davis',
      service: 'Bath & Brush',
      time: '2:30 PM',
      type: 'home'
    },
    {
      id: 3,
      petName: 'Max',
      ownerName: 'Mike Johnson',
      service: 'Nail Trim',
      time: '4:00 PM',
      type: 'salon'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-groomer-primary mb-2">Dashboard Overview</h2>
        <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-groomer-primary mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>
              <div className="mt-3 text-xs text-green-600 font-medium">{stat.trend}</div>
            </Card>
          );
        })}
      </div>

      {/* Upcoming Appointments */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Today's Appointments</h3>
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 bg-groomer-light rounded-lg hover:bg-groomer-secondary/50 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-groomer-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{appointment.petName[0]}</span>
                </div>
                <div>
                  <p className="font-medium text-groomer-primary">{appointment.petName}</p>
                  <p className="text-sm text-gray-600">{appointment.ownerName}</p>
                  <p className="text-xs text-gray-500">{appointment.service}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-groomer-primary">{appointment.time}</p>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  appointment.type === 'home' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {appointment.type === 'home' ? 'Home Visit' : 'Salon'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
