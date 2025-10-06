import HomeAbout from '@/components/features/home/about';
import HomeHero from '@/components/features/home/hero';
import MainLayout from '@/components/layouts/main';

export default function Welcome() {
    return (
        <MainLayout>
            <div className="flex flex-col">
                <HomeHero />
                <HomeAbout />
            </div>
        </MainLayout>
    );
}
