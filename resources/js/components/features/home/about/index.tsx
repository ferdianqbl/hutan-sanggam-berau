const HomeAbout = () => {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-1 space-y-8 lg:col-span-2">
                    <h2 className="text-xl font-semibold text-primary-950 lg:text-2xl">Tentang Perusahaan</h2>
                    <p className="text-sm text-tertiary-600 lg:text-base">
                        PT Hutan Sanggam Berau adalah perusahaan yang bergerak di bidang pengelolaan hutan alam secara lestari dan profesional di
                        Kabupaten Berau, Kalimantan Timur. Berawal dari kerja sama antara Pemerintah Kabupaten Berau, PT Inhutani I, dan Perusda Sylva
                        Kaltim, perusahaan ini memiliki legalitas Izin Usaha Pemanfaatan Hasil Hutan Kayu (IUPHHK) dengan total luas areal{' '}
                        <span className="font-semibold text-primary-950">78.436 hektar.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
