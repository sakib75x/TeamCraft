import TextDoc from "@/components/Doc/TextDoc";
import UserDocuments from "@/components/Doc/UserDocuments";

export const metadata = {
    title: "Documents | TeamCraft",
    description: "Documents for TeamCraft",
}

const Doc = () => {
    return (
        <div className="mt-20">
            <UserDocuments />
        </div>
    );
};

export default Doc;