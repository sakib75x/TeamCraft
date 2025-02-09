import React from 'react';
import Reviews from "@/components/Reviews/Reviews";
import AdminReview from "@/components/Admin/AdminReview/Review";

export const metadata = {
    title: "Admin Review | TeamCraft",
    description: "Admin Review for TeamCraft",
}

const Page = () => {
    return (
        <div>
            <AdminReview/>
        </div>
    );
};

export default Page;