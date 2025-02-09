import React from 'react';
import ProjectPage from "@/components/Projects/ProjectPage";

export const metadata = {
    title: "Projects | TeamCraft",
    description: "Projects for TeamCraft",
}

const Page = () => {
    return (
        <div>
            <ProjectPage></ProjectPage>
        </div>
    );
};

export default Page;