
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Plus, X } from 'lucide-react';

export const AvailabilitySection = () => {
  const [selectedDate, setSelectedDate] = useState('2024-05-28');

  const weekDays = [
    { day: 'Monday', date: '2024-05-27', slots: ['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM'] },
    { day: 'Tuesday', date: '2024-05-28', slots: ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '4:30 PM'] },
    { day: 'Wednesday', date: '2024-05-29', slots: ['10:00 AM', '11:30 AM', '2:30 PM'] },
    { day: 'Thursday', date: '2024-05-30', slots: ['9:30 AM', '1:30 PM', '3:00 PM', '4:00 PM'] },
    { day: 'Friday', date: '2024-05-31', slots: ['9:00 AM', '10:00 AM', '2:00 PM', '3:30 PM'] },
    { day: 'Saturday', date: '2024-06-01', slots: ['10:00 AM', '12:00 PM', '2:00 PM'] },
    { day: 'Sunday', date: '2024-06-02', slots: [] }
  ];

  const services = [
    { name: 'Full Grooming', duration: '2 hours', enabled: true },
    { name: 'Bath & Brush', duration: '1.5 hours', enabled: true },
    { name: 'Nail Trim', duration: '30 minutes', enabled: true },
    { name: 'Ear Cleaning', duration: '20 minutes', enabled: false }
  ];

  const blockedDates = [
    { date: '2024-06-05', reason: 'Personal Day' },
    { date: '2024-06-12', reason: 'Equipment Maintenance' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-groomer-primary">Availability Management</h2>
        <p className="text-gray-600">Manage your time slots and service availability</p>
      </div>

      {/* Service Toggle */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Service Availability</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-groomer-light rounded-lg">
              <div>
                <h4 className="font-medium text-groomer-primary">{service.name}</h4>
                <p className="text-sm text-gray-600">Duration: {service.duration}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className={service.enabled ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
                  {service.enabled ? 'Active' : 'Disabled'}
                </Badge>
                <Button 
                  size="sm" 
                  variant="outline"
                  className={service.enabled ? 'text-red-600 hover:text-red-700' : 'text-green-600 hover:text-green-700'}
                >
                  {service.enabled ? 'Disable' : 'Enable'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Weekly Schedule */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-groomer-primary">Weekly Schedule</h3>
          <Button size="sm" className="bg-groomer-primary hover:bg-groomer-dark">
            <Plus size={16} className="mr-2" />
            Add Time Slot
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
          {weekDays.map((day) => (
            <div key={day.date} className={`border rounded-lg p-4 ${day.day === 'Sunday' ? 'bg-gray-50' : 'bg-white'}`}>
              <div className="text-center mb-3">
                <p className="font-medium text-groomer-primary">{day.day}</p>
                <p className="text-sm text-gray-600">{day.date.split('-').slice(1).join('/')}</p>
              </div>
              
              <div className="space-y-2">
                {day.slots.length > 0 ? (
                  day.slots.map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-groomer-light rounded text-sm">
                      <span className="text-groomer-primary font-medium">{slot}</span>
                      <button className="text-red-500 hover:text-red-700">
                        <X size={14} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500 text-sm py-4">
                    {day.day === 'Sunday' ? 'Closed' : 'No slots available'}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Blocked Dates */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-groomer-primary">Blocked Dates</h3>
          <Button size="sm" className="bg-groomer-primary hover:bg-groomer-dark">
            <Plus size={16} className="mr-2" />
            Block Date
          </Button>
        </div>

        <div className="space-y-3">
          {blockedDates.map((blocked, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-red-600" />
                <div>
                  <p className="font-medium text-red-800">{blocked.date}</p>
                  <p className="text-sm text-red-600">{blocked.reason}</p>
                </div>
              </div>
              <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                <X size={14} />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button className="bg-groomer-secondary text-groomer-primary hover:bg-groomer-secondary/80">
            <Clock size={16} className="mr-2" />
            Set Working Hours
          </Button>
          <Button className="bg-groomer-secondary text-groomer-primary hover:bg-groomer-secondary/80">
            <Calendar size={16} className="mr-2" />
            Bulk Block Dates
          </Button>
          <Button className="bg-groomer-secondary text-groomer-primary hover:bg-groomer-secondary/80">
            <Plus size={16} className="mr-2" />
            Copy Schedule
          </Button>
        </div>
      </Card>
    </div>
  );
};
