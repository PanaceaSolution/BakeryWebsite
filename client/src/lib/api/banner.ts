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
export const dummyBanners: Record<string, BannerData> = {
  home: {
    image: '/assets/HeroSection/one.png',
    heading: 'Bake Your Dreams Into Reality',
    subtext: 'Find the perfect treat for every celebration — made with love, baked to perfection.',
    primaryBtn: { text: 'Customize your Cake', link: '#customize' },
    secondaryBtn: { text: 'Order Now', link: '/' },
  },
  'birthday-cake': {
    image: '/assets/HeroSection/two.png',
    heading: 'Make Their Day Memorable',
    subtext: 'Free candles and message card on all birthday cakes',
    primaryBtn: { text: 'Shop Birthday Cakes', link: '/category/birthday-cakes' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'model-cake': {
    image: '/assets/HeroSection/three.png',
    heading: 'Model Cakes: Fashionably Delicious',
    subtext: 'Exclusive limited-edition designer cakes.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/model-cakes' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'wedding-cake': {
    image: '/assets/HeroSection/five.png',
    heading: 'Because Every Love Story Deserves a Beautiful Cake',
    subtext: 'From minimal chic to royal grandeur — we craft your cake, your way.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/wedding-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'baby-shower-cake': {
    image: '/assets/HeroSection/four.png',
    heading: 'A Slice of Joy for Your Little One ',
    subtext: '“From pastel dreams to tiny toes, our baby shower cakes are as precious as the moment itself.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/baby-shower-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'mini-cake': {
    image: '/assets/HeroSection/eleven.jpg',
    heading: 'One Slice of Happiness',
    subtext: 'Single-serve cakes that are cute, classy, and just enough to satisfy.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/mini-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'pastries-cake': {
    image: '/assets/HeroSection/seven.png',
    heading: 'Pastry Perfection in Every Bite',
    subtext: 'Sweet, soft, and sensational — just the way pastries should be.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/pastries-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'bakery-items-cake': {
    image: '/assets/HeroSection/eight.png',
    heading: 'Your Daily Dose of Delicious',
    subtext: 'Craving a quick bite or a cozy treat? Our bakery items have something for everyone.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/bakery-items-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'crossants-cake': {
    image: '/assets/HeroSection/nine.png',
    heading: 'Your Daily Dose of Delicious',
    subtext: 'Craving a quick bite or a cozy treat? Our bakery items have something for everyone.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/crossants-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  },
  'decorative-items-cake': {
    image: '/assets/HeroSection/ten.png',
    heading: 'Celebrate Every Chapter of Life',
    subtext: 'Turn life’s sweetest occasions into picture-perfect memories with our beautiful, handcrafted decorative pieces.',
    primaryBtn: { text: 'Order Limited Edition Now', link: '/category/decorative-items-cake' },
    secondaryBtn: { text: 'Explore More', link: '/' },
  }
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
