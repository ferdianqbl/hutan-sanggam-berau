import { Head } from '@inertiajs/react';
import React from 'react';
import Footer from './footer';
import Navbar from './navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head
            // title="Welcome"
            >
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900" rel="stylesheet" />
            </Head>

            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
