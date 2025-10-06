import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
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
    return (
        <nav className="border-b border-primary-100 bg-white">
            <div className="container mx-auto flex items-center justify-between gap-4 p-4">
                <Link href={'/'}>
                    <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
                </Link>
                <div className="hidden flex-1 justify-center gap-4 lg:flex">
                    {navItems.map((item) => (
                        <Link href={item.href} className="text-sm font-semibold text-primary-950 lg:text-base">
                            {item.label}
                        </Link>
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
