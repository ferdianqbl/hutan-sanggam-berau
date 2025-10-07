import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowDownIcon } from 'lucide-react';

const HomeHero = () => {
    return (
        <div className="bg-[url('/images/banner-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 pt-12">
                <div className="space-y-6">
                    <h1 className="text-center text-3xl font-medium text-primary-950 lg:text-5xl">Mengelola Hutan Secara Lestari dan Profesional</h1>
                    <p className="text-center text-lg text-primary-950 lg:text-xl">
                        PT Hutan Sanggam Berau adalah perusahaan kehutanan yang berkomitmen menjaga kelestarian hutan dan mendorong pemberdayaan
                        masyarakat di Kabupaten Berau, Kalimantan Timur.
                    </p>
                </div>

                <a
                    href="#about"
                    className={cn(
                        buttonVariants({
                            variant: 'default',
                        }),
                    )}
                >
                    Pelajari Selengkapnya <ArrowDownIcon />
                </a>
            </div>
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-12">
                {/* <div className="aspect-video max-h-[500px] w-full rounded-lg bg-black" /> */}
                <video controls className="aspect-video max-h-[500px] w-full rounded-lg bg-black">
                    {/* The path starts from the public folder */}
                    <source src="/videos/banner-video.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
        </div>
    );
};

export default HomeHero;
