const commissionersData = [
    {
        img: '/images/organization/1.png',
        name: 'Moch. Farid Januardi',
        position: 'Komisaris Utama',
    },
    {
        img: '/images/organization/1.png',
        name: 'Drs. H. Ibnu Sina Asyari',
        position: 'Komisaris',
    },
    {
        img: '/images/organization/1.png',
        name: 'Dr. Fitriadi, SE., M.Si',
        position: 'Komisaris',
    },
];

const directorsData = [
    {
        img: '/images/organization/1.png',
        name: 'Roby Maula, S.Hut.',
        position: 'Direktur Utama',
    },
    {
        img: '/images/organization/1.png',
        name: 'Ir. Gunawan Setiyani',
        position: 'Direktur Operasional',
    },
    {
        img: '/images/organization/1.png',
        name: 'Adi Dhatta Arief, SH.',
        position: 'Direktur Keuangan & Umum',
    },
];

const staffsData = [
    {
        img: '/images/organization/1.png',
        name: 'Giman',
        position: 'Manajer Perencanaan & Bina Hutan',
    },
    {
        img: '/images/organization/1.png',
        name: 'Rachmad Taufan',
        position: 'Manajer Produksi',
    },
    {
        img: '/images/organization/1.png',
        name: 'M. Anwar K',
        position: 'Manajer Perlindungan Hutan & Bina Sosial',
    },
    {
        img: '/images/organization/1.png',
        name: 'Salindri, SE.',
        position: 'Manajer Keuangan & Umum',
    },
    {
        img: '/images/organization/1.png',
        name: 'Darjat Hayani, SH.',
        position: 'Manajer HRD & Umum',
    },
    {
        img: '/images/organization/1.png',
        name: 'Safrullah',
        position: 'Kepala Bagian Keuangan & Umum',
    },
];

const HomeOrganization = () => {
    return (
        <div className="container mx-auto px-4 py-20 lg:py-24" id="organization-structure">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 space-y-8 lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-primary-950 lg:text-4xl">Struktur Organisasi</h2>
                    <p className="text-sm text-tertiary-600 lg:text-base">
                        Struktur organisasi perusahaan dirancang untuk memastikan kelancaran operasional, pengelolaan sumber daya hutan yang
                        berkelanjutan, serta penguatan tata kelola perusahaan yang akuntabel dan profesional.
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-16 pt-24">
                <div className="flex w-full items-center justify-center">
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                    <span className="mx-4 text-center text-xl font-medium tracking-wider text-quaternary-500 uppercase md:flex-shrink-0 lg:text-2xl">
                        Dewan Komisaris
                    </span>
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {commissionersData.map((item, index) => (
                        <div key={item.name + index} className="flex flex-col gap-6">
                            <div className="aspect-square w-full">
                                <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-lg font-semibold text-[#181D27] lg:text-xl">{item.name}</h4>
                                <p className="text-sm text-primary-900 lg:text-base">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full items-center justify-center">
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                    <span className="mx-4 text-center text-xl font-medium tracking-wider text-quaternary-500 uppercase md:flex-shrink-0 lg:text-2xl">
                        Direksi
                    </span>
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {directorsData.map((item, index) => (
                        <div key={item.name + index} className="flex flex-col gap-6">
                            <div className="aspect-square w-full">
                                <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-lg font-semibold text-[#181D27] lg:text-xl">{item.name}</h4>
                                <p className="text-sm text-primary-900 lg:text-base">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex w-full items-center justify-center">
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                    <span className="mx-4 text-center text-xl font-medium tracking-wider text-quaternary-500 uppercase md:flex-shrink-0 lg:text-2xl">
                        MANAJERIAL & UNIT PENDUKUNG
                    </span>
                    <div className="hidden h-px flex-grow bg-[#E9EAEB] md:block" />
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-4">
                    {staffsData.map((item, index) => (
                        <div key={item.name + index} className="flex flex-col gap-6">
                            <div className="aspect-square w-full">
                                <img src={item.img} alt={item.name} className="h-full w-full object-cover object-center" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-lg font-semibold text-[#181D27] lg:text-xl">{item.name}</h4>
                                <p className="text-sm text-primary-900 lg:text-base">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeOrganization;
