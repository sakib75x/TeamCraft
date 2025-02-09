import AllTeams from '@/components/Teams/AllTeams';
import UserTeam from '@/components/Teams/UserTeam';
import React from 'react';
import { IoSearch } from 'react-icons/io5';

export const metadata = {
  title: 'Teams | TeamCraft',
  description: 'Teams for TeamCraft',
}

const Page = async () => {
  return <UserTeam />;
};

export default Page;
