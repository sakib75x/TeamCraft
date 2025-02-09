import React from 'react';
import AdminInbox from "@/components/Admin/AdminInbox/AdminInbox";

export const metadata = {
    title: "Admin Inbox | TeamCraft",
    description: "Admin Inbox for TeamCraft",
}

const Page = () => {
    return (
        <div>
            <AdminInbox/>  
        </div>
    );
};

export default Page;