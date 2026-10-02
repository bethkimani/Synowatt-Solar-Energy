import {
  Building2Icon,
  ClipboardCheckIcon,
  HardHatIcon,
  HeadsetIcon,
  HouseIcon,
  LeafIcon,
  RulerIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SunIcon,
  WrenchIcon } from
'lucide-react';
import { images } from './images';
import type { FlowStage, ProcessStep, Testimonial, WhyPillar } from '../types/content';

export const whyPillars: WhyPillar[] = [
{
  theme: 'Built properly from day one',
  summary: 'Careful installation and quality components give your system the foundation to perform for years.',
  image: images.installing,
  imageAlt: 'Technicians installing rooftop solar panels',
  reasons: [
  {
    title: 'Professional Installation',
    description: 'Installed by trained technicians following proper safety and wiring practices.',
    icon: HardHatIcon
  },
  {
    title: 'Quality Solar Components',
    description: 'Inverters, lithium batteries and panels selected for performance and durability.',
    icon: ShieldCheckIcon
  }]

},
{
  theme: 'Designed around you',
  summary: 'No guesswork — every recommendation starts with how your property actually uses energy.',
  image: images.consultation,
  imageAlt: 'Solar engineer reviewing a design with a client',
  reasons: [
  {
    title: 'Tailored Solar Solutions',
    description: 'Every system is sized around your actual energy use, property and budget.',
    icon: SlidersHorizontalIcon
  },
  {
    title: 'System Design & Consultation',
    description: 'We assess your requirements and explain our recommendation clearly before you commit.',
    icon: RulerIcon
  }]

},
{
  theme: 'With you after installation',
  summary: 'Solar is a long-term investment, so our support continues long after handover.',
  image: images.panelCleaning,
  imageAlt: 'Technician inspecting and cleaning solar panels',
  reasons: [
  {
    title: 'Reliable Technical Support',
    description: 'Inspection, troubleshooting and help whenever your system needs attention.',
    icon: HeadsetIcon
  },
  {
    title: 'Long-Term Maintenance Support',
    description: 'Scheduled checks and maintenance help keep your system performing as it should.',
    icon: WrenchIcon
  }]

},
{
  theme: 'Efficient power for every property',
  summary: 'From family homes to offices and institutions, we design systems that make the most of Kenyan sunshine.',
  image: images.aerial,
  imageAlt: 'Aerial view of homes with rooftop solar panels in Nairobi',
  reasons: [
  {
    title: 'Energy-Efficient Solutions',
    description: 'Designed to make the most of available sunshine and help reduce your power bills.',
    icon: LeafIcon
  },
  {
    title: 'Residential & Commercial Expertise',
    description: 'Solutions for homes, offices, businesses and institutions.',
    icon: Building2Icon
  }]

}];


export const assessmentFlow: FlowStage[] = [
{
  title: 'Your Energy Needs',
  icon: HouseIcon,
  items: ['Appliances you want to power', 'When you use the most energy', 'Backup expectations', 'Your budget']
},
{
  title: 'Our Assessment',
  icon: ClipboardCheckIcon,
  items: ['Load and consumption review', 'Site and roof evaluation', 'Inverter & battery sizing', 'Clear recommendation']
},
{
  title: 'Your Solar Solution',
  icon: SunIcon,
  items: ['A correctly sized system', 'Professional installation', 'Testing & handover', 'Ongoing support']
}];


export const processSteps: ProcessStep[] = [
{
  title: 'Consultation',
  description: 'Tell us about your property and power needs by phone, WhatsApp or a site visit.'
},
{
  title: 'Energy Assessment',
  description: 'We review your appliances and daily consumption to size the right system.'
},
{
  title: 'System Design & Installation',
  description: 'We design your solution, then install, test and commission it professionally.'
},
{
  title: 'Support & Maintenance',
  description: 'Ongoing inspection, maintenance and technical support keep your system performing.'
}];


// Placeholders — replace with real customer testimonials and set isPlaceholder to false.
export const testimonials: Testimonial[] = [
{
  quote:
  'Customer testimonial to be added by Synowatt. Share a real client’s experience with their solar installation, the team and the results.',
  name: 'Customer Name',
  role: 'Residential client',
  isPlaceholder: true
},
{
  quote:
  'Customer testimonial to be added by Synowatt. A business owner describing how solar power has supported their operations.',
  name: 'Customer Name',
  role: 'Commercial client',
  isPlaceholder: true
},
{
  quote:
  'Customer testimonial to be added by Synowatt. An institution describing the installation process and ongoing support.',
  name: 'Customer Name',
  role: 'Institutional client',
  isPlaceholder: true
}];