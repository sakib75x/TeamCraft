import React from "react";
import ProjectDetails from "./[id]/page";

export const metadata = {
  title: "Project | TeamCraft",
  description: "Project details for TeamCraft",
}

const page = () => {
  return (
    <div>
      <ProjectDetails />
    </div>
  );
};

export default page;
