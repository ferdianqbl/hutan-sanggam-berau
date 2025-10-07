import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/button';
import NavbarDrawer from './navbar-drawer';

const navItems = [
    {
        label: 'Tentang kami',
        href: '/#about',
    },
    {
        label: 'Visi & misi',
        href: '/#vision-mission',
    },
    {
        label: 'CSR',
        href: '/#csr',
    },
    {
        label: 'Struktur organisasi',
        href: '/#organization-structure',
    },
    {
        label: 'Kontak',
        href: '/#contact',
    },
];

const Navbar = () => {
    // State to track if the page is scrolled
    const [isScrolled, setIsScrolled] = useState(false);

    // Effect to add and remove the scroll event listener
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={cn('fixed top-0 right-0 left-0 w-full transition-all duration-500', isScrolled && 'bg-white')}>
            <div className="container mx-auto flex items-center justify-between gap-4 p-4">
                <Link href={'/'}>
                    <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
                </Link>
                <div className="hidden flex-1 items-center justify-center gap-4 lg:flex">
                    {navItems.map((item) => (
                        <a href={item.href} className="text-sm font-semibold text-primary-950 lg:text-base" key={item.label}>
                            {item.label}
                        </a>
                    ))}
                </div>
                <Link
                    href={'#'}
                    className={cn(
                        buttonVariants({
                            variant: 'default',
                        }),
                        'ml-auto hidden lg:inline-flex',
                    )}
                >
                    Hubungi Kami
                </Link>
                <NavbarDrawer navItems={navItems} />
            </div>
        </nav>
    );
};

export default Navbar;
