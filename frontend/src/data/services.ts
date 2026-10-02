import {
  BatteryChargingIcon,
  BoxesIcon,
  FactoryIcon,
  HouseIcon,
  RulerIcon,
  SunIcon,
  WrenchIcon,
  ZapIcon } from
'lucide-react';
import { images } from './images';
import type { Service } from '../types/content';

export const services: Service[] = [
{
  slug: 'solar-installation',
  title: 'Solar System Installation',
  description:
  'Professional installation of residential, commercial and institutional solar systems — mounted, wired, tested and commissioned before handover.',
  icon: SunIcon,
  image: images.installing,
  imageAlt: 'Technicians installing solar panels on a roof',
  benefits: [
  'Safe, careful mounting and wiring',
  'Testing and commissioning before handover',
  'Clean, tidy installation finish',
  'Walkthrough of how to use your system'],

  applications: ['Homes', 'Offices & shops', 'Schools & institutions', 'Commercial premises']
},
{
  slug: 'hybrid-solar-systems',
  title: 'Hybrid Solar Systems',
  description:
  'Systems that combine solar energy, battery storage and grid power, switching between them automatically so your power stays on.',
  icon: ZapIcon,
  image: images.homeRoof,
  imageAlt: 'Kenyan home with rooftop solar panels',
  benefits: [
  'Power during grid outages',
  'Use stored solar energy at night',
  'Automatic switching between sources',
  'Less reliance on grid electricity'],

  applications: ['Homes with frequent outages', 'Small businesses', 'Offices', 'Clinics & essential services']
},
{
  slug: 'lithium-battery-storage',
  title: 'Lithium Battery Storage',
  description:
  'Reliable lithium battery solutions for storing solar energy, so you can keep using clean power after sunset and during outages.',
  icon: BatteryChargingIcon,
  image: images.inverterBattery,
  imageAlt: 'Wall-mounted hybrid inverter and lithium battery unit',
  benefits: [
  'Store solar energy for evening use',
  'Low routine maintenance',
  'Backup power during outages',
  'Capacity options to suit your system'],

  applications: ['New hybrid systems', 'Upgrading existing solar', 'Homes & offices', 'Backup for critical loads']
},
{
  slug: 'design-consultation',
  title: 'Solar System Design & Consultation',
  description:
  'We assess your energy requirements, property and budget, then recommend a solar solution sized for how you actually use power.',
  icon: RulerIcon,
  image: images.consultation,
  imageAlt: 'Solar engineer reviewing a system design with a homeowner',
  benefits: [
  'Appliance and energy-use review',
  'System sized to your needs and budget',
  'Clear recommendation before you commit',
  'Site assessment for panel placement'],

  applications: ['First-time solar buyers', 'Property developers', 'Businesses planning growth', 'Institutions']
},
{
  slug: 'maintenance-support',
  title: 'Solar Maintenance & Support',
  description:
  'System inspection, maintenance, troubleshooting and technical support to keep your solar system performing as it should.',
  icon: WrenchIcon,
  image: images.panelCleaning,
  imageAlt: 'Technician inspecting and cleaning rooftop solar panels',
  benefits: [
  'Panel inspection and cleaning',
  'Inverter and battery health checks',
  'Troubleshooting and fault repair',
  'Technical advice when you need it'],

  applications: ['Existing solar systems', 'Homes', 'Commercial sites', 'Institutions']
},
{
  slug: 'commercial-industrial',
  title: 'Commercial & Industrial Solar',
  description:
  'Solar solutions designed for businesses and organisations that want to manage energy costs and protect operations from outages.',
  icon: FactoryIcon,
  image: images.commercialRoof,
  imageAlt: 'Commercial rooftop covered with rows of solar panels',
  benefits: [
  'Help reduce daytime energy costs',
  'Systems sized for operational loads',
  'Backup for critical equipment',
  'Professional project delivery'],

  applications: ['Offices', 'Warehouses', 'Retail & hospitality', 'Workshops & factories']
},
{
  slug: 'residential-solar',
  title: 'Residential Solar Solutions',
  description:
  'Reliable solar systems for homes and residential properties — from compact hybrid systems to larger setups for bigger households.',
  icon: HouseIcon,
  image: images.townhouse,
  imageAlt: 'Townhouse with a compact rooftop solar system',
  benefits: [
  'Power for everyday appliances',
  'Help lower monthly electricity bills',
  'Backup during outages',
  'Neat rooftop installation'],

  applications: ['Standalone homes', 'Townhouses & estates', 'Rental properties', 'Holiday homes']
},
{
  slug: 'equipment-components',
  title: 'Solar Equipment & Components',
  description:
  'Quality inverters, lithium batteries, solar panels and accessories — supplied with advice on what suits your system.',
  icon: BoxesIcon,
  image: images.equipment,
  imageAlt: 'Hybrid inverter, lithium battery and solar panels in a showroom',
  benefits: [
  'Components selected for performance',
  'Compatible parts for your system',
  'Expert advice on what to buy',
  'Supply with or without installation'],

  applications: ['System upgrades', 'Replacement parts', 'Contractors & installers', 'New installations']
}];