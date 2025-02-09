import React from 'react';
import AdminPackages from "@/components/Admin/AdminPackages/AdminPackages";

export const metadata = {
    title: "Admin Packages | TeamCraft",
    description: "Admin Packages for TeamCraft",
}

const Page = () => {
    return (
        <div>

            <AdminPackages/>

        </div>
    );
};

export default Page;