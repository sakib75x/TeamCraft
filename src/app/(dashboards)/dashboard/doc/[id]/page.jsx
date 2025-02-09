import DocumentPage from '@/components/Doc/DocumentPage';

export const metadata = {
    title: "Document | TeamCraft",
    description: "Document for TeamCraft",
}

const page = ({params}) => {
    return (
        <div>
            <DocumentPage params={params}></DocumentPage>
        </div>
    );
};

export default page;