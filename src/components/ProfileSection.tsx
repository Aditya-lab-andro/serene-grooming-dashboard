
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, X, Edit } from 'lucide-react';

export const ProfileSection = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [services, setServices] = useState([
    { id: 1, name: 'Full Grooming Package', price: 85, category: 'Complete Care' },
    { id: 2, name: 'Bath & Brush', price: 65, category: 'Basic Care' },
    { id: 3, name: 'Nail Trim', price: 25, category: 'Add-ons' },
    { id: 4, name: 'Ear Cleaning', price: 20, category: 'Add-ons' }
  ]);

  const [tags] = useState(['Dog Specialist', 'Cat Friendly', 'Mobile Service', 'Senior Pets', 'Anxious Pets']);

  const profileData = {
    storeName: "Sarah's Professional Pet Grooming",
    location: "Downtown Pet District, 123 Main St",
    experience: "8 years",
    workingHours: "Mon-Sat: 9:00 AM - 6:00 PM",
    phone: "(555) 123-4567",
    email: "sarah@pawcarepro.com",
    bio: "Passionate pet groomer with 8 years of experience. Specializing in breed-specific cuts and working with anxious pets. Your furry friends are in loving, professional hands."
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-groomer-primary">Profile Management</h2>
          <p className="text-gray-600">Manage your business information and services</p>
        </div>
        <Button 
          onClick={() => setIsEditing(!isEditing)}
          className="bg-groomer-primary hover:bg-groomer-dark"
        >
          <Edit size={16} className="mr-2" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </Button>
      </div>

      {/* Store Images */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Store Images</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square bg-groomer-light rounded-lg flex items-center justify-center border-2 border-dashed border-groomer-primary/30 hover:border-groomer-primary transition-colors cursor-pointer">
              <div className="text-center">
                <Plus size={24} className="text-groomer-primary mx-auto mb-2" />
                <p className="text-sm text-groomer-primary">Add Image</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Basic Information */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="storeName">Store Name</Label>
              <Input 
                id="storeName" 
                defaultValue={profileData.storeName}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                defaultValue={profileData.location}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
            <div>
              <Label htmlFor="experience">Years of Experience</Label>
              <Input 
                id="experience" 
                defaultValue={profileData.experience}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <Label htmlFor="workingHours">Working Hours</Label>
              <Input 
                id="workingHours" 
                defaultValue={profileData.workingHours}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input 
                id="phone" 
                defaultValue={profileData.phone}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                defaultValue={profileData.email}
                disabled={!isEditing}
                className={!isEditing ? "bg-gray-50" : ""}
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Bio/Description */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">About / Bio</h3>
        <textarea 
          className="w-full p-3 border rounded-lg resize-none h-32 disabled:bg-gray-50"
          defaultValue={profileData.bio}
          disabled={!isEditing}
          placeholder="Tell customers about your experience and specialties..."
        />
      </Card>

      {/* Tags */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-groomer-primary mb-4">Specialties & Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} className="bg-groomer-secondary text-groomer-primary">
              {tag}
              {isEditing && <X size={14} className="ml-1 cursor-pointer" />}
            </Badge>
          ))}
          {isEditing && (
            <Badge className="bg-gray-100 text-gray-600 cursor-pointer hover:bg-gray-200">
              <Plus size={14} className="mr-1" />
              Add Tag
            </Badge>
          )}
        </div>
      </Card>

      {/* Services Menu */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-groomer-primary">Services Menu</h3>
          {isEditing && (
            <Button size="sm" className="bg-groomer-primary hover:bg-groomer-dark">
              <Plus size={16} className="mr-2" />
              Add Service
            </Button>
          )}
        </div>
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-4 bg-groomer-light rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="font-medium text-groomer-primary">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.category}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-groomer-primary">${service.price}</span>
                {isEditing && (
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <X size={14} />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
