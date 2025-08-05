export interface BannerData {
  image: string
  heading: string
  subtext: string
  primaryBtn: {
    text: string
    link?: string
  }
  secondaryBtn: {
    text: string
    link: string
  }
}

// Dummy data for development and testing
const dummyBanners: Record<string, BannerData> = {
  home: {
    image: '/assets/HeroSection/one.png',
    heading: 'Bake Your Dreams Into Reality',
    subtext: 'Find the perfect treat for every celebration — made with love, baked to perfection.',
    primaryBtn: { text: 'Customize your Cake', link: '/customize' },
    secondaryBtn: { text: 'Order Now', link: '/shop' },
  },
  'birthday-cake': {
    image: '/assets/HeroSection/two.png',
    heading: 'Make Their Day Memorable',
    subtext: 'Free candles and message card on all birthday cakes',
    primaryBtn: { text: 'Shop Birthday Cakes', link: '/birthday-cakes' },
    secondaryBtn: { text: 'Explore More', link: '/shop' },
  },
  'model-cake': {
    image: '/assets/HeroSection/three.png',
    heading: 'Model Cakes: Fashionably Delicious',
    subtext: 'Exclusive limited-edition designer cakes.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/modal-cakes' },
    secondaryBtn: { text: 'Explore More', link: '/shop' },
  },
}

/**
 * Fetch banner data for a given category slug.
 * Currently returns dummy data for frontend dev.
 * 
 * Later, uncomment axios code to fetch from real backend.
 */
export const fetchBanner = async (slug?: string): Promise<BannerData> => {
  // Return dummy data synchronously for now
  const key = slug && dummyBanners[slug] ? slug : 'home'
  return Promise.resolve(dummyBanners[key])

  /*
  // Uncomment below when yogendra's backend API is ready
  import axios from 'axios'
  const url = slug ? `/api/banner?category=${slug}` : `/api/banner`
  const response = await axios.get<BannerData>(url)
  return response.data
  */
}
