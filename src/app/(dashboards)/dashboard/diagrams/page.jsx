import React from 'react';
import Diagram from "@/components/Canvas/Diagram";

export const metadata = {
    title: "Diagram | TeamCraft",
    description: "Diagram for TeamCraft",
}

const Page = () => {
    return (
        <div>
            <Diagram/>
        </div>
    );
};

export default Page;