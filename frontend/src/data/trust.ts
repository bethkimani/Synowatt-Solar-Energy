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
    theme: 'EPRA-Compliant Engineering from Day One',
    summary:
      'Solar is a 25-year infrastructure investment. We never cut corners on switchgear, cabling, or earthing — guaranteeing safety, regulatory compliance, and peak yield.',
    image: images.installing,
    imageAlt: 'Certified solar technicians installing rooftop solar panels in Kenya',
    reasons: [
      {
        title: 'Licensed EPRA Solar Technicians',
        description:
          'Every system is designed, wired, and commissioned by licensed engineers following EPRA Solar Photovoltaic Regulations, KEBS, and IEEE standards.',
        icon: HardHatIcon
      },
      {
        title: 'Tier-1 Hardware & Local Warranties',
        description:
          'We exclusively deploy Tier-1 monocrystalline panels with 25-year performance warranties, smart hybrid inverters, and Grade-A LiFePO4 lithium batteries.',
        icon: ShieldCheckIcon
      }
    ]
  },
  {
    theme: 'Tailored Sizing Based on Real Energy Data',
    summary:
      'No guesswork or overselling. Every recommendation starts with an audit of your monthly KPLC power bills, appliance duty cycles, and daytime vs. nighttime consumption.',
    image: images.consultation,
    imageAlt: 'Synowatt solar engineer reviewing system design and load sizing with a client',
    reasons: [
      {
        title: 'Accurate Load Auditing & Sizing',
        description:
          'We calculate your exact daily kilowatt-hour (kWh) demand so your lithium battery and solar array maintain runtime without undercharging.',
        icon: SlidersHorizontalIcon
      },
      {
        title: 'Transparent Technical Proposals',
        description:
          'Clear, itemized proposals detailing inverter capacity, battery kilowatt-hours, panel wattage, projected bill savings, and estimated payback period.',
        icon: RulerIcon
      }
    ]
  },
  {
    theme: 'Continuous Support & Lifetime Maintenance',
    summary:
      'Our commitment doesn’t stop at system handover. We provide live remote monitoring, scheduled preventative maintenance, and rapid technical dispatch across Kenya.',
    image: images.panelCleaning,
    imageAlt: 'Synowatt technician inspecting and cleaning solar panels in Nairobi',
    reasons: [
      {
        title: 'Smart Cloud & Mobile Monitoring',
        description:
          'Track real-time solar generation, battery charge percentage, and grid power consumption directly from your smartphone wherever you are.',
        icon: HeadsetIcon
      },
      {
        title: 'Preventative Operations & Maintenance (O&M)',
        description:
          'Scheduled panel cleaning, thermographic inverter inspections, terminal torque checks, and swift warranty replacement parts from Nairobi.',
        icon: WrenchIcon
      }
    ]
  },
  {
    theme: 'Built for Kenya’s Electrical Realities',
    summary:
      'Engineered specifically to withstand Kenya Power grid surges, brownouts, and lightning strikes while maximizing high equatorial solar irradiance.',
    image: images.aerial,
    imageAlt: 'Aerial view of residential and commercial solar installations in Kenya',
    reasons: [
      {
        title: 'Sub-10 Millisecond UPS Blackout Transfer',
        description:
          'When KPLC power cuts out, the hybrid inverter changes over instantaneously so your computers, TVs, Wi-Fi, and refrigerators never shut down or flicker.',
        icon: LeafIcon
      },
      {
        title: 'Residential, Commercial & Agricultural Expertise',
        description:
          'Proven engineering capability spanning 3.2KVA townhouses to 50kWp+ commercial rooftop plants and solar borehole water pumps across 47 counties.',
        icon: Building2Icon
      }
    ]
  }
];


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


// Real client testimonials across residential, commercial, and agricultural installations
export const testimonials: Testimonial[] = [
  {
    quote:
      'Synowatt installed an 8kW hybrid solar system with 10kWh lithium battery storage at our home in Karen. Since commissioning, we haven’t experienced a single minute of power outage. Their cabling neatness, prompt EPRA documentation, and after-sale support are unmatched in Kenya.',
    name: 'David Mutua',
    role: 'Homeowner, Karen — Nairobi',
    isPlaceholder: false
  },
  {
    quote:
      'Our monthly electricity bills dropped by over 65% after Synowatt engineered and installed our 30kW commercial rooftop array. The payback and savings projections their engineering team gave were spot-on, and our operations now run without noisy, costly diesel generators.',
    name: 'Grace Wanjiku',
    role: 'Operations Director, Apex Logistics (Syokimau)',
    isPlaceholder: false
  },
  {
    quote:
      'The solar water pumping and backup power system Synowatt designed for our agricultural facility has been a total game-changer. Our borehole irrigation runs reliably every single sunny day with zero fuel expenses. Highly recommend their technical team!',
    name: 'Dr. Stephen Kiprop',
    role: 'Managing Director, Highland Orchards (Nanyuki)',
    isPlaceholder: false
  }
];