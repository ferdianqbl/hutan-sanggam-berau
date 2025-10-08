const HomeAbout = () => {
    return (
        <div className="container mx-auto px-4 py-20 lg:py-24" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 space-y-8 lg:col-span-2">
                    <h2 className="text-2xl font-semibold text-primary-950 lg:text-4xl">Tentang Perusahaan</h2>
                    <p className="text-sm text-tertiary-600 lg:text-base">
                        PT Hutan Sanggam Berau adalah perusahaan yang bergerak di bidang pengelolaan hutan alam secara lestari dan profesional di
                        Kabupaten Berau, Kalimantan Timur. Berawal dari kerja sama antara Pemerintah Kabupaten Berau, PT Inhutani I, dan Perusda Sylva
                        Kaltim, perusahaan ini memiliki legalitas Izin Usaha Pemanfaatan Hasil Hutan Kayu (IUPHHK) dengan total luas areal
                        <span className="font-semibold text-primary-950">78.436 hektar.</span>
                    </p>
                </div>
            </div>

            <div className="hidden overflow-hidden pt-24 lg:relative lg:block">
                <div className="absolute left-1/2 h-full -translate-x-1/2 border border-[#F5F5F5]"></div>

                <div className="mb-8 flex w-full items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 order-1 flex h-4 w-4 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 w-5/12 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">4 Februari 2003</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">Perjanjian Kerja Sama Awal</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Dilakukan kesepakatan pengelolaan hutan antara Pemerintah Kabupaten Berau, PT Inhutani I, dan Perusda Sylva Kaltim.
                            Perjanjian ini menjadi dasar awal pembentukan perusahaan dan pengelolaan areal IUPHHK Hutan Alam seluas 78.436 Ha.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full flex-row-reverse items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 order-1 flex h-4 w-4 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 w-5/12 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">3 April 2003</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">Pendirian Resmi Perusahaan</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            PT Hutansanggam Labanan Lestari resmi didirikan melalui Akta Notaris No. 02 oleh Sony Thio, SH. Struktur kepemilikan saham
                            saat itu:
                        </p>
                        <ul className="mt-2 list-inside list-disc pl-2 text-xs text-tertiary-600 lg:text-sm">
                            <li>50% Pemkab Berau</li>
                            <li>30% PT Inhutani I</li>
                            <li>20% Perusda Sylva Kaltim Sejahtera</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 order-1 flex h-4 w-4 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 w-5/12 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">19 Oktober 2006</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">SK Izin Usaha Kehutanan</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Mendapatkan SK Menteri Kehutanan No. SK.484/Menhut-II/2006 untuk IUPHHK Hutan Alam atas nama PT Inhutani I Unit Labanan,
                            dan dialokasikan ke PT Hutansanggam Labanan Lestari.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full flex-row-reverse items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 order-1 flex h-4 w-4 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 w-5/12 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">29 Juni 2022</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">RUPS & Keputusan Perubahan Nama</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Rapat Umum Pemegang Saham menyepakati perubahan nama perusahaan untuk mencerminkan arah bisnis yang lebih luas dan
                            mandiri.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 order-1 flex h-4 w-4 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 w-5/12 rounded-lg bg-green-800 p-4 shadow-md">
                        <p className="text-xs font-semibold text-primary-100 lg:text-sm">28 Juli 2022</p>
                        <h3 className="text-xl font-semibold text-white lg:text-2xl">Resmi Menjadi PT Hutan Sanggam Berau</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-primary-50 lg:text-sm">
                            Disahkan oleh Kemenkumham melalui SK AHU-0052929.AH.01.02. Nama baru ini memperkuat identitas sebagai perusahaan kehutanan
                            yang berbasis dan berorientasi di Kabupaten Berau.
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative block overflow-hidden pt-24 lg:hidden">
                <div className="absolute left-[7px] h-full border border-[#F5F5F5]"></div>

                <div className="mb-8 flex w-full items-center justify-between gap-4">
                    <div className="z-10 order-1 flex h-4 w-4 shrink-0 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">4 Februari 2003</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">Perjanjian Kerja Sama Awal</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Dilakukan kesepakatan pengelolaan hutan antara Pemerintah Kabupaten Berau, PT Inhutani I, dan Perusda Sylva Kaltim.
                            Perjanjian ini menjadi dasar awal pembentukan perusahaan dan pengelolaan areal IUPHHK Hutan Alam seluas 78.436 Ha.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between gap-4">
                    <div className="z-10 order-1 flex h-4 w-4 shrink-0 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">3 April 2003</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">Pendirian Resmi Perusahaan</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            PT Hutansanggam Labanan Lestari resmi didirikan melalui Akta Notaris No. 02 oleh Sony Thio, SH. Struktur kepemilikan saham
                            saat itu:
                        </p>
                        <ul className="mt-2 list-inside list-disc pl-2 text-xs text-tertiary-600 lg:text-sm">
                            <li>50% Pemkab Berau</li>
                            <li>30% PT Inhutani I</li>
                            <li>20% Perusda Sylva Kaltim Sejahtera</li>
                        </ul>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between gap-4">
                    <div className="z-10 order-1 flex h-4 w-4 shrink-0 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">19 Oktober 2006</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">SK Izin Usaha Kehutanan</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Mendapatkan SK Menteri Kehutanan No. SK.484/Menhut-II/2006 untuk IUPHHK Hutan Alam atas nama PT Inhutani I Unit Labanan,
                            dan dialokasikan ke PT Hutansanggam Labanan Lestari.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between gap-4">
                    <div className="z-10 order-1 flex h-4 w-4 shrink-0 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 rounded-lg bg-[#FAFAFA] p-4">
                        <p className="text-xs font-semibold text-quaternary-500 lg:text-sm">29 Juni 2022</p>
                        <h3 className="text-xl font-semibold text-primary-900 lg:text-2xl">RUPS & Keputusan Perubahan Nama</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-tertiary-600 lg:text-sm">
                            Rapat Umum Pemegang Saham menyepakati perubahan nama perusahaan untuk mencerminkan arah bisnis yang lebih luas dan
                            mandiri.
                        </p>
                    </div>
                </div>

                <div className="mb-8 flex w-full items-center justify-between gap-4">
                    <div className="z-10 order-1 flex h-4 w-4 shrink-0 items-center rounded-full bg-primary-900"></div>
                    <div className="order-1 rounded-lg bg-green-800 p-4 shadow-md">
                        <p className="text-xs font-semibold text-primary-100 lg:text-sm">28 Juli 2022</p>
                        <h3 className="text-xl font-semibold text-white lg:text-2xl">Resmi Menjadi PT Hutan Sanggam Berau</h3>
                        <p className="mt-2 text-xs leading-snug tracking-wide text-primary-50 lg:text-sm">
                            Disahkan oleh Kemenkumham melalui SK AHU-0052929.AH.01.02. Nama baru ini memperkuat identitas sebagai perusahaan kehutanan
                            yang berbasis dan berorientasi di Kabupaten Berau.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
