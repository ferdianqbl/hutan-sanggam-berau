import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';

const footerContentData = [
    {
        icon: <MailIcon />,
        title: 'Email',
        subtitle: 'Tim kami siap membantu Anda.',
        content: 'hutan.sanggam@gmail.com',
    },
    {
        icon: <MapPinIcon />,
        title: 'Office',
        subtitle: 'Datang dan temui tim kami di kantor pusat.',
        content: 'Jl. Singkuang / Gunung Panjang RT.01, Kabupaten Berau, Kalimantan Timur',
    },
    {
        icon: <PhoneIcon />,
        title: 'Phone',
        subtitle: 'Senin sampai Jumat, jam 08.00 – 17.00 WITA.',
        content: '+62 812 3456 7890',
    },
];

const footerSocialData = [
    {
        icon: '/images/icons/ic-linkedin.svg',
        href: '#',
    },
    {
        icon: '/images/icons/ic-instagram.svg',
        href: '#',
    },
    {
        icon: '/images/icons/ic-fb.svg',
        href: '#',
    },
    {
        icon: '/images/icons/ic-yt.svg',
        href: '#',
    },
];

const Footer = () => {
    return (
        <footer className="bg-primary-950 text-white">
            <div className="container mx-auto flex flex-col gap-16 px-4 py-8">
                <div className="space-y-4">
                    <h1 className="text-base font-semibold lg:text-2xl">Hubungi Kami</h1>
                    <p className="text-sm text-primary-50">Kami terbuka untuk kerja sama, pertanyaan, maupun kunjungan langsung.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    {footerContentData.map((content, index) => (
                        <div className="flex flex-col gap-5" key={content.title + index}>
                            <div
                                className={cn(
                                    buttonVariants({
                                        variant: 'default',
                                        size: 'icon',
                                    }),
                                )}
                            >
                                {content.icon}
                            </div>
                            <div className="space-y-1">
                                <p className="text-base font-semibold">{content.title}</p>
                                <p className="text-sm text-primary-50">{content.subtitle}</p>
                            </div>
                            <p className="text-base font-semibold">{content.content}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-t border-primary-900">
                <div className="container mx-auto grid grid-cols-1 items-center justify-between gap-8 px-4 py-8 lg:grid-cols-3">
                    <div className="mx-auto flex items-center gap-4 lg:mx-0">
                        {footerSocialData.map((item, index) => (
                            <Link href={item.href} key={item.icon}>
                                <img src={item.icon} alt={`footer-social-${index}`} className="w-h-6 h-6" />
                            </Link>
                        ))}
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                        <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
                    </div>
                    <p className="text-center text-sm text-primary-50 lg:text-end">Copyright © PT Hutan Sanggam Berau, 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
