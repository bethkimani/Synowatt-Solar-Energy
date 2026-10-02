import type { HeroSlide, Stat } from '../types/content';

export const heroSlides: HeroSlide[] = [
{
  image: "/dd1e6f6b-6fe6-4b45-96c3-1577d7392df4.jpg",
  alt: 'Modern Kenyan home with solar panels installed on a tiled roof',
  caption: 'Residential rooftop solar'
},
{
  image: "/c3f0b8b9-4f8a-415a-85b8-fb6608e2d3b5.jpg",
  alt: 'Commercial rooftop covered with rows of solar panels in Nairobi',
  caption: 'Commercial & industrial solar'
},
{
  image: "/427546e3-6001-4c93-a864-842b93902feb.jpg",
  alt: 'School building in Kenya with solar panels on its roof',
  caption: 'Institutional solar power'
}];


export const stats: Stat[] = [
{ value: 5, suffix: 'KVA+', label: 'Hybrid solar systems' },
{ value: 5.12, decimals: 2, suffix: 'kWh', label: 'Lithium battery solutions' },
{ text: 'Professional', label: 'Installation & commissioning' },
{ text: 'Homes & Businesses', label: 'Residential, commercial & institutional' }];