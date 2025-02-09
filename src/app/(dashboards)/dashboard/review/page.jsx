import Reviews from "@/components/Reviews/Reviews";

export const metadata = {
    title: "Reviews | TeamCraft",
    description: "Reviews for TeamCraft",
}

const page = () => {
    return (
        <div>
            <Reviews></Reviews>        
        </div>
    );
};

export default page;