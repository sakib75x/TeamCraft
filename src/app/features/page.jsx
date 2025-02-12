import React from 'react';
import Header from '@/components/DashboardsPage/Header';
import DashboardCard from '@/components/DashboardsPage/DashboardCard';
import card1 from '@/image/dashboards/card1.png';
import card2 from '@/image/dashboards/card2.png';
import card3 from '@/image/dashboards/card3.png';
import Button from '@/components/shared/Buttons';
import { ArrowRight } from 'lucide-react';
import Sponser from '@/components/home/Sponser';
import Review from '@/components/DashboardsPage/Review';
import { description } from '@/components/Admin/AdminDashboard/PaymentGraph';

export const metadata = {
  title: 'Features | TeamCraft',
  description: 'Get all of your data control in one place. Gain real-time insights, View data your way, Prioritize work smarter',
}

const Page = () => {
  return (
    <div className="mt-[120px]">
      <section>
        <Header />
        <div className="container text-white flex-row-reverse mx-auto ">
          <h2 className="text-2xl text-black dark:text-white max-w-[300px] md:max-w-[700px] mx-auto md:text-4xl  text-center mt-20">
            Get all of your data control in one place
          </h2>
          <DashboardCard
            subtitle={'High-level overview'}
            title={'Gain real-time insights'}
            row={'flex-row'}
            description={
              'Easily analyze your data and simplify strategic decision-making with custom dashboards. Run reports, create summaries, track progress, and get a high-level overview of your entire organization.'
            }
            image={card1}
          />
          <DashboardCard
            row={'flex-row-reverse'}
            subtitle={'Dashboard customization'}
            title={'View data your way'}
            description={
              'Build the reporting tools you need for your business with customizable no-code dashboards. Add widgets such as charts and timeline to help further visualize your data and stay up-to-date on progress and results.'
            }
            image={card2}
          />
          <DashboardCard
            subtitle={'Resource management'}
            row={'flex-row'}
            title={'Prioritize work smarter'}
            description={
              'Adapt to changes and prioritize workloads strategically to boost team productivity and facilitate more efficient workflows. Quickly identify what needs your attention and catch potential risks before they happen.'
            }
            image={card3}
          />
        </div>
        {/* Make decision section */}
        <div className=" bg-white/50 dark:bg-white/5 backdrop-blur-lg text-white border-white/15 border-[1px] p-20 flex flex-col justify-center">
          <div className="text-center space-y-5 container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-black dark:text-white">Make decisions with confidence</h1>
            <p className="text-lg text-black dark:text-white">Ready to see how TeamCraft.net improves alignment across teams?</p>
            <div className="flex justify-center">
              <Button text="get started" icon={<ArrowRight size={20} />} />
            </div>
          </div>
        </div>
        <Sponser />
        <Review></Review>
      </section>
    </div>
  );
};

export default Page;
