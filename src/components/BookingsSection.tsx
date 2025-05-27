
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Bell } from 'lucide-react';

export const BookingsSection = () => {
  const [filter, setFilter] = useState('all');

  const bookings = [
    {
      id: 1,
      petName: 'Buddy',
      ownerName: 'John Smith',
      phone: '(555) 123-4567',
      email: 'john@email.com',
      service: 'Full Grooming Package',
      type: 'salon',
      date: '2024-05-28',
      time: '10:00 AM',
      status: 'confirmed',
      payment: 'paid',
      price: '$85'
    },
    {
      id: 2,
      petName: 'Luna',
      ownerName: 'Emily Davis',
      phone: '(555) 987-6543',
      email: 'emily@email.com',
      service: 'Bath & Brush',
      type: 'home',
      address: '123 Oak Street, Apt 2B',
      date: '2024-05-28',
      time: '2:30 PM',
      status: 'pending',
      payment: 'pending',
      price: '$65'
    },
    {
      id: 3,
      petName: 'Max',
      ownerName: 'Mike Johnson',
      phone: '(555) 456-7890',
      email: 'mike@email.com',
      service: 'Nail Trim + Ear Cleaning',
      type: 'salon',
      date: '2024-05-29',
      time: '11:30 AM',
      status: 'confirmed',
      payment: 'paid',
      price: '$45'
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'completed': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getPaymentColor = (payment: string) => {
    switch (payment) {
      case 'paid': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-yellow-100 text-yellow-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-groomer-primary">Booking Management</h2>
          <p className="text-gray-600">Manage all your current and upcoming appointments</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {['all', 'pending', 'confirmed', 'completed'].map((status) => (
            <Button
              key={status}
              variant={filter === status ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(status)}
              className={filter === status ? "bg-groomer-primary hover:bg-groomer-dark" : ""}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <Card key={booking.id} className="p-6 hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pet & Owner Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-groomer-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{booking.petName[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-groomer-primary">{booking.petName}</h3>
                    <p className="text-sm text-gray-600">{booking.ownerName}</p>
                  </div>
                </div>
                
                <div className="space-y-1 text-sm text-gray-600">
                  <p className="flex items-center space-x-2">
                    <span>📞</span>
                    <span>{booking.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✉️</span>
                    <span>{booking.email}</span>
                  </p>
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-groomer-primary">{booking.service}</h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant={booking.type === 'home' ? 'secondary' : 'default'} className={
                      booking.type === 'home' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-groomer-secondary text-groomer-primary'
                    }>
                      {booking.type === 'home' ? 'Home Visit' : 'Salon'}
                    </Badge>
                    <span className="text-sm font-medium text-groomer-primary">{booking.price}</span>
                  </div>
                </div>

                {booking.address && (
                  <p className="text-sm text-gray-600">
                    📍 {booking.address}
                  </p>
                )}

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{booking.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{booking.time}</span>
                  </span>
                </div>
              </div>

              {/* Status & Actions */}
              <div className="space-y-3">
                <div className="space-y-2">
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </Badge>
                  <Badge className={getPaymentColor(booking.payment)}>
                    Payment: {booking.payment}
                  </Badge>
                </div>

                <div className="flex flex-col space-y-2">
                  {booking.status === 'pending' && (
                    <Button size="sm" className="bg-groomer-primary hover:bg-groomer-dark">
                      Confirm Booking
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
