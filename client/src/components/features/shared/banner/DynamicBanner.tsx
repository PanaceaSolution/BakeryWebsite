'use client'

import { usePathname } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import { fetchBanner, dummyBanners, BannerData } from '@/lib/api/banner'
import HeroSection from '../../herosection/HeroSection'

export default function DynamicBanner() {
    const pathname = usePathname()
    const segments = pathname.split('/')

    const categorySlug = segments[2] || 'home'

    const fallbackBanner: BannerData =
        dummyBanners[categorySlug] || dummyBanners['home']

    const { data } = useQuery<BannerData>({
        queryKey: ['banner', categorySlug],
        queryFn: () => fetchBanner(categorySlug),
        initialData: fallbackBanner,
    })

    return <HeroSection data={data!} />
}
