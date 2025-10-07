import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

const NavbarDrawer = ({ navItems }: { navItems: { label: string; href: string }[] }) => {
    return (
        <Drawer direction="right">
            <DrawerTrigger asChild className="flex lg:hidden">
                <Button size={'icon'}>
                    <Menu />
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>
                        <a className="flex items-center gap-2" href={'/'}>
                            <img src="/images/logo.svg" alt="Logo" className="h-8 w-8" />
                            <span className="text-base font-bold text-primary-950">PT Hutan Sanggam Berau</span>
                        </a>
                    </DrawerTitle>
                </DrawerHeader>

                <div className="mt-4 flex h-full flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <a key={item.href} href={item.href} className="px-4 py-2 text-sm font-medium text-primary-950 hover:bg-primary-100">
                                {item.label}
                            </a>
                        ))}
                    </div>
                    <a
                        href={'#'}
                        className="m-4 inline-block w-auto rounded-md bg-primary-900 px-4 py-2 text-center text-sm font-medium text-primary-foreground hover:bg-primary-900/90"
                    >
                        Hubungi Kami
                    </a>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default NavbarDrawer;
