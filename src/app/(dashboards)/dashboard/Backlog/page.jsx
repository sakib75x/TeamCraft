import Backlogs from '@/components/Backlogs/Backlogs';
import React from 'react';

export const metadata = {
  title: "Backlogs | TeamCraft",
  description: "Backlogs for TeamCraft",
}

const page = () => {
  return (
    <div>
      <Backlogs />
    </div>
  );
};

export default page;