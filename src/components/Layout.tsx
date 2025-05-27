
import { Outlet } from 'react-router-dom';
import { GroomerSidebar } from '@/components/GroomerSidebar';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <GroomerSidebar />
      
      <main className="flex-1 overflow-auto">
        <div className="p-6 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
