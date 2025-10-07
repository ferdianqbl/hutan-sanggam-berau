import HomeAbout from '@/components/features/home/about';
import HomeCSR from '@/components/features/home/csr';
import HomeHero from '@/components/features/home/hero';
import HomeOrganization from '@/components/features/home/organization';
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
                <HomeCSR />
                <HomeOrganization />
            </div>
        </MainLayout>
    );
}
