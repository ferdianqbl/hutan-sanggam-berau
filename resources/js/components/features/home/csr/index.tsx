const csrData = [
    {
        img: '/images/csr/1.png',
        title: 'Meningkatkan Taraf Hidup Masyarakat',
        desc: 'Dukungan kepada masyarakat desa sekitar hutan melalui pelatihan, bantuan usaha, dan pengembangan kapasitas.',
    },
    {
        img: '/images/csr/2.png',
        title: 'Pelestarian Lingkungan',
        desc: 'Kegiatan penanaman kembali, perlindungan sumber daya alam, serta konservasi hutan.',
    },
    {
        img: '/images/csr/3.png',
        title: 'Pemberdayaan Aset & Sumber Daya Lokal',
        desc: 'Pemanfaatan aset perusahaan untuk kegiatan ekonomi produktif masyarakat.',
    },
    {
        img: '/images/csr/4.png',
        title: 'Minimalkan Risiko Sosial & Bangun Citra Positif',
        desc: 'CSR sebagai sarana membangun reputasi perusahaan dan stabilitas sosial di wilayah kerja.',
    },
];

const HomeCSR = () => {
    return (
        <div className="container mx-auto px-4 py-20 lg:py-24" id="csr">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="col-span-1">
                    <h2 className="text-2xl font-semibold text-primary-950 lg:text-4xl">Tanggung Jawab Sosial & Pemberdayaan Masyarakat</h2>
                </div>
                <p className="text-sm text-tertiary-600 lg:text-base">
                    PT Hutan Sanggam Berau berkomitmen untuk tidak hanya menjaga kelestarian hutan, tetapi juga berkontribusi secara aktif terhadap
                    peningkatan kesejahteraan masyarakat di sekitar wilayah operasional. Program CSR yang dijalankan merupakan bagian dari investasi
                    jangka panjang perusahaan dalam membangun hubungan harmonis dengan lingkungan sosial.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-10 pt-24 lg:grid-cols-2">
                {csrData.map((item, index) => (
                    <div className="flex h-full flex-col gap-6" key={index + item.title + item.desc}>
                        <div className="h-[300px] w-full lg:h-[500px]">
                            <img src={item.img} alt={item.title} className="h-full w-full object-cover object-center" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-lg font-semibold text-primary-900 lg:text-xl">{item.title}</h4>
                            <p className="text-sm text-tertiary-600 lg:text-base">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeCSR;
