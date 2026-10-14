import { images } from './images';
import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    slug: 'karen-residential-hybrid',
    title: '5KVA Hybrid Solar Installation — Karen',
    category: 'Residential',
    location: 'Karen, Nairobi',
    capacity: '5KVA Inverter + 10.24kWh LiFePO4',
    description:
      'Turnkey 5KVA hybrid solar setup for a 4-bedroom family residence in Karen. Provides 24/7 power for refrigeration, washing machine, pressure pump, security fence, and home entertainment during grid blackouts.',
    image: images.homeRoof,
    hardware: [
      '5KVA pure sine wave hybrid inverter with dual MPPT',
      '2 × 5.12kWh wall-mounted LiFePO4 lithium batteries',
      '6 × 615W Tier-1 high-yield monocrystalline panels',
      'EPRA dual-earthing & Type II AC/DC surge arrestors'
    ],
    impact: 'Reduced monthly KPLC power bills by 78% and eliminated diesel generator usage completely.',
    serviceSlug: 'hybrid-solar-systems',
    solutionSlug: '5kva-hybrid',
    completionDate: '2026'
  },
  {
    slug: 'thika-commercial-rooftop',
    title: '40kWp Rooftop Solar Grid-Tie — Thika Road',
    category: 'Commercial',
    location: 'Thika Road, Kiambu County',
    capacity: '40kWp Grid-Tied Commercial Array',
    description:
      'Engineered rooftop photovoltaic plant for a commercial packaging facility along Thika Superhighway. Offsets daytime machinery loads, cooling fans, and office IT infrastructure.',
    image: images.commercialRoof,
    hardware: [
      '40kW 3-phase commercial grid-tied inverter',
      '64 × 625W Tier-1 bifacial monocrystalline solar modules',
      'Heavy-duty anodized aluminum industrial roof racking',
      'Remote cloud energy telemetry with live yield logging'
    ],
    impact: 'Generates ~180 kWh daily, lowering commercial daytime electricity expenses by 65%.',
    serviceSlug: 'commercial-industrial',
    completionDate: '2025'
  },
  {
    slug: 'nakuru-academy-solar',
    title: '15KVA 3-Phase Educational Facility — Nakuru',
    category: 'Institutional',
    location: 'Nakuru County',
    capacity: '15KVA 3-Phase Hybrid + 15.36kWh Storage',
    description:
      'Reliable solar energy system powering science laboratories, computer learning labs, dining hall cold storage, and campus perimeter security lighting across a private academy.',
    image: images.school,
    hardware: [
      '15KVA 3-phase high-voltage hybrid inverter',
      '15.36kWh modular LiFePO4 rack battery system',
      '24 × 615W Tier-1 mono PERC solar panels',
      'Automated generator start-stop integration interface'
    ],
    impact: 'Uninterrupted power for 600+ students and zero disruptions during national examination terms.',
    serviceSlug: 'hybrid-solar-systems',
    solutionSlug: '10kva-hybrid',
    completionDate: '2025'
  },
  {
    slug: 'runda-townhouse-backup',
    title: '3.2KVA Gated Estate Solar Setup — Runda',
    category: 'Residential',
    location: 'Runda Estate, Nairobi',
    capacity: '3.2KVA Inverter + 5.12kWh LiFePO4',
    description:
      'Space-efficient hybrid solar solution installed in a gated townhouse community. Runs home Wi-Fi, CCTV, refrigerator, indoor lighting, and electronics seamlessly through power outages.',
    image: images.townhouse,
    hardware: [
      '3.2KVA smart hybrid inverter (<10ms UPS transfer)',
      '5.12kWh wall-mount lithium iron phosphate battery',
      '4 × 625W bifacial solar panels',
      'Dedicated solar distribution board with bypass switch'
    ],
    impact: 'Continuous 14-hour essential backup during extended evening blackouts with silent operation.',
    serviceSlug: 'residential-solar',
    solutionSlug: '3-2kva-hybrid',
    completionDate: '2026'
  },
  {
    slug: 'naivasha-warehouse-ground-mount',
    title: '25kWp Ground-Mounted Array — Naivasha',
    category: 'Commercial',
    location: 'Naivasha, Nakuru County',
    capacity: '25kWp Solar + 20kWh Battery Storage',
    description:
      'Ground-mounted solar photovoltaic system designed for an agricultural logistics warehouse. Powers sorting lines, office HVAC, cold room compressors, and security lighting.',
    image: images.groundMount,
    hardware: [
      '25kW hybrid commercial multi-MPPT inverter',
      '20kWh industrial LiFePO4 battery rack',
      '40 × 625W bifacial Tier-1 solar modules',
      'Hot-dip galvanized structural ground-mount frames'
    ],
    impact: 'Shields temperature-sensitive agricultural produce from spoiled inventory during grid failures.',
    serviceSlug: 'commercial-industrial',
    completionDate: '2025'
  },
  {
    slug: 'kiambu-health-centre-emergency',
    title: '10KVA Critical Healthcare Backup — Kiambu',
    category: 'Institutional',
    location: 'Kiambu County',
    capacity: '10KVA Hybrid + 15.36kWh Storage',
    description:
      'Mission-critical solar backup power system for a regional health centre. Powers maternity ward lighting, vaccine cold-chain refrigeration, sterilization autoclaves, and ultrasound equipment.',
    image: images.healthCentre,
    hardware: [
      '10KVA pure sine wave inverter with medical-grade filtering',
      '15.36kWh high-cycle LiFePO4 battery storage bank',
      '16 × 625W Tier-1 bifacial monocrystalline panels',
      'Class I+II lightning surge arrestors & deep copper earthing'
    ],
    impact: '100% uptime for life-saving clinic equipment and zero loss of temperature-sensitive vaccines.',
    serviceSlug: 'hybrid-solar-systems',
    solutionSlug: '10kva-hybrid',
    completionDate: '2026'
  },
  {
    slug: 'machakos-agricultural-pumping',
    title: '7.5kW Solar Borehole Water Pumping — Machakos',
    category: 'Commercial',
    location: 'Machakos County',
    capacity: '7.5kW Direct Solar VFD Pumping System',
    description:
      'Direct solar-powered water pumping system for a 120-metre deep borehole on an avocado and citrus farm. Delivers over 40,000 litres of irrigation water daily directly from solar energy.',
    image: images.aerial,
    hardware: [
      '7.5kW IP65 solar variable frequency drive (VFD) inverter',
      '14 × 625W Tier-1 solar panels on elevated steel frame',
      'Stainless steel submersible borehole pump (5.5 HP)',
      'Automated water tank level sensors and dry-run protection'
    ],
    impact: 'Completely eliminated expensive diesel generator pumping costs, saving over KSh 45,000 monthly.',
    serviceSlug: 'solar-water-pumping',
    completionDate: '2025'
  },
  {
    slug: 'muthaiga-luxury-villa',
    title: '10KVA Executive Villa Solar System — Muthaiga',
    category: 'Residential',
    location: 'Muthaiga, Nairobi',
    capacity: '10KVA 3-Phase + 15.36kWh LiFePO4',
    description:
      'Comprehensive whole-property hybrid solar installation for an executive multi-story residence. Easily supports multiple air conditioners, swimming pool pump, electric fence, and all domestic appliances.',
    image: images.installing,
    hardware: [
      '10KVA 3-phase hybrid inverter with generator port',
      '15.36kWh LiFePO4 rack battery system',
      '16 × 625W bifacial solar panels mounted on tile roof',
      'Smart mobile phone energy dashboard and monitoring'
    ],
    impact: 'Silent, instantaneous power backup with over 80% reduction in annual utility electricity bills.',
    serviceSlug: 'residential-solar',
    solutionSlug: '10kva-hybrid',
    completionDate: '2026'
  }
];