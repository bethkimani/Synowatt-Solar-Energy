import {
  BatteryChargingIcon,
  BoxesIcon,
  CompassIcon,
  DropletsIcon,
  FactoryIcon,
  FlameIcon,
  HouseIcon,
  RulerIcon,
  SunIcon,
  WrenchIcon,
  ZapIcon
} from 'lucide-react';
import { images } from './images';
import type { Service } from '../types/content';

export const services: Service[] = [
  {
    slug: 'solar-installation',
    title: 'Solar System Installation',
    tagline: 'Certified Rooftop & Ground-Mount Solar PV Installations Across Kenya',
    description:
      'Professional installation of residential, commercial, and institutional solar systems — structurally mounted, wired with safety switchgear, tested, and commissioned by EPRA-certified engineers.',
    icon: SunIcon,
    image: images.installing,
    imageAlt: 'Technicians installing monocrystalline solar panels on a Kenyan roof',
    benefits: [
      'Engineered mounting structures designed for high wind and weather loads',
      'Certified DC/AC surge protection and earthing systems',
      'Comprehensive testing and commissioning before system handover',
      'Full walk-through and mobile monitoring app setup for the client',
      'Compliance with EPRA and IEEE electrical safety standards'
    ],
    applications: ['Residential homes & townhouses', 'Commercial buildings & offices', 'Schools & universities', 'Hospitals & community facilities'],
    longDescription: [
      'At Synowatt Power & Solar Ltd, our solar panel installation service provides turn-key renewable electricity solutions built to perform under Kenya’s high irradiance conditions. Every installation starts with a comprehensive site assessment, evaluating your roof angle, structural integrity, and shading patterns to maximize daily kilowatt-hour generation.',
      'We utilize Tier-1 high-efficiency monocrystalline solar panels with 25-year performance warranties. Our certified solar technicians employ heavy-duty aluminium rails, UV-rated DC cables, and specialized circuit breakers to protect your property against electrical surges and lightning strikes.',
      'Upon completion, we perform rigorous voltage, polarity, and insulation resistance tests before commissioning. We also configure your real-time mobile app so you can track power production from anywhere in Kenya or abroad.'
    ],
    features: [
      {
        title: 'Tier-1 High-Efficiency Panels',
        description: 'Monocrystalline half-cell solar panels offering up to 22.5% efficiency and superior low-light performance.'
      },
      {
        title: 'EPRA-Certified Technicians',
        description: 'All work is performed by licensed solar photovoltaic engineers ensuring full regulatory compliance in Kenya.'
      },
      {
        title: 'Safety & Surge Protection',
        description: 'Dedicated DC isolators, Class II surge protection devices (SPDs), and certified grounding systems.'
      },
      {
        title: '25-Year Performance Warranty',
        description: 'Industry-leading linear power output guarantees for dependable long-term energy savings.'
      }
    ],
    faqs: [
      {
        question: 'How long does a typical residential solar installation take in Kenya?',
        answer: 'Most residential rooftop installations (3kW to 10kW) are fully mounted, wired, tested, and commissioned within 2 to 4 working days, minimizing disruption to your household.'
      },
      {
        question: 'Do solar panels work during rainy or cloudy weather in Kenya?',
        answer: 'Yes. Modern monocrystalline panels continue to generate electricity during overcast days using diffuse daylight, producing approximately 25% to 40% of their peak rated output.'
      },
      {
        question: 'Will my roof be damaged during solar panel installation?',
        answer: 'No. We use non-penetrative clamps for standing-seam roofs and specialized weatherproof rubber seals (EPDM flashing) on tile and iron roofs to guarantee 100% leak-proof integrity.'
      }
    ],
    relatedServices: ['hybrid-solar-systems', 'lithium-battery-storage', 'residential-solar']
  },

  {
    slug: 'hybrid-solar-systems',
    title: 'Hybrid Solar Systems',
    tagline: 'Seamless Power Backup & Bill Reduction: Solar, Lithium Storage & Grid Combined',
    description:
      'Intelligent hybrid solar systems combining solar panels, lithium battery banks, and KPLC grid power. Switches automatically in milliseconds to provide uninterrupted electricity during blackouts.',
    icon: ZapIcon,
    image: images.homeRoof,
    imageAlt: 'Kenyan residential property with modern hybrid solar system and battery storage',
    benefits: [
      'Zero-delay power transfer during KPLC grid blackouts (<10ms)',
      'Store excess daytime solar power for evening and nighttime consumption',
      'Cut monthly grid electricity bills by up to 70% to 90%',
      'Smart load priority programming (essential vs non-essential circuits)',
      'Remote monitoring and parameter tuning via smartphone'
    ],
    applications: ['Homes with frequent power outages', 'Commercial premises & retail stores', 'Medical clinics & laboratories', 'Offices, IT firms & servers'],
    longDescription: [
      'A hybrid solar system represents the gold standard for Kenyan homes and enterprises. Unlike basic grid-tied systems that shut down during power cuts for safety reasons, a Synowatt hybrid system seamlessly shifts to battery storage the instant the utility grid drops.',
      'Our intelligent hybrid inverters (including Deye, Growatt, and Victron Energy) manage power distribution in real time: supplying your appliances directly from sunlight during the day, routing surplus energy into long-life lithium batteries, and drawing from the grid only when necessary.',
      'You gain total immunity from annoying blackouts, voltage fluctuations, and rising utility tariffs while enjoying clean, silent power with zero diesel generator fumes or fuel costs.'
    ],
    features: [
      {
        title: 'Sub-10ms UPS Transfer',
        description: 'Ultra-fast switching ensures computers, Wi-Fi routers, TV screens, and medical equipment never reset during power cuts.'
      },
      {
        title: 'Smart Time-of-Use Management',
        description: 'Programmable peak-shaving settings to store solar energy and discharge during expensive tariff hours.'
      },
      {
        title: 'Generator Port & Autostart',
        description: 'Integrated auxiliary input capable of automatically starting backup diesel generators during prolonged rainy spells.'
      },
      {
        title: 'Pure Sine Wave Inverters',
        description: 'Clean, stable electrical output that protects sensitive electronics, refrigeration compressors, and home appliances.'
      }
    ],
    faqs: [
      {
        question: 'Can a hybrid solar system run heavy appliances like refrigerators and water pumps?',
        answer: 'Yes. When properly sized with adequate inverter capacity and lithium battery discharge current, our hybrid systems easily start and run fridges, freezers, borehole pumps, and security lights.'
      },
      {
        question: 'What is the difference between a hybrid solar system and an off-grid system?',
        answer: 'A hybrid solar system maintains a connection to the KPLC grid as a backup source while maximizing solar and battery use. An off-grid system is completely isolated from the grid, relying solely on solar and batteries.'
      },
      {
        question: 'How do I monitor my hybrid system’s daily performance?',
        answer: 'Every Synowatt hybrid system includes Wi-Fi data logging that allows you to monitor solar generation, battery percentage, and household consumption live on your smartphone.'
      }
    ],
    relatedServices: ['lithium-battery-storage', 'solar-installation', 'residential-solar']
  },

  {
    slug: 'lithium-battery-storage',
    title: 'Lithium Battery Storage',
    tagline: 'High-Cycle LiFePO4 Battery Banks for Reliable Overnight & Backup Power',
    description:
      'Advanced Lithium Iron Phosphate (LiFePO4) solar battery banks designed for deep daily cycles, rapid recharging, and 10+ years of maintenance-free service in Kenya.',
    icon: BatteryChargingIcon,
    image: images.inverterBattery,
    imageAlt: 'Wall-mounted lithium battery storage bank with smart battery management system',
    benefits: [
      'Over 6,000 charge/discharge cycles at 80% to 90% Depth of Discharge',
      '10 to 15-year operational lifespan with manufacturer warranty backing',
      'Built-in intelligent Battery Management System (BMS) for safety',
      'High charge acceptance: recharges in less than 2.5 hours of sunlight',
      'Zero routine maintenance: no acid fumes, water topping, or corrosion'
    ],
    applications: ['New hybrid solar installations', 'Upgrading existing lead-acid/gel battery banks', 'Home blackout backup systems', 'Critical telecom & IT server backup'],
    longDescription: [
      'Energy storage is the heart of any reliable solar setup in Kenya. Traditional lead-acid and gel batteries suffer from short lifespans (typically 1.5 to 3 years), low usable capacity (50% max), and sensitivity to warm ambient temperatures. Synowatt installs advanced Lithium Iron Phosphate (LiFePO4) batteries that outlast and outperform traditional chemistries in every metric.',
      'Our lithium batteries feature integrated Battery Management Systems (BMS) that continuously balance cell voltages, monitor temperature, and guard against overcharging, over-discharging, and short circuits. They deliver full power throughout their discharge cycle without voltage drop.',
      'Whether you are setting up a brand new solar installation or upgrading an existing system from failing lead-acid batteries, our team will calculate the exact kilowatt-hour (kWh) capacity required for your property.'
    ],
    features: [
      {
        title: 'LiFePO4 Chemistry',
        description: 'The safest, most chemically stable lithium technology available, eliminating thermal runaway risks.'
      },
      {
        title: 'Smart BMS Communication',
        description: 'Closed-loop CAN/RS485 data communication with hybrid inverters for optimal charging efficiency.'
      },
      {
        title: 'Modular & Expandable',
        description: 'Easily scale your battery bank by adding parallel modules as your household energy needs grow.'
      },
      {
        title: 'Compact Wall or Rack Mount',
        description: 'Sleek, modern form factor that takes up 70% less floor space than bulky lead-acid battery banks.'
      }
    ],
    faqs: [
      {
        question: 'Can I replace my old gel or tubular batteries with a new lithium battery?',
        answer: 'Yes! Most modern hybrid inverters can be reprogrammed to lithium charge profiles, providing a massive upgrade in storage capacity, charging speed, and lifespan.'
      },
      {
        question: 'How long do lithium solar batteries last in Kenya?',
        answer: 'Quality LiFePO4 batteries last 10 to 15 years with daily cycling, backed by 5 to 10-year manufacturer replacement warranties.'
      },
      {
        question: 'Are lithium solar batteries safe inside a home?',
        answer: 'Yes. Lithium Iron Phosphate (LiFePO4) does not emit toxic gases, acid spills, or fumes, and is certified safe for indoor utility room installation.'
      }
    ],
    relatedServices: ['hybrid-solar-systems', 'solar-installation', 'maintenance-support']
  },

  {
    slug: 'solar-water-pumping',
    title: 'Solar Water Pumping Systems',
    tagline: 'Zero-Fuel Solar Pumping for Boreholes, Irrigation & Commercial Farms',
    description:
      'High-performance solar water pumping solutions for agricultural irrigation, community boreholes, and livestock. Eliminate costly diesel generator fuel and KPLC pumping tariffs.',
    icon: DropletsIcon,
    image: images.groundMount,
    imageAlt: 'Ground-mounted solar array powering a high-yield borehole water pumping system in Kenya',
    benefits: [
      'Eliminate ongoing diesel fuel and generator maintenance costs',
      'Direct solar drive: pumps water automatically from sunrise to sunset',
      'High-efficiency solar Variable Frequency Drives (VFD) with MPPT',
      'Compatible with standard AC 3-phase and specialized DC submersible pumps',
      'Built-in dry-run protection and water tank level automation'
    ],
    applications: ['Agricultural drip & sprinkler irrigation', 'Deep borehole water extraction (up to 300m+)', 'Commercial horticulture & flower farms', 'Community water supply & livestock watering'],
    longDescription: [
      'Water is essential for agricultural profitability and residential comfort in Kenya. However, operating borehole pumps using grid electricity or diesel generators creates immense monthly overheads and vulnerability to fuel price hikes. Synowatt’s solar water pumping systems convert clean Kenyan sunlight directly into continuous water flow.',
      'Our systems utilize high-efficiency Solar VFD (Variable Frequency Drive) inverters featuring advanced Maximum Power Point Tracking (MPPT). This technology allows the pump to start early in the morning, adapt smoothly to passing clouds, and maximize liters pumped per day without batteries.',
      'We design solutions for all borehole depths and discharge heads, providing turn-key installations across Machakos, Kiambu, Kajiado, Nakuru, Laikipia, and nationwide.'
    ],
    features: [
      {
        title: 'Solar VFD MPPT Inverters',
        description: 'Dynamic frequency adjustment extracts maximum pump volume even during low-light early morning and late afternoon hours.'
      },
      {
        title: 'Sensorless Dry-Run Protection',
        description: 'Protects pump motors against overheating if water levels fall below the intake depth.'
      },
      {
        title: 'Hybrid AC/DC Capability',
        description: 'Optional dual-source inputs allow switching to grid or generator power for emergency night pumping.'
      },
      {
        title: 'Corrosion-Resistant Mounting',
        description: 'Hot-dip galvanized ground structures built to withstand open field environments for 25+ years.'
      }
    ],
    faqs: [
      {
        question: 'Can my existing borehole pump be powered by solar?',
        answer: 'Yes! In most cases, we can install a solar array and specialized solar VFD inverter to run your existing 240V single-phase or 415V 3-phase submersible pump without replacing the motor.'
      },
      {
        question: 'Do solar water pumping systems require batteries?',
        answer: 'No. The most cost-effective and reliable method is to pump water directly into elevated storage tanks during daylight hours, storing water rather than electricity.'
      },
      {
        question: 'What information is needed to size a solar borehole pump?',
        answer: 'We need your borehole depth (total head), yield capacity in cubic meters per hour, and your daily water requirement (liters per day).'
      }
    ],
    relatedServices: ['solar-installation', 'commercial-industrial', 'design-consultation']
  },

  {
    slug: 'commercial-industrial',
    title: 'Commercial & Industrial Solar',
    tagline: 'High-Capacity Solar PV Solutions to Slashing Enterprise Electricity Overheads',
    description:
      'Engineered rooftop and ground-mount commercial solar power plants for factories, commercial buildings, warehouses, schools, and hospitals across Kenya.',
    icon: FactoryIcon,
    image: images.commercialRoof,
    imageAlt: 'Large-scale commercial factory rooftop covered with high-yield solar PV panels',
    benefits: [
      'Significantly lower daytime operational energy expenditures',
      'Short payback period: 3 to 5 years with 25-year asset lifespan',
      'Peak-shaving technology to avoid high maximum demand charges',
      'Enhanced corporate ESG credentials and clean energy branding',
      'Detailed financial modeling with clear ROI and tariff projections'
    ],
    applications: ['Manufacturing factories & processing plants', 'Warehouses & logistics parks', 'Shopping malls & office complexes', 'Universities, schools & healthcare facilities'],
    longDescription: [
      'Electricity tariffs in Kenya represent one of the heaviest operational costs for commercial and industrial enterprises. High day-rate tariffs and penalties for peak demand strain margins. Synowatt provides bespoke commercial solar engineering that offsets daytime grid consumption during your highest operating hours.',
      'Our team conducts comprehensive load profile analyses, power factor evaluations, and structural roof engineering checks. We install commercial-grade three-phase inverters with active anti-islanding and smart export limitation controllers.',
      'Every project is delivered in full compliance with EPRA regulations, local county building codes, and international safety standards, accompanied by detailed SCADA remote performance monitoring.'
    ],
    features: [
      {
        title: 'Grid-Tie & Zero-Export Control',
        description: 'Smart power controllers synchronize with KPLC or diesel generators, ensuring zero reverse power injection.'
      },
      {
        title: 'High-Yield Commercial Inverters',
        description: 'Multi-MPPT string inverters with up to 99% European efficiency and integrated string monitoring.'
      },
      {
        title: 'Walkway & Fire-Safety Layouts',
        description: 'Engineered rooftop access paths, rapid-shutdown switches, and dedicated emergency disconnects.'
      },
      {
        title: 'Comprehensive Financial Feasibility',
        description: 'Detailed financial projections including LCOE (Levelized Cost of Energy), IRR, and payback timelines.'
      }
    ],
    faqs: [
      {
        question: 'Can commercial solar work together with our standby diesel generator?',
        answer: 'Yes! Our smart hybrid microgrid controllers synchronize solar generation with diesel generators, reducing diesel fuel consumption by up to 60% during daytime grid outages.'
      },
      {
        question: 'What is the return on investment (ROI) for commercial solar in Kenya?',
        answer: 'Commercial solar systems in Kenya typically achieve full capital payback within 3 to 5 years, after which you enjoy virtually free electricity for the remaining 20+ years of panel life.'
      },
      {
        question: 'Do you provide operations and maintenance (O&M) contracts for commercial sites?',
        answer: 'Yes, Synowatt offers tailored O&M service level agreements (SLAs), including quarterly panel washing, thermal imaging of electrical connections, and inverter firmware updates.'
      }
    ],
    relatedServices: ['solar-installation', 'hybrid-solar-systems', 'maintenance-support']
  },

  {
    slug: 'residential-solar',
    title: 'Residential Solar Solutions',
    tagline: 'Reliable, Beautiful Home Solar Systems for Kenyan Families & Estates',
    description:
      'Complete home solar solutions tailored to your household electricity consumption — from compact blackout backup setups to comprehensive whole-house off-grid and hybrid systems.',
    icon: HouseIcon,
    image: images.townhouse,
    imageAlt: 'Kenyan family townhouse with high-efficiency rooftop solar system and sleek finish',
    benefits: [
      'Power everyday home appliances, lighting, Wi-Fi, and TV with clean energy',
      'Drastically reduce monthly KPLC electricity bills',
      'Uninterrupted comfort and security during sudden estate blackouts',
      'Aesthetic, tidy roof mounting that preserves property curb appeal',
      'Dedicated local customer support and preventative maintenance'
    ],
    applications: ['Standalone family bungalows & villas', 'Gated community townhouses & estates', 'Rural and country holiday homes', 'Rental properties & Airbnb investments'],
    longDescription: [
      'Your home deserves steady, dependable power without the noise, smoke, and recurring fuel expenses of a petrol generator. Synowatt’s residential solar installations are designed specifically for modern Kenyan families who want reliable power for their daily lives.',
      'We design our home packages to run your essential circuits — including LED lights, television, home entertainment, high-speed Wi-Fi, laptops, CCTV cameras, electric fencing, and refrigeration. If you have higher energy demands, we engineer expanded packages capable of running washing machines, microwaves, and water booster pumps.',
      'With neat cable trunking, safe indoor lithium battery mounting, and clean roof alignment, your solar system will enhance the value and modern appeal of your property.'
    ],
    features: [
      {
        title: 'Custom-Tailored Load Sizing',
        description: 'We audit your appliances to ensure you never overpay for unneeded capacity or suffer undersized storage.'
      },
      {
        title: 'Silent & Automatic Operation',
        description: 'No manual switching, no pull-cords, no fuel handling — transitions occur automatically in milliseconds.'
      },
      {
        title: 'Safe Indoor Lithium Batteries',
        description: 'Compact wall-mounted batteries that look like modern consumer electronics and operate with zero emissions.'
      },
      {
        title: 'Mobile App Monitoring',
        description: 'Track how much solar energy your panels produce and verify battery percentage right from your phone.'
      }
    ],
    faqs: [
      {
        question: 'How much space do I need on my roof for residential solar panels?',
        answer: 'A standard 3kW to 5kW residential system typically requires between 15 to 25 square meters of unobstructed roof space facing north or with minimal shading.'
      },
      {
        question: 'Can solar power my electric shower or water heater?',
        answer: 'Instant electric shower heads draw enormous power (over 7,000 watts) and are expensive to run on batteries. We recommend pairing your solar PV system with a dedicated solar thermal water heater for maximum savings.'
      },
      {
        question: 'Do residential solar installations come with warranties?',
        answer: 'Yes! Synowatt provides 25-year performance warranties on solar panels, 5 to 10-year warranties on lithium batteries, 5-year warranties on inverters, and full installation guarantees.'
      }
    ],
    relatedServices: ['hybrid-solar-systems', 'lithium-battery-storage', 'solar-installation']
  },

  {
    slug: 'solar-water-heating',
    title: 'Solar Water Heating Systems',
    tagline: 'Slash Water Heating Costs by 70% with EPRA-Compliant Solar Thermal Systems',
    description:
      'High-efficiency pressurized and non-pressurized solar thermal water heaters for homes, apartments, hotels, and schools in Kenya. Fully compliant with EPRA water heating mandates.',
    icon: FlameIcon,
    image: images.homeRoof,
    imageAlt: 'Roof-mounted solar water heater with evacuated tubes and insulated storage tank',
    benefits: [
      'Eliminate up to 70% of high domestic and commercial electricity bills',
      'Compliant with EPRA Solar Water Heating Regulations in Kenya',
      'Double-wall insulated storage tanks retain hot water for over 48 hours',
      'Choice of flat-plate collectors or evacuated tube technology',
      'Auxiliary electrical backup element for heavy rainy spells'
    ],
    applications: ['Residential homes, villas & townhouses', 'Multi-unit apartment complexes', 'Hotels, safari lodges & resorts', 'Boarding schools & healthcare institutions'],
    longDescription: [
      'Water heating typically accounts for 40% to 60% of an average Kenyan household’s electricity bill due to power-hungry geysers and instant showers. Furthermore, EPRA regulations mandate that commercial and residential premises consuming more than 100 liters of hot water daily must install solar water heating systems.',
      'Synowatt supplies and installs premium solar thermal heating systems engineered for high heat retention and long service life. We offer both pressurized evacuated tube collectors (ideal for high-pressure booster pump systems) and heavy-duty flat plate glazed collectors.',
      'Our systems feature food-grade SUS316 stainless steel internal tanks, high-density polyurethane insulation, and sacrificial magnesium anodes to guard against hard water mineral scaling.'
    ],
    features: [
      {
        title: 'Evacuated Tube & Flat Plate Options',
        description: 'Selected based on your roof pitch, aesthetic preference, and water pressure requirements.'
      },
      {
        title: 'Superior 48-Hour Thermal Insulation',
        description: '50mm pressurized polyurethane foam insulation maintains steaming water even on chilly mornings.'
      },
      {
        title: 'Intelligent Heating Controller',
        description: 'Digital display with automated auxiliary timer and temperature threshold controls.'
      },
      {
        title: 'EPRA Regulatory Certificate',
        description: 'Official commissioning documentation required for building approvals and compliance inspections.'
      }
    ],
    faqs: [
      {
        question: 'What is the EPRA requirement for solar water heating in Kenya?',
        answer: 'The Energy and Petroleum Regulatory Authority (EPRA) mandates that premises with hot water requirements exceeding 100 liters per day must heat at least 60% of their water via solar thermal systems.'
      },
      {
        question: 'Will I have hot water in the morning or on cloudy days?',
        answer: 'Yes. Our insulated storage cylinders lose less than 4°C overnight. Additionally, an automatic auxiliary electric backup heater tops up temperatures during prolonged monsoon rains.'
      },
      {
        question: 'What size solar water heater do I need for my household?',
        answer: 'As a rule of thumb, budget 30 to 50 liters per person per day. A 150L unit suits 3-4 people, 200L suits 4-6 people, and 300L serves larger households of 6 to 9 people.'
      }
    ],
    relatedServices: ['residential-solar', 'solar-installation', 'commercial-industrial']
  },

  {
    slug: 'off-grid-solar-systems',
    title: 'Off-Grid Solar Power Systems',
    tagline: '100% Energy Independence for Remote Ranches, Lodges & Rural Kenya',
    description:
      'Complete standalone solar photovoltaic systems with heavy-duty battery banks and backup generator integration for remote properties located beyond the reach of the utility grid.',
    icon: CompassIcon,
    image: images.school,
    imageAlt: 'Remote facility powered by an independent off-grid solar photovoltaic system',
    benefits: [
      'Complete electrical self-reliance with zero utility dependence',
      'Designed for 2 to 3 days of autonomy during overcast weather',
      'Automatic generator synchronization for seamless emergency battery charging',
      'Heavy-duty industrial inverters built for harsh remote conditions',
      'Reliable power for lighting, refrigeration, pumps, and communications'
    ],
    applications: ['Remote safari camps & eco-lodges', 'Agricultural ranches & tea/coffee estates', 'Rural country homes & retreat centers', 'Off-grid healthcare dispensaries & schools'],
    longDescription: [
      'Extending grid electricity lines to remote locations in Kenya can cost millions of shillings in transformer and pole infrastructure, only to leave you vulnerable to frequent line faults and outages. Synowatt’s off-grid solar solutions provide complete, permanent energy independence.',
      'We engineer standalone solar power systems that balance your continuous loads, daytime solar collection, and battery reserves. Every system is built with 2 to 3 days of weather autonomy, ensuring your operations continue uninterrupted through rainy periods.',
      'Our off-grid solutions integrate heavy-duty pure sine wave inverters, high-capacity lithium or deep-cycle battery banks, and automatic generator control units for seamless auxiliary charging.'
    ],
    features: [
      {
        title: 'High Autonomy Sizing',
        description: 'Engineered with generous battery reserves to maintain power through consecutive rainy days.'
      },
      {
        title: 'Auto-Gen Start (AGS)',
        description: 'Inverter automatically triggers and stops your backup diesel generator when battery levels hit preset thresholds.'
      },
      {
        title: 'Robust Surge Capacity',
        description: 'Capable of handling high inrush currents from refrigeration compressors and submersible pumps.'
      },
      {
        title: 'Satellite Remote Monitoring',
        description: 'Optional GSM and satellite telemetry to monitor battery state-of-charge from Nairobi.'
      }
    ],
    faqs: [
      {
        question: 'Can an off-grid solar system provide 24/7 power without the grid?',
        answer: 'Yes! When sized properly by our engineers, your daytime solar panels charge the battery bank while running daytime loads, storing ample electricity for overnight use.'
      },
      {
        question: 'What happens during a week of rainy weather in an off-grid setup?',
        answer: 'Our systems include an intelligent generator port that automatically starts an auxiliary diesel or petrol generator to charge the battery bank if solar output drops for consecutive days.'
      },
      {
        question: 'What battery type is best for an off-grid system in Kenya?',
        answer: 'Lithium LiFePO4 batteries are the undisputed best choice due to their 6,000-cycle life, 90% usable depth of discharge, and rapid charging capabilities.'
      }
    ],
    relatedServices: ['hybrid-solar-systems', 'lithium-battery-storage', 'solar-water-pumping']
  },

  {
    slug: 'design-consultation',
    title: 'Solar System Design & Consultation',
    tagline: 'Precision Energy Audits & Engineering Calculations Before You Spend a Shilling',
    description:
      'Comprehensive energy audits, appliance load profiling, site feasibility studies, and custom CAD engineering blueprints to ensure you invest in the right solar solution.',
    icon: RulerIcon,
    image: images.consultation,
    imageAlt: 'Synowatt solar engineer reviewing detailed electrical blueprints and energy consumption with a client',
    benefits: [
      'Detailed appliance load profile and daily kWh consumption analysis',
      'Prevent costly over-sizing or frustrating under-sizing of equipment',
      'Structural roof assessment and 3D shading analysis',
      'Clear, itemized quotation with zero hidden installation costs',
      'Comprehensive financial payback and KPLC savings forecast'
    ],
    applications: ['Homeowners planning their first solar move', 'Architects & building contractors', 'Commercial property developers', 'Farms & industrial facility managers'],
    longDescription: [
      'A successful solar installation begins with accurate engineering data. Installing a system without proper load measurement leads to either wasted capital on oversized equipment or constant battery shutdowns from an undersized setup.',
      'Synowatt’s solar design and consultation service takes the guesswork out of your transition to clean energy. Our experienced engineers audit your historical electricity bills, log your actual appliance wattage, and map out your daytime versus nighttime consumption curves.',
      'We also conduct drone and physical site inspections to measure roof azimuth, tilt angle, and shading from trees or adjacent structures, delivering a transparent proposal with realistic performance simulations.'
    ],
    features: [
      {
        title: 'Data-Driven Energy Auditing',
        description: 'Logging real power draw to calculate exact continuous and surge electrical loads.'
      },
      {
        title: '3D Solar Shading Simulations',
        description: 'Simulate sun path and seasonal shadow variations to determine optimal panel placement.'
      },
      {
        title: 'Financial Payback Projections',
        description: 'Itemized financial modeling showing your monthly cash savings, ROI, and payback timeline.'
      },
      {
        title: 'Single-Line Electrical Schematics',
        description: 'Detailed engineering drawings specifying cable gauges, breaker ratings, and earthing layouts.'
      }
    ],
    faqs: [
      {
        question: 'How do I prepare for a solar consultation with Synowatt?',
        answer: 'Having 3 to 6 recent KPLC electricity tokens or bills and an estimate of your major appliances (fridges, pumps, heaters) is ideal for our initial sizing consultation.'
      },
      {
        question: 'Do you charge for initial solar consultations in Nairobi?',
        answer: 'Our preliminary consultations, telephone sizing reviews, and initial quotations are completely free with zero obligation.'
      },
      {
        question: 'Can you design a solar system for a building still under construction?',
        answer: 'Yes! We work directly with your architect and electrical contractor to specify conduit routing, roof reinforcement, and inverter room locations before finishes are applied.'
      }
    ],
    relatedServices: ['solar-installation', 'hybrid-solar-systems', 'commercial-industrial']
  },

  {
    slug: 'maintenance-support',
    title: 'Solar Maintenance & Support',
    tagline: 'Proactive System Audits, Panel Cleaning & Preventative Care Across Kenya',
    description:
      'Comprehensive solar maintenance, thermal imaging inspections, panel cleaning, inverter troubleshooting, and performance tuning to safeguard your solar investment.',
    icon: WrenchIcon,
    image: images.panelCleaning,
    imageAlt: 'Technician inspecting and cleaning commercial rooftop solar panels in Kenya',
    benefits: [
      'Restore up to 15% to 25% of solar yield lost to dust and environmental soiling',
      'Thermal imaging of electrical connections to prevent hot spots and fires',
      'Inverter firmware updates and battery health diagnostic checks',
      'Rapid on-site troubleshooting and replacement part dispatch',
      'Scheduled maintenance contracts for homes, businesses, and institutions'
    ],
    applications: ['Existing residential solar setups', 'Commercial & industrial solar arrays', 'Institutions & community solar sites', 'Third-party installed solar systems needing repair'],
    longDescription: [
      'While quality solar systems require minimal daily intervention, environmental factors in Kenya — including dust, pollen, bird droppings, and grid voltage spikes — gradually degrade system efficiency over time. Unchecked dust accumulation alone can reduce power output by over 20%.',
      'Synowatt provides professional maintenance and support services for residential, commercial, and agricultural solar systems. Our technicians use demineralized water and non-abrasive equipment to clean panels without scratching anti-reflective glass coatings.',
      'We also perform comprehensive electrical diagnostics: checking torque on electrical connections, testing DC strings for voltage drop, conducting infrared thermal scans, and updating inverter firmware to ensure maximum uptime.'
    ],
    features: [
      {
        title: 'Infrared Thermal Diagnostics',
        description: 'Detect micro-cracks in cells and resistive heating in circuit breakers before faults occur.'
      },
      {
        title: 'De-ionized Solar Panel Washing',
        description: 'Specialized cleaning that leaves zero mineral residue or streaking on solar glass.'
      },
      {
        title: 'Battery Cell Health Analytics',
        description: 'Internal resistance and cycle life testing to identify underperforming battery cells.'
      },
      {
        title: 'Emergency Breakdown Response',
        description: 'Rapid technical dispatch from our Nairobi service center to resolve unexpected system faults.'
      }
    ],
    faqs: [
      {
        question: 'How often should solar panels be cleaned in Kenya?',
        answer: 'In dusty urban or rural areas, we recommend cleaning panels every 3 to 6 months. In cleaner areas, a bi-annual wash is generally sufficient.'
      },
      {
        question: 'Can you repair or maintain a solar system installed by another company?',
        answer: 'Yes! We frequently inspect, troubleshoot, upgrade, and repair solar installations originally installed by other contractors.'
      },
      {
        question: 'Why are my solar panels producing less power than when first installed?',
        answer: 'Common causes include dust buildup, tree shading growth, loose wiring connections, or degraded battery banks. A Synowatt audit quickly identifies and fixes the issue.'
      }
    ],
    relatedServices: ['solar-installation', 'lithium-battery-storage', 'hybrid-solar-systems']
  },

  {
    slug: 'equipment-components',
    title: 'Solar Equipment & Components',
    tagline: 'Authentic Tier-1 Solar Panels, Inverters, Lithium Batteries & Accessories',
    description:
      'Authorized supply of genuine Tier-1 solar panels, hybrid inverters, LiFePO4 batteries, mounting rails, and DC switchgear with local manufacturer warranty backing in Kenya.',
    icon: BoxesIcon,
    image: images.equipment,
    imageAlt: 'High-grade hybrid inverters, lithium batteries, and solar panels in our Nairobi facility',
    benefits: [
      '100% authentic equipment sourced directly from certified global manufacturers',
      'Full local warranty backing with dedicated in-country technical support',
      'Expert advice on component compatibility before purchase',
      'Supply available as standalone hardware or complete installation packages',
      'Competitive wholesale and retail pricing across Kenya'
    ],
    applications: ['Solar installers & electrical contractors', 'Property owners undertaking DIY upgrades', 'Commercial maintenance teams', 'Institutional procurement departments'],
    longDescription: [
      'The Kenyan market has unfortunately seen an influx of counterfeit solar equipment, re-labeled fake inverters, and sub-standard batteries that fail after only a few months. Synowatt guarantees 100% authenticity on every piece of hardware we supply.',
      'We are authorized stockists and installers of globally recognized Tier-1 brands including Deye, Growatt, Victron Energy, Felicity Solar, Jinko Solar, JA Solar, and Canadian Solar. Every item comes with original serial numbers and official manufacturer warranty coverage.',
      'Whether you are an electrical contractor sourcing equipment for a client project, or a property owner seeking replacement components, our engineers provide pre-purchase compatibility guidance so every part works harmoniously.'
    ],
    features: [
      {
        title: 'Direct Manufacturer Warranties',
        description: 'Genuine warranty certificates supported directly by manufacturer representatives in Kenya.'
      },
      {
        title: 'Complete Balance of System (BOS)',
        description: 'From DC surge protectors and PV cables to aluminium mounting brackets and disconnect switches.'
      },
      {
        title: 'Pre-Delivery Testing & Verification',
        description: 'All inverters and battery units undergo factory diagnostics before dispatch to your site.'
      },
      {
        title: 'Nationwide Delivery Services',
        description: 'Reliable, insured delivery to your doorstep across all 47 counties in Kenya.'
      }
    ],
    faqs: [
      {
        question: 'How can I tell if a solar panel or inverter in Kenya is genuine?',
        answer: 'Always verify serial numbers with the manufacturer, ensure official warranty documentation is provided, and buy only from registered, reputable solar engineering companies like Synowatt.'
      },
      {
        question: 'Do you sell equipment without installation services?',
        answer: 'Yes, we supply hardware to electrical contractors, certified technicians, and clients who have their own installation personnel.'
      },
      {
        question: 'Do you deliver solar equipment outside Nairobi?',
        answer: 'Yes, we arrange secure, insured transportation to Kisumu, Mombasa, Nakuru, Eldoret, Nanyuki, and all other towns throughout Kenya.'
      }
    ],
    relatedServices: ['solar-installation', 'hybrid-solar-systems', 'lithium-battery-storage']
  }
];