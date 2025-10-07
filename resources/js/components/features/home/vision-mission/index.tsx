import TargetIconSvg from '@/components/svg/ic-target';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';

const missionData = [
    {
        title: 'Pengelolaan Hutan Lestari',
        description:
            'Mengelola hutan secara berkelanjutan, tersertifikasi, dan partisipatif sesuai karakteristik wilayah Kabupaten Berau, demi hasil optimal bagi perusahaan dan masyarakat sekitar hutan.',
    },
    {
        title: 'Diversifikasi Usaha Non-Kayu',
        description: 'Mengembangkan jaringan dan usaha non-kayu berbasis potensi sumber daya dan kompetensi internal perusahaan.',
    },
    {
        title: 'Kemitraan & Kolaborasi Pemerintah',
        description:
            'Menjalin kemitraan dan menjadi fasilitator yang mendukung program pemerintah untuk menjaga keseimbangan antara fungsi produksi, lingkungan, dan sosial dari hutan.',
    },
    {
        title: 'Peningkatan Kualitas SDM',
        description: 'Meningkatkan kompetensi dan kualitas sumber daya manusia guna mencapai kesejahteraan dan kemandirian perusahaan.',
    },
];

const HomeVisionMission = () => {
    return (
        <div className="container mx-auto px-4 py-20 lg:py-24" id="vision-mission">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 text-primary-950">
                        <EyeIcon />
                        <h2 className="text-2xl font-semibold lg:text-4xl">Visi</h2>
                    </div>
                    <p className="text-sm text-tertiary-600 lg:text-base">
                        Menjadi Perusahaan yang Sehat, Berkembang, Profesional dan Mandiri Menuju Green Forestry Industry dengan Multi Usaha
                        Kehutanan.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 text-primary-950">
                        <TargetIconSvg />
                        <h2 className="text-2xl font-semibold lg:text-4xl">Misi</h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {missionData.map((item, index) => (
                            <div key={item.title + index} className={cn('flex gap-4 rounded-xl p-6', index === 2 && 'bg-primary-900')}>
                                <span className={cn('inline-block text-2xl text-primary-900 lg:text-4xl', index === 2 && 'text-white')}>
                                    0{index + 1}
                                </span>
                                <div className="flex flex-col gap-2">
                                    <h4 className={cn('text-base font-semibold text-primary-900 lg:text-xl', index === 2 && 'text-white')}>
                                        {item.title}
                                    </h4>
                                    <p className={cn('text-sm text-tertiary-600 lg:text-base', index === 2 && 'text-primary-50')}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVisionMission;
