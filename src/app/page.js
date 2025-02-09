import AboutStatistics from "@/components/home/AboutStatistics";
import AwesomeHome from "@/components/home/AwesomeHome";
import CarouselHome from "@/components/home/CarouselHome";
import LeaderCTA from "@/components/home/LeaderCTA";
import Sponser from "@/components/home/Sponser";
import HomeLoadingSpinner from "@/components/shared/HomeLoadingSpinner/HomeLoadingSpinner";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import RoadMap from "@/components/home/RoadMap";
import FAQ from "@/components/home/FAQ";

const Home = () => {
  return (
    <div>
      <ClerkLoading>
        <HomeLoadingSpinner></HomeLoadingSpinner>
      </ClerkLoading>
      <ClerkLoaded>
        <div className="">
          <AwesomeHome />
          <Sponser />
          <CarouselHome />
          <AboutStatistics></AboutStatistics>
          <RoadMap />

          <FAQ isBG={true} />
        </div>
      </ClerkLoaded>
    </div>
  );
};

export default Home;
