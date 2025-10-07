import HomeAbout from '@/components/features/home/about';
import HomeHero from '@/components/features/home/hero';
import HomeSummary from '@/components/features/home/summary';
import HomeVisionMission from '@/components/features/home/vision-mission';
import MainLayout from '@/components/layouts/main';

export default function Welcome() {
    return (
        <MainLayout>
            <div className="flex flex-col">
                <HomeHero />
                <HomeAbout />
                <HomeSummary />
                <HomeVisionMission />
            </div>
        </MainLayout>
    );
}
