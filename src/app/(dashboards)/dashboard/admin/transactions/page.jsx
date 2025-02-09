import React from 'react';
import Transactions from "@/components/Admin/AdminDashboard/Transactions";

export const metadata = {
    title: "Transactions | TeamCraft",
    description: "Transactions for TeamCraft",
}

const Page = () => {
    return (
        <div>

            <Transactions/>

        </div>
    );
};

export default Page;