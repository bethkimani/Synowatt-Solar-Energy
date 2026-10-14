import {
  BatteryChargingIcon,
  Building2Icon,
  CctvIcon,
  ClockIcon,
  DropletsIcon,
  FenceIcon,
  GaugeIcon,
  GlassWaterIcon,
  LightbulbIcon,
  PlugIcon,
  RefrigeratorIcon,
  ShirtIcon,
  SnowflakeIcon,
  SpeakerIcon,
  SunIcon,
  TvIcon,
  WashingMachineIcon,
  WifiIcon } from
'lucide-react';
import { images } from './images';
import type { Appliance, IconFeature, SolarPackage } from '../types/content';

// Prices change often — set `price` to a display string (e.g. "KSh 000,000") or leave null.
export const solarPackages: SolarPackage[] = [
  {
    slug: '3-2kva-hybrid',
    name: '3.2KVA Hybrid Solar Solution',
    type: 'Essential Home & Office Hybrid',
    capacity: '3.2KVA',
    inverter: '3.2KVA pure sine wave hybrid inverter',
    battery: '5.12kWh LiFePO4 lithium battery',
    panels: '4 × 625W Tier-1 bifacial panels (2.5kWp)',
    components: [
      '3.2KVA hybrid smart inverter',
      '5.12kWh wall-mounted LiFePO4 battery',
      '4 × 625W Tier-1 bifacial monocrystalline panels',
      'DC/AC switchgear, SPD surge protection & mounting'
    ],
    features: [
      'Automatic blackout changeover in <10 milliseconds',
      'Powers lighting, TV, fridge, Wi-Fi, CCTV & electronics',
      'Dual priority modes: Solar / Battery / Grid support',
      'Bifacial solar technology with 25-year performance warranty'
    ],
    suitableFor: ['1-3 bedroom homes', 'Home offices', 'Small shops & retail outlets', 'Security gatehouses'],
    image: images.homeRoof,
    imageAlt: 'Family home in Kenya with rooftop hybrid solar panel installation',
    price: null,
    serviceLink: '/services/hybrid-solar-systems',
    serviceTitle: 'Hybrid Solar Systems',
    tagline: 'Reliable Essential Power Backup & Solar Energy for Kenyan Homes',
    description:
      'The 3.2KVA Synowatt Hybrid Solar Solution is engineered specifically for Kenyan urban townhouses, 1-3 bedroom standalone homes, and home offices seeking 24/7 power autonomy. Combining 2.5kWp of Tier-1 bifacial solar panels, a smart pure sine wave hybrid inverter, and a 5.12kWh wall-mounted LiFePO4 lithium battery, this system seamlessly keeps your refrigerator, lights, TV, security setup, and Wi-Fi running during erratic KPLC power outages while reducing monthly power bills.',
    dailyGeneration: '10 – 13 kWh / day (Average Kenyan Sunshine)',
    backupDuration: '10 – 14 Hours typical essential load runtime',
    idealAppliances: [
      { name: 'Energy-Efficient Refrigerator / Fridge-Freezer', runtime: '24/7 continuous operation', notes: 'Inverter compressor recommended' },
      { name: 'LED Indoor & Compound Security Lighting', runtime: '12 – 14 hours every night', notes: 'Powers up to 15 LED bulbs' },
      { name: 'Smart TV & Sound System', runtime: '6 – 8 hours / evening', notes: 'All standard screens & decoders' },
      { name: 'Wi-Fi Router & Starlink Dish', runtime: '24/7 continuous backup', notes: 'Zero internet dropout' },
      { name: 'CCTV Cameras & Electric Fence Energizer', runtime: '24/7 uninterrupted protection', notes: 'Continuous perimeter security' },
      { name: 'Laptops, Phones & Home Office Devices', runtime: 'Full daytime & evening charging', notes: 'Multiple laptops and tablets' }
    ],
    technicalSpecs: [
      { label: 'Continuous Inverter Power', value: '3,200 Watts (3.2 kW)' },
      { label: 'Surge Capacity (5 sec)', value: '6,400 Watts (Peak motor startup)' },
      { label: 'Battery Capacity', value: '5.12 kWh LiFePO4 (51.2V 100Ah)' },
      { label: 'Usable Battery DoD', value: '90% Depth of Discharge (4.6 kWh usable)' },
      { label: 'Solar Panel Array', value: '4 × 625W Bifacial Monocrystalline (2,500Wp)' },
      { label: 'Transfer Time (Grid to UPS)', value: '<10 milliseconds (No computer restart)' },
      { label: 'Battery Cycle Life', value: '6,000+ Cycles @ 80% DoD (~10-15 Years)' },
      { label: 'System Warranties', value: '25 Yrs (Panels), 5-10 Yrs (Battery), 5 Yrs (Inverter)' }
    ],
    whatsIncludedDetailed: [
      { title: '3.2KVA Pure Sine Wave Inverter', description: 'Smart MPPT charge controller with built-in LCD screen and Wi-Fi remote app monitoring.' },
      { title: '5.12kWh LiFePO4 Lithium Battery', description: 'Wall-mounted lithium battery pack with integrated intelligent BMS, thermal sensors, and cell balancing.' },
      { title: '4 × 625W Tier-1 Bifacial Solar Panels', description: 'Heavy-duty monocrystalline panels harvesting light from both front and rear for 15-25% more yield.' },
      { title: 'EPRA-Compliant Switchgear & Surge Protection', description: 'DC/AC isolator switches, Type II surge arrestors (SPD), DC fuses, and dual earthing system.' },
      { title: 'Aluminum Mounting Structures & UV Cables', description: 'Anodized aluminum roof mounting rails, anti-rust stainless bolts, and double-insulated 6mm solar cables.' },
      { title: 'Professional Installation & EPRA Testing', description: 'Full installation, cable routing, system commissioning, and client training by licensed technicians.' }
    ],
    whyChoose: [
      'Zero flicker or shutdown during sudden Kenya Power blackouts with millisecond UPS changeover.',
      'Save up to 70% on monthly power costs by running day loads directly on free Kenyan solar.',
      'Safe LiFePO4 battery chemistry — non-flammable, non-toxic, and silent compared to noisy diesel generators.',
      'Scalable design allows adding a second battery module if your energy needs grow.'
    ],
    faqs: [
      {
        question: 'Can a 3.2KVA solar system run a microwave or iron box?',
        answer: 'A 3.2KVA inverter can handle up to 3,200 Watts. An 800W microwave can run safely during daytime solar generation. However, high-draw resistive heating elements like 2,000W iron boxes or water heaters are typically connected to non-essential loads or used selectively during bright sunshine to conserve battery reserves.'
      },
      {
        question: 'How long will the 5.12kWh battery last during an evening blackout in Kenya?',
        answer: 'For an average Kenyan household running a refrigerator (150W cycling), LED lights (40W), Wi-Fi (20W), TV (100W), and security cameras (30W) — total ~340W load — the 5.12kWh battery easily provides 12 to 14 hours of continuous power overnight.'
      },
      {
        question: 'Does this 3.2KVA system work when there is heavy cloud cover or rain?',
        answer: 'Yes. Our high-efficiency Tier-1 bifacial panels generate power even in diffuse, overcast lighting conditions. If solar generation drops below your load requirements, the hybrid inverter intelligently blends solar, battery, and grid electricity to maintain continuous supply.'
      },
      {
        question: 'What maintenance does the 3.2KVA solar package require?',
        answer: 'LiFePO4 lithium batteries require zero fluid refilling or maintenance. The only routine care needed is periodic rinsing or wiping of the rooftop solar panels every few months to remove dust and maximize sun absorption.'
      },
      {
        question: 'Is the installation compliant with EPRA regulations in Kenya?',
        answer: 'Yes, all Synowatt installations comply with the Energy and Petroleum Regulatory Authority (EPRA) Solar Photovoltaic Systems Regulations, IEEE 1547 guidelines, and Kenya Bureau of Standards (KEBS) specifications.'
      }
    ],
    relatedSolutions: ['5kva-hybrid', '10kva-hybrid']
  },
  {
    slug: '5kva-hybrid',
    name: '5KVA Hybrid Solar Solution',
    type: 'Executive Residential & Small Business',
    capacity: '5KVA',
    inverter: '5KVA pure sine wave hybrid inverter',
    battery: '5.12kWh – 10.24kWh LiFePO4 battery storage',
    panels: '6 × 615W Tier-1 solar panels (3.7kWp)',
    components: [
      '5KVA high-efficiency hybrid inverter',
      '5.12kWh (expandable) lithium battery bank',
      '6 × 615W high-efficiency mono PERC panels',
      'EPRA-compliant isolators, DC combiner & earthing'
    ],
    features: [
      'Runs microwaves, washing machines, pumps & refrigeration',
      'Full home power security during prolonged KPLC blackouts',
      'Mobile app for live solar generation and battery tracking',
      'Modular design allowing easy battery bank expansion'
    ],
    suitableFor: ['3-5 bedroom homes', 'Offices & clinics', 'Restaurants & bakeries', 'Townhouses & apartments'],
    image: images.townhouse,
    imageAlt: 'Townhouse with a modern 5kVA hybrid rooftop solar system in Kenya',
    price: null,
    serviceLink: '/services/hybrid-solar-systems',
    serviceTitle: 'Hybrid Solar Systems',
    tagline: 'Kenya’s Most Popular Solar Package for Modern Family Homes & Medium Businesses',
    description:
      'The 5KVA Synowatt Hybrid Solar Solution is Kenya’s benchmark turnkey solar kit for 3-5 bedroom residential homes, executive apartments, retail shops, clinics, and offices. Powered by a robust 5,000W continuous pure sine wave inverter, 6 × 615W Tier-1 solar panels (3.7kWp), and a 5.12kWh (expandable to 10.24kWh) LiFePO4 battery, this setup reliably powers heavier domestic appliances including microwaves, automatic washing machines, booster water pumps, blenders, multiple refrigerators, and complete entertainment systems.',
    dailyGeneration: '16 – 20 kWh / day (Average Kenyan Sunshine)',
    backupDuration: '12 – 18 Hours (or 24+ Hours with 10.24kWh double battery)',
    idealAppliances: [
      { name: 'Multiple Refrigerators & Deep Freezers', runtime: '24/7 continuous operation', notes: 'Simultaneous running' },
      { name: 'Booster Water Pump (up to 1.0 HP)', runtime: 'Daytime and on-demand', notes: 'Automatic pressure control' },
      { name: 'Automatic Washing Machine', runtime: 'Full wash cycle during solar hours', notes: 'Best used during peak sun' },
      { name: 'Microwave & Kitchen Small Appliances', runtime: 'Normal daily meal prep', notes: 'High surge power supported' },
      { name: 'All Household LED Lights & Compound Floodlights', runtime: 'Dusk to dawn continuous', notes: 'Whole-house lighting' },
      { name: 'Multiple TVs, Gaming Consoles & Audio Systems', runtime: 'Unlimited evening entertainment', notes: 'Zero audio-video hum' },
      { name: 'Starlink, Wi-Fi, CCTV & Perimeter Electric Fence', runtime: '24/7 zero-downtime security', notes: 'Essential security uptime' }
    ],
    technicalSpecs: [
      { label: 'Continuous Inverter Power', value: '5,000 Watts (5.0 kW)' },
      { label: 'Surge Capacity (5 sec)', value: '10,000 Watts (Heavy inductive motor startup)' },
      { label: 'Battery Capacity', value: '5.12 kWh – 10.24 kWh LiFePO4 (51.2V)' },
      { label: 'Usable Battery DoD', value: '90% Depth of Discharge' },
      { label: 'Solar Panel Array', value: '6 × 615W High-Yield Monocrystalline (3,690Wp)' },
      { label: 'Transfer Time (Grid to UPS)', value: '<10 milliseconds (Instantaneous)' },
      { label: 'Maximum Solar MPPT Input', value: '500V DC / 6,000W PV Input' },
      { label: 'Battery Cycle Life', value: '6,000+ Cycles (~15 Years lifespan)' },
      { label: 'System Warranties', value: '25 Yrs (Panels), 10 Yrs (Battery), 5 Yrs (Inverter)' }
    ],
    whatsIncludedDetailed: [
      { title: '5KVA High-Efficiency Smart Hybrid Inverter', description: 'Advanced inverter with dual MPPT, mobile app connectivity, programmable peak-shaving, and grid export limitation.' },
      { title: '5.12kWh / 10.24kWh Modular LiFePO4 Battery', description: 'Wall or rack-mounted lithium iron phosphate battery with advanced BMS, cell protection, and auto-balancing.' },
      { title: '6 × 615W Tier-1 High-Efficiency Panels', description: 'Anti-reflective monocrystalline PERC panels engineered for high heat tolerance and superior low-light yield.' },
      { title: 'EPRA Dual-Earthing & Surge Suppression DB', description: 'Dedicated solar distribution board with DC circuit breakers, AC bypass switch, Class II surge arrestors, and copper earth rod.' },
      { title: 'Heavy-Gauge Mounting Structure', description: 'Corrosion-resistant aluminum clamps, unistruts, and UV-resistant cable glands for pitched or flat roofs.' },
      { title: 'Turnkey Installation, Sizing & Certification', description: 'Turnkey installation by EPRA-certified engineers, full load testing, inverter configuration, and mobile app setup.' }
    ],
    whyChoose: [
      'Powers standard 3-5 bedroom households completely through long national grid blackouts.',
      'Cuts monthly KPLC power bills by 65% to 85% by prioritizing clean daytime solar.',
      'Supports heavier appliances like washing machines, microwaves, and domestic water pumps.',
      'Expandable architecture allows doubling battery storage to 10.24kWh at any time without replacing the inverter.'
    ],
    faqs: [
      {
        question: 'Can a 5KVA solar system run a water pump in Kenya?',
        answer: 'Yes. A 5KVA inverter easily runs typical 0.5 HP, 0.75 HP, and 1.0 HP domestic booster pumps and borehole pressure systems. Our engineers ensure motor startup surge ratings are properly accommodated in the system design.'
      },
      {
        question: 'What is the price of a 5KVA hybrid solar system in Kenya?',
        answer: 'The final cost depends on panel wattage, mounting roof type (tile, metal sheets, flat concrete), and whether you opt for 5.12kWh or 10.24kWh of lithium storage. Synowatt provides free site audits and transparent, itemized quotes with no hidden fees.'
      },
      {
        question: 'Can this 5KVA system run our office or business premises?',
        answer: 'Yes. A 5KVA system is ideal for small to mid-sized commercial offices running 10-15 desktop computers/laptops, printing stations, Wi-Fi networks, water dispensers, and LED office lighting.'
      },
      {
        question: 'How long does professional installation take?',
        answer: 'A standard 5KVA residential installation takes 1 to 2 business days. Our EPRA-certified technicians handle roof mounting, electrical conduit work, DB termination, commissioning, and app demonstration.'
      },
      {
        question: 'Does the system switch automatically when KPLC power goes out?',
        answer: 'Yes. The transition takes less than 10 milliseconds. Your computers, TVs, and appliances will not even flicker or turn off during a blackout.'
      }
    ],
    relatedSolutions: ['3-2kva-hybrid', '10kva-hybrid']
  },
  {
    slug: '10kva-hybrid',
    name: '10KVA Commercial & Estate Hybrid Solution',
    type: 'High-Demand Villa & Commercial Hybrid',
    capacity: '10KVA',
    inverter: '10KVA 3-phase/single-phase hybrid inverter',
    battery: '10.24kWh – 15.36kWh LiFePO4 rack battery',
    panels: '12 × 625W Tier-1 bifacial solar panels (7.5kWp)',
    components: [
      '10KVA heavy-duty hybrid inverter with dual MPPT',
      '10.24kWh+ high-cycle lithium iron phosphate battery',
      '12 × 625W Tier-1 bifacial monocrystalline panels',
      'Industrial-grade AC/DC distribution board & surge arrestors'
    ],
    features: [
      'Effortlessly powers borehole pumps, AC units & cold storage',
      'Dual MPPT solar tracking for split east-west roof orientations',
      'Generator integration port with automated start-stop signal',
      'Expandable lithium storage up to 30kWh for continuous runtime'
    ],
    suitableFor: ['Luxury villas & farmhouses', 'Corporate offices', 'Schools & hospitals', 'Petrol stations & lodges'],
    image: images.commercialRoof,
    imageAlt: 'Commercial building with high-capacity 10kVA hybrid solar installation in Kenya',
    price: null,
    serviceLink: '/services/commercial-industrial',
    serviceTitle: 'Commercial & Industrial Solar',
    tagline: 'High-Capacity Hybrid Solar for Luxury Villas, Commercial Properties & Large Estates',
    description:
      'The 10KVA Synowatt Hybrid Solar Solution is built for large multi-story residences, luxury villas, commercial offices, private schools, medical clinics, and agricultural farmhouses. Featuring a high-surge 10,000W hybrid inverter (single-phase or 3-phase option), a 7.5kWp bifacial solar array (12 × 625W), and high-capacity 10.24kWh to 15.36kWh LiFePO4 rack battery storage, this industrial-grade system easily powers air conditioners, commercial refrigeration, 2-3HP borehole pumps, and commercial operations.',
    dailyGeneration: '35 – 45 kWh / day (Average Kenyan Sunshine)',
    backupDuration: '16 – 24+ Hours continuous full-facility operation',
    idealAppliances: [
      { name: 'Submersible Borehole & Booster Pumps (up to 3 HP)', runtime: 'Full daytime and scheduled pumping', notes: 'Heavy inductive load' },
      { name: 'Inverter Air Conditioners & Ventilation', runtime: 'Continuous daytime and evening cooling', notes: 'Up to 3 A/C units' },
      { name: 'Commercial Cold Rooms & Multi-Door Refrigeration', runtime: '24/7 temperature control', notes: 'Hospitality & butchery grade' },
      { name: 'Heavy Kitchen Appliances (Ovens, Microwaves, Dishwashers)', runtime: 'Simultaneous operation', notes: 'No tripping risk' },
      { name: 'Commercial Laundry Machines & Dryers', runtime: 'High-throughput daytime washing', notes: 'Heavy motor support' },
      { name: 'Complete 50+ Light Facility & Security Perimeter', runtime: 'Dusk to dawn uninterrupted', notes: 'High mast & wall packs' },
      { name: 'Enterprise IT, Servers, Starlink, CCTV & Gate Motors', runtime: '24/7 mission-critical uptime', notes: 'Redundant power protection' }
    ],
    technicalSpecs: [
      { label: 'Continuous Inverter Power', value: '10,000 Watts (10.0 kW) Single or Three-Phase' },
      { label: 'Surge Capacity (5 sec)', value: '20,000 Watts (Industrial-grade startup surge)' },
      { label: 'Battery Capacity', value: '10.24 kWh – 15.36 kWh (Expandable up to 30 kWh)' },
      { label: 'Usable Battery DoD', value: '90% Depth of Discharge' },
      { label: 'Solar Panel Array', value: '12 × 625W Tier-1 Bifacial Monocrystalline (7,500Wp)' },
      { label: 'Dual MPPT Solar Controllers', value: 'Dual trackers for complex multi-pitch roofs' },
      { label: 'Generator Support Port', value: 'Integrated dry contact for automated generator start/stop' },
      { label: 'Battery Cycle Life', value: '6,000+ Cycles @ 80% DoD (~15 Years)' },
      { label: 'System Warranties', value: '25 Yrs (Panels), 10 Yrs (Battery), 5 Yrs (Inverter)' }
    ],
    whatsIncludedDetailed: [
      { title: '10KVA Heavy-Duty Hybrid Inverter (1-Phase / 3-Phase)', description: 'Multi-functional smart inverter with dual MPPTs, 48V/high-voltage battery interface, and generator integration.' },
      { title: '10.24kWh to 15.36kWh LiFePO4 Rack Battery Bank', description: 'Server-rack mounted high-voltage lithium battery bank with master BMS and parallel expansion capability up to 30kWh.' },
      { title: '12 × 625W Tier-1 Bifacial Solar Panels (7.5kWp)', description: 'High-power bifacial panels harvesting sunlight from both sides with ultra-low degradation rates.' },
      { title: 'Industrial-Grade Electrical Protection Board', description: 'Three-phase/single-phase changeover switches, MCCB breakers, Type I+II surge arrestors, and deep earthing grid.' },
      { title: 'Engineered Aluminum Superstructure', description: 'Custom-designed heavy-wind-rated roof or ground mounting frames built with anodized structural aluminum.' },
      { title: 'EPRA Engineering Commissioning & Monitoring', description: 'Turnkey commissioning, full electrical harmonic and load analysis, and remote monitoring configuration.' }
    ],
    whyChoose: [
      'Run an entire luxury home, boutique hotel, or commercial premises without worrying about blackouts or noisy fuel generators.',
      'Slash commercial grid power bills by up to 80% with substantial tax depreciation and fast ROI.',
      'Dual MPPT controllers capture maximum solar yields across east, west, and north-facing roof sections.',
      'Built-in automated generator auto-start ensures total backup security during prolonged rainy spells.'
    ],
    faqs: [
      {
        question: 'Can a 10KVA solar system run borehole water pumps in Kenya?',
        answer: 'Yes. A 10KVA hybrid inverter easily starts and runs 2HP and 3HP submersible borehole pumps and high-pressure booster systems. We match inverter startup curve and solar DC wattage directly to your pump rating.'
      },
      {
        question: 'Is the 10KVA system single-phase or three-phase?',
        answer: 'Synowatt provides both single-phase (230V) and three-phase (400V) 10KVA hybrid configurations. For commercial properties or residences with three-phase KPLC power meters, our three-phase inverter delivers balanced power across all phases.'
      },
      {
        question: 'Can a backup generator be connected to this 10KVA system?',
        answer: 'Yes. The 10KVA inverter features a dedicated generator auxiliary port with dry-contact signal. If the battery level drops during prolonged overcast weather, the system can automatically trigger the generator, run the loads, recharge the lithium batteries, and shut down the generator automatically.'
      },
      {
        question: 'What size roof space is required for 12 solar panels?',
        answer: 'Twelve 625W solar panels require approximately 32 to 36 square meters of unshaded roof or ground space. Our engineers use satellite irradiance tools and on-site measurements to design an optimal panel layout.'
      },
      {
        question: 'What is the return on investment (ROI) for a 10KVA commercial solar setup?',
        answer: 'Given commercial electricity tariffs in Kenya, a 10KVA system producing 35 to 45 kWh daily typically pays for itself in 3.5 to 5 years through direct grid bill savings and diesel generator fuel elimination.'
      }
    ],
    relatedSolutions: ['5kva-hybrid', '3-2kva-hybrid']
  }
];


export const sizingFactors: IconFeature[] = [
{
  title: 'Energy consumption',
  description: 'How many units of electricity you use each day and month.',
  icon: GaugeIcon
},
{
  title: 'Appliances',
  description: 'Which appliances you want to run, and which need to run at the same time.',
  icon: PlugIcon
},
{
  title: 'Battery requirements',
  description: 'How long you need power without sunshine — overnight or through outages.',
  icon: BatteryChargingIcon
},
{
  title: 'Solar generation',
  description: 'Available roof or ground space, orientation and shading on your site.',
  icon: SunIcon
},
{
  title: 'Property type',
  description: 'Homes, offices, businesses and institutions each have different load profiles.',
  icon: Building2Icon
},
{
  title: 'Usage patterns',
  description: 'Whether you use most of your power during the day, the evening, or both.',
  icon: ClockIcon
}];


export const appliances: Appliance[] = [
{ label: 'TV', icon: TvIcon },
{ label: 'Lighting', icon: LightbulbIcon },
{ label: 'Refrigerator', icon: RefrigeratorIcon },
{ label: 'Wi-Fi Router', icon: WifiIcon },
{ label: 'CCTV', icon: CctvIcon },
{ label: 'Water Pump', icon: DropletsIcon },
{ label: 'Washing Machine', icon: WashingMachineIcon },
{ label: 'Freezer', icon: SnowflakeIcon },
{ label: 'Music System', icon: SpeakerIcon },
{ label: 'Electric Fence', icon: FenceIcon },
{ label: 'Water Dispenser', icon: GlassWaterIcon },
{ label: 'Iron Box', icon: ShirtIcon }];

export const solutions = solarPackages;