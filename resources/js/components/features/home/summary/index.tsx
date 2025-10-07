const summaryData = [
    {
        title: 'Hutan Produksi',
        value: '20.892,39',
        unit: 'Ha',
    },
    {
        title: 'Hutan Produksi Terbatas',
        value: '17.059,09',
        unit: 'Ha',
    },
    {
        title: 'Hutan Konversi',
        value: '13,98',
        unit: 'Ha',
    },
];

const HomeSummary = () => {
    return (
        <div className="container mx-auto px-4 py-20 lg:py-24">
            <div className="grid grid-cols-1 gap-8 rounded-xl bg-primary-900 p-8 lg:grid-cols-3">
                {summaryData.map((item, index) => (
                    <div key={item.title + index} className="item-center flex flex-col justify-center gap-2 text-white">
                        <h3 className="flex-1 text-center text-3xl font-semibold lg:text-5xl">
                            {item.value}
                            <span className="text-sm lg:text-lg">{item.unit}</span>
                        </h3>
                        <p className="flex-1 text-center text-base font-semibold lg:text-xl">{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeSummary;
