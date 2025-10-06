import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { ArrowDownIcon } from 'lucide-react';

const HomeHero = () => {
    return (
        <div className="bg-[url('/images/banner-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-12">
                <div className="space-y-6">
                    <h1 className="text-center text-3xl font-medium text-primary-950 lg:text-5xl">Mengelola Hutan Secara Lestari dan Profesional</h1>
                    <p className="text-center text-lg text-primary-950 lg:text-xl">
                        PT Hutan Sanggam Berau adalah perusahaan kehutanan yang berkomitmen menjaga kelestarian hutan dan mendorong pemberdayaan
                        masyarakat di Kabupaten Berau, Kalimantan Timur.
                    </p>
                </div>

                <Link
                    href="/"
                    className={cn(
                        buttonVariants({
                            variant: 'default',
                        }),
                    )}
                >
                    Pelajari Selengkapnya <ArrowDownIcon />
                </Link>
            </div>
            <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 py-12">
                <div className="aspect-video w-full rounded-lg bg-black" />
            </div>
        </div>
    );
};

export default HomeHero;
