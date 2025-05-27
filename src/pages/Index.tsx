
import { useState } from 'react';
import { GroomerSidebar } from '@/components/GroomerSidebar';
import { DashboardSummary } from '@/components/DashboardSummary';
import { BookingsSection } from '@/components/BookingsSection';
import { ProfileSection } from '@/components/ProfileSection';
import { ReviewsSection } from '@/components/ReviewsSection';
import { AvailabilitySection } from '@/components/AvailabilitySection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSummary />;
      case 'bookings':
        return <BookingsSection />;
      case 'profile':
        return <ProfileSection />;
      case 'reviews':
        return <ReviewsSection />;
      case 'availability':
        return <AvailabilitySection />;
      default:
        return <DashboardSummary />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <GroomerSidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default Index;
