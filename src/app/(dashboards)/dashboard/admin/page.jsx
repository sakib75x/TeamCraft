import React from 'react';
import AdminDashboard from "@/components/Admin/AdminDashboard/AdminDashboard";

export const metadata = {
    title: "Admin Dashboard | TeamCraft",
    description: "Admin Dashboard for TeamCraft",
}

const Page = () => {
    return (
        <div>
            <AdminDashboard></AdminDashboard>
        </div>
    );
};

export default Page;