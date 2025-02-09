import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import React from 'react';

export const metadata = {
  title: "Dashboard | TeamCraft",
  description: "Dashboard for TeamCraft",
}

const layout = ({children}) => {
  return (
    <div>
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  );
};

export default layout;