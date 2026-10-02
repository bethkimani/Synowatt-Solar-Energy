import { images } from './images';
import { blogAuthor } from './blogCategories';
import type { BlogPost } from '../types/content';

// Add, edit or remove articles here — the blog, article pages, search and filters update automatically.
export const blogPosts: BlogPost[] = [
{
  slug: 'how-hybrid-solar-systems-work',
  title: 'How Hybrid Solar Systems Work',
  category: 'Solar Energy',
  excerpt: 'Solar panels, batteries and the grid working together — and what that means for your power during outages.',
  coverImage: images.inverterBattery,
  coverAlt: 'Wall-mounted hybrid inverter and lithium battery storage unit',
  author: blogAuthor.name,
  publishedAt: '2026-09-22',
  seoTitle: 'How Hybrid Solar Systems Work — A Simple Guide for Kenyan Homes',
  metaDescription: 'Learn how hybrid solar systems combine solar panels, lithium batteries and grid power, and what happens during the day, at night and during outages.',
  featured: true,
  tags: ['hybrid', 'inverter', 'battery', 'outages', 'grid'],
  intro: 'A hybrid solar system combines solar panels, battery storage and a grid connection, all managed by a single hybrid inverter. It is one of the most popular system types for Kenyan homes and businesses because it can help reduce grid consumption and provide backup power. Here is how the pieces work together.',
  sections: [
  {
    id: 'components',
    heading: 'The main components',
    blocks: [
    { type: 'paragraph', text: 'Every hybrid system is built around four parts. Understanding what each one does makes it much easier to compare quotations.' },
    { type: 'list', items: [
      'Solar panels convert sunlight into direct current (DC) electricity.',
      'The hybrid inverter converts DC into the alternating current (AC) your appliances use, and decides whether energy should power loads, charge the battery or come from the grid.',
      'The battery stores surplus solar energy for use later.',
      'The grid connection acts as an additional source when solar and battery energy are not enough.']
    }]

  },
  {
    id: 'daytime',
    heading: 'What happens during the day',
    blocks: [
    { type: 'paragraph', text: 'When the sun is shining, your panels supply your appliances first. Any surplus can be used to charge the battery. If your appliances need more power than the panels are producing, the inverter can top up from the battery or the grid, depending on how it is configured.' },
    { type: 'image', src: images.homeRoof, alt: 'Kenyan home with rooftop solar panels in daylight', caption: 'During the day, panels power the home and charge the battery.' }]

  },
  {
    id: 'night-and-outages',
    heading: 'At night and during outages',
    blocks: [
    { type: 'paragraph', text: 'When solar production drops in the evening, the battery supplies the energy it stored during the day. If the battery reaches its set minimum level, the inverter can switch to grid power automatically so your lights stay on.' },
    { type: 'paragraph', text: 'If the grid goes down, a correctly configured hybrid system continues supplying the connected circuits from the battery, and from the panels during daylight.' },
    { type: 'callout', title: 'Good to know', text: 'Backup behaviour depends on how the system is wired and configured. Ask your installer to confirm exactly which circuits and appliances will stay on during an outage.' }]

  },
  {
    id: 'essential-loads',
    heading: 'Essential loads and priority settings',
    blocks: [
    { type: 'paragraph', text: 'Many hybrid systems are wired so that only selected “essential” circuits are backed up. This keeps battery size practical and stops high-power appliances from draining the battery quickly.' },
    { type: 'list', items: ['Lighting and sockets for phones and laptops', 'Wi-Fi router and TV', 'Refrigerator', 'CCTV and electric fence', 'Water pump (where the inverter can handle its start-up surge)'] }]

  },
  {
    id: 'is-it-right-for-you',
    heading: 'Is a hybrid system right for you?',
    blocks: [
    { type: 'paragraph', text: 'Hybrid systems tend to suit properties that experience power outages, use a significant amount of energy in the evening, or want to rely less on grid electricity.' },
    { type: 'subheading', text: 'Things to weigh up' },
    { type: 'list', items: ['The battery adds to the upfront cost compared with a system without storage.', 'Battery capacity limits how long backup lasts.', 'Correct sizing matters — an undersized system will disappoint, an oversized one wastes money.'] },
    { type: 'paragraph', text: 'An energy assessment is the best way to decide whether a hybrid system suits your property, and what size it should be.' }]

  }]

},
{
  slug: 'how-much-solar-power-does-your-home-need',
  title: 'How Much Solar Power Does Your Home Need?',
  category: 'Solar Installation',
  excerpt: 'A step-by-step way to think about appliances, daily energy use, battery storage and system size.',
  coverImage: images.townhouse,
  coverAlt: 'Townhouse with a compact rooftop solar system',
  author: blogAuthor.name,
  publishedAt: '2026-09-08',
  seoTitle: 'How to Estimate the Solar Power Your Home Needs',
  metaDescription: 'A practical, step-by-step guide to estimating your home’s solar needs — appliances, daily kWh, inverter size, battery storage and panels.',
  tags: ['sizing', 'kWh', 'inverter', 'appliances', 'home'],
  intro: 'There is no single “right” size for a home solar system. The right system depends on which appliances you want to power, how long you use them and when. These five steps will help you build a realistic picture before speaking to an installer.',
  sections: [
  {
    id: 'list-appliances',
    heading: 'Step 1: List your appliances',
    blocks: [
    { type: 'paragraph', text: 'Write down every appliance you want the solar system to run. Each one has a power rating in watts (W), usually printed on a label or in the manual.' },
    { type: 'list', items: ['Lighting (count the bulbs)', 'TV, decoder and Wi-Fi router', 'Refrigerator or freezer', 'Water pump', 'Laptops and phone chargers', 'Iron, microwave or kettle (high-power — note these separately)'] }]

  },
  {
    id: 'daily-energy',
    heading: 'Step 2: Estimate your daily energy use',
    blocks: [
    { type: 'paragraph', text: 'Energy is power multiplied by time. Multiply each appliance’s wattage by the hours you use it each day to get watt-hours (Wh). For example, a 100W appliance used for 5 hours uses 500Wh, or 0.5 kilowatt-hours (kWh).' },
    { type: 'paragraph', text: 'Add everything up to get your approximate daily energy use. Remember that fridges cycle on and off, so their real consumption is lower than wattage × 24 hours.' },
    { type: 'callout', title: 'Illustration only', text: 'These calculations give a useful starting point, but real-world consumption varies. A site assessment will refine the numbers.' }]

  },
  {
    id: 'simultaneous-loads',
    heading: 'Step 3: Identify what runs at the same time',
    blocks: [
    { type: 'paragraph', text: 'Inverter capacity (measured in KVA or kW) limits how much power can be drawn at once. Add up the appliances likely to run together to estimate your peak load.' },
    { type: 'paragraph', text: 'Appliances with motors — pumps, fridges and washing machines — draw a short surge of power when they start. The inverter must be able to handle these surges.' }]

  },
  {
    id: 'backup',
    heading: 'Step 4: Decide how much backup you need',
    blocks: [
    { type: 'paragraph', text: 'Battery capacity, measured in kWh, determines how long your appliances can run without sunshine. Think about your evening usage and how long typical outages last in your area.' },
    { type: 'paragraph', text: 'Not all of a battery’s rated capacity is usable — manufacturers specify a recommended depth of discharge to protect battery life.' }]

  },
  {
    id: 'panels',
    heading: 'Step 5: Size the solar panels',
    blocks: [
    { type: 'paragraph', text: 'Panels need to produce enough energy to run your daytime loads and recharge the battery. Output depends on sunshine hours, panel orientation, roof angle and shading, so the same system can perform differently on different properties.' }]

  },
  {
    id: 'assessment',
    heading: 'Why a professional assessment matters',
    blocks: [
    { type: 'paragraph', text: 'Your own estimate is valuable preparation. A professional assessment then checks your appliance list, roof space and shading, and recommends an inverter, battery and panel combination that fits your needs and budget.' }]

  }]

},
{
  slug: 'understanding-lithium-solar-batteries',
  title: 'Understanding Lithium Solar Batteries',
  category: 'Solar Batteries',
  excerpt: 'What capacity ratings mean, why lithium has become popular for solar storage, and how to look after your battery.',
  coverImage: images.equipment,
  coverAlt: 'Hybrid inverter, lithium battery cabinet and solar panels in a showroom',
  author: blogAuthor.name,
  publishedAt: '2026-08-25',
  seoTitle: 'Understanding Lithium Solar Batteries — Capacity, Chemistry and Care',
  metaDescription: 'A clear guide to lithium solar batteries: kWh capacity, usable capacity, LiFePO4 chemistry, battery management systems and how they compare with lead-acid.',
  tags: ['lithium', 'LiFePO4', 'battery', 'storage', 'kWh'],
  intro: 'Batteries let you keep using solar energy after sunset and during outages. Lithium batteries have become a popular choice for solar storage. This guide explains the key terms and what to look for.',
  sections: [
  {
    id: 'what-it-does',
    heading: 'What a solar battery does',
    blocks: [
    { type: 'paragraph', text: 'A solar battery stores surplus energy produced by your panels so it can be used later — in the evening, on cloudy days or when the grid is down. The inverter manages when the battery charges and discharges.' }]

  },
  {
    id: 'key-terms',
    heading: 'Key terms explained',
    blocks: [
    { type: 'list', items: [
      'Capacity (kWh): the total energy the battery can store. A 5.12kWh battery stores 5.12 kilowatt-hours.',
      'Usable capacity / depth of discharge: the share of capacity that can be used without shortening battery life.',
      'Voltage: home storage batteries commonly operate at 48V or 51.2V nominal; the battery must match the inverter.',
      'Power rating: how quickly the battery can deliver energy, which affects how many appliances it can support at once.']
    }]

  },
  {
    id: 'lifepo4',
    heading: 'LiFePO4: the common chemistry for solar storage',
    blocks: [
    { type: 'paragraph', text: 'Many solar batteries use lithium iron phosphate (LiFePO4) chemistry. It is widely used for stationary storage because of its thermal stability and long cycle life compared with many other battery chemistries.' }]

  },
  {
    id: 'vs-lead-acid',
    heading: 'Lithium vs lead-acid',
    blocks: [
    { type: 'list', items: ['Lithium batteries are generally lighter and more compact.', 'More of their stored energy can typically be used.', 'They need little routine maintenance — no topping up with water.', 'They usually cost more upfront than lead-acid batteries.'] }]

  },
  {
    id: 'bms',
    heading: 'The battery management system (BMS)',
    blocks: [
    { type: 'paragraph', text: 'Lithium batteries include a battery management system that monitors cell voltages and temperature and protects the battery from overcharging, deep discharge and overheating. Many can communicate with compatible inverters.' },
    { type: 'callout', title: 'Compatibility matters', text: 'Always confirm that the battery and inverter are designed to work together. Mismatched equipment can reduce performance or void warranties.' }]

  },
  {
    id: 'care',
    heading: 'Caring for your battery',
    blocks: [
    { type: 'list', items: ['Install it in a cool, dry, well-ventilated location out of direct sunlight.', 'Keep the area clear of clutter and flammable materials.', 'Follow the manufacturer’s guidance on operating temperatures.', 'Check inverter or app readings regularly for warnings.'] }]

  }]

},
{
  slug: 'benefits-of-solar-energy-in-kenya',
  title: 'Benefits and Limitations of Solar Energy in Kenya',
  category: 'Renewable Energy in Kenya',
  excerpt: 'Kenya’s sunshine makes solar a strong option — but it is worth understanding the limitations as well as the benefits.',
  coverImage: images.kenyaSun,
  coverAlt: 'Solar panels under bright Kenyan sunshine',
  author: blogAuthor.name,
  publishedAt: '2026-08-11',
  seoTitle: 'Benefits and Limitations of Solar Energy in Kenya',
  metaDescription: 'An honest look at the benefits and limitations of solar energy for Kenyan homes, businesses and institutions — from bills and backup to upfront cost.',
  tags: ['Kenya', 'benefits', 'renewable', 'outages', 'generators'],
  intro: 'Solar energy is increasingly common on Kenyan rooftops, from family homes to schools and businesses. Like any investment, it has clear benefits and some limitations. Understanding both helps you set realistic expectations.',
  sections: [
  {
    id: 'why-kenya',
    heading: 'Why Kenya suits solar',
    blocks: [
    { type: 'paragraph', text: 'Located on the equator, Kenya receives strong sunshine for much of the year. This makes solar a practical energy source across much of the country, though output still varies with location, season and weather.' }]

  },
  {
    id: 'benefits',
    heading: 'The benefits',
    blocks: [
    { type: 'list', items: [
      'Lower grid consumption: energy you generate and use yourself reduces how much electricity you buy.',
      'Backup during outages: systems with batteries can keep essential appliances running.',
      'Power where the grid is weak: solar can supply sites with unreliable or no grid connection.',
      'A cleaner alternative to generators: no fuel to buy, less noise and no exhaust fumes.',
      'Clean energy: solar produces electricity without direct emissions.']
    }]

  },
  {
    id: 'limitations',
    heading: 'The limitations to consider',
    blocks: [
    { type: 'list', items: [
      'Upfront cost: panels, inverters and especially batteries require initial investment.',
      'Night and cloudy weather: panels do not produce at night and produce less under heavy cloud, so storage or grid backup is needed.',
      'Space and shading: you need enough unshaded roof or ground area.',
      'Battery replacement: batteries have a finite lifespan and will eventually need replacing.',
      'Quality matters: poor equipment or installation can lead to disappointing results.']
    }]

  },
  {
    id: 'making-it-work',
    heading: 'Making solar work for you',
    blocks: [
    { type: 'paragraph', text: 'Most limitations can be managed with good design: sizing the system around your real usage, choosing quality components, and installing panels where they get the most sun. Savings and performance depend on your usage, tariffs and system, so be cautious of anyone promising fixed results.' }]

  }]

},
{
  slug: 'solar-maintenance-tips',
  title: 'Solar Maintenance Tips',
  category: 'Solar Maintenance',
  excerpt: 'Simple, safe habits that help keep your panels, inverter and battery performing well for years.',
  coverImage: images.panelCleaning,
  coverAlt: 'Technician inspecting and cleaning rooftop solar panels',
  author: blogAuthor.name,
  publishedAt: '2026-07-28',
  seoTitle: 'Solar Panel Maintenance Tips — Keep Your System Performing',
  metaDescription: 'Practical, safe solar maintenance tips: cleaning panels, monitoring performance, caring for batteries and inverters, and knowing when to call a professional.',
  tags: ['maintenance', 'cleaning', 'dust', 'inverter', 'safety'],
  intro: 'Solar systems need relatively little maintenance, but a few simple habits help them keep performing well. Here is what you can safely do yourself — and when to call a professional.',
  sections: [
  {
    id: 'why-maintenance',
    heading: 'Why maintenance matters',
    blocks: [
    { type: 'paragraph', text: 'Dust, leaves, bird droppings and loose connections can all reduce output over time. Regular checks help you spot small issues before they become bigger problems.' }]

  },
  {
    id: 'cleaning',
    heading: 'Keep panels clean',
    blocks: [
    { type: 'list', items: [
      'Clean panels when they look visibly dirty — dusty areas may need it more often.',
      'Use a soft brush or sponge with clean water.',
      'Clean early in the morning or late in the afternoon when panels are cool.',
      'Avoid harsh detergents, abrasive pads and high-pressure washers.',
      'Never walk on panels, and do not climb onto roofs that are unsafe to reach — ask a professional instead.']
    }]

  },
  {
    id: 'monitoring',
    heading: 'Monitor performance',
    blocks: [
    { type: 'paragraph', text: 'Most inverters show daily production on a screen or mobile app. Get to know what normal looks like on a sunny day so you notice if output drops unexpectedly.' }]

  },
  {
    id: 'battery-inverter',
    heading: 'Look after the battery and inverter area',
    blocks: [
    { type: 'list', items: ['Keep the area cool, dry and ventilated.', 'Keep vents clear of dust and obstructions.', 'Keep children and pets away from equipment.'] }]

  },
  {
    id: 'call-a-professional',
    heading: 'When to call a professional',
    blocks: [
    { type: 'list', items: ['Warning or fault codes on the inverter', 'A burning smell, unusual noise or heat', 'Damaged, loose or chewed cables', 'A sudden, unexplained drop in output', 'Periodic inspection of connections and protection devices'] },
    { type: 'callout', title: 'Safety first', text: 'Solar panels produce DC electricity whenever light falls on them, even if the grid is off. Never open inverters, batteries or combiner boxes yourself.' }]

  }]

},
{
  slug: 'grid-tied-vs-hybrid-solar-systems',
  title: 'Grid-Tied vs Hybrid Solar Systems',
  category: 'Solar Technology',
  excerpt: 'Understand how the two system types differ — especially during a power outage — before choosing one.',
  coverImage: images.groundMount,
  coverAlt: 'Technician inspecting a ground-mounted solar array',
  author: blogAuthor.name,
  publishedAt: '2026-07-14',
  seoTitle: 'Grid-Tied vs Hybrid Solar Systems — Which Is Right for You?',
  metaDescription: 'Compare grid-tied and hybrid solar systems: how they work, what happens during outages, costs and which properties each suits best.',
  tags: ['grid-tied', 'hybrid', 'off-grid', 'comparison', 'outages'],
  intro: 'Grid-tied and hybrid systems both use solar alongside grid electricity, but they behave very differently when the power goes off. Here is how to tell them apart.',
  sections: [
  {
    id: 'grid-tied',
    heading: 'Grid-tied systems explained',
    blocks: [
    { type: 'paragraph', text: 'A grid-tied system connects solar panels to your electrical supply through a grid-tie inverter, usually without a battery. Solar power is used first, and the grid supplies the rest.' }]

  },
  {
    id: 'outage-shutdown',
    heading: 'Why grid-tied systems switch off in an outage',
    blocks: [
    { type: 'paragraph', text: 'For safety, grid-tied inverters are designed to shut down when the grid fails. This protects technicians working on power lines. It means a standard grid-tied system typically provides no power during an outage, even when the sun is shining.' }]

  },
  {
    id: 'hybrid',
    heading: 'Hybrid systems explained',
    blocks: [
    { type: 'paragraph', text: 'A hybrid system adds a battery and a hybrid inverter. It can store solar energy for later use and keep connected circuits running during outages.' }]

  },
  {
    id: 'comparison',
    heading: 'Side-by-side comparison',
    blocks: [
    { type: 'subheading', text: 'Grid-tied' },
    { type: 'list', items: ['No backup during outages', 'No battery, so lower upfront cost', 'Best for daytime-heavy users with a reliable grid'] },
    { type: 'subheading', text: 'Hybrid' },
    { type: 'list', items: ['Backup for connected circuits during outages', 'Includes a battery, so higher upfront cost', 'Best for homes and sites needing evening power or backup'] },
    { type: 'callout', text: 'Whether surplus solar can be exported to the grid depends on current utility rules and approvals. Check before assuming you can export.' }]

  },
  {
    id: 'choosing',
    heading: 'Which should you choose?',
    blocks: [
    { type: 'paragraph', text: 'If outages are common or you use a lot of power in the evening, a hybrid system is usually the better fit. If you mainly use power during the day and have a reliable grid connection, a grid-tied system may be worth considering. An assessment will clarify the best option for your property.' }]

  }]

},
{
  slug: 'how-to-choose-solar-panels',
  title: 'How to Choose Suitable Solar Panels',
  category: 'Solar Technology',
  excerpt: 'Panel types, wattage, efficiency, datasheets and warranties — what to compare before you buy.',
  coverImage: images.panelTypes,
  coverAlt: 'Monocrystalline and bifacial solar panels mounted side by side on a rooftop rail',
  author: blogAuthor.name,
  publishedAt: '2026-06-30',
  seoTitle: 'How to Choose Solar Panels — Types, Efficiency and Warranties',
  metaDescription: 'Learn how to choose solar panels: monocrystalline vs bifacial, wattage, efficiency, datasheet specifications, certifications and warranties.',
  tags: ['panels', 'monocrystalline', 'bifacial', 'efficiency', 'warranty'],
  intro: 'Solar panels are the most visible part of your system, and quality varies widely. Knowing which specifications matter helps you compare options with confidence.',
  sections: [
  {
    id: 'panel-types',
    heading: 'Common panel types',
    blocks: [
    { type: 'list', items: [
      'Monocrystalline: made from single-crystal silicon, typically black, and the most common type for new installations.',
      'Polycrystalline: made from multi-crystal silicon, usually bluish; less common today.',
      'Bifacial: can capture light on both the front and rear surfaces. The extra gain depends on mounting height and how reflective the surface beneath is.']
    }]

  },
  {
    id: 'wattage',
    heading: 'Wattage and physical size',
    blocks: [
    { type: 'paragraph', text: 'A panel’s wattage (for example 615W or 625W) is its rated output under standard test conditions. Higher-wattage panels are usually physically larger, so roof space, access and mounting all need to be considered.' }]

  },
  {
    id: 'datasheet',
    heading: 'Datasheet specifications worth comparing',
    blocks: [
    { type: 'list', items: [
      'Maximum power (Pmax) and power tolerance',
      'Module efficiency',
      'Temperature coefficient — lower values lose less output in hot conditions',
      'Product warranty and performance (output) warranty',
      'Certifications such as IEC 61215 and IEC 61730']
    }]

  },
  {
    id: 'inverter-match',
    heading: 'Matching panels to your inverter',
    blocks: [
    { type: 'paragraph', text: 'Panels are wired in strings, and each inverter has limits on input voltage and current. Your installer will design the string layout so the panels and inverter work safely and efficiently together.' }]

  },
  {
    id: 'buying-tips',
    heading: 'Buying tips',
    blocks: [
    { type: 'list', items: ['Buy from reputable suppliers and ask for datasheets.', 'Be cautious of prices that seem far below the market.', 'Check that warranties are honoured locally.', 'Choose panels as part of a complete, properly designed system.'] }]

  }]

},
{
  slug: 'reducing-electricity-costs-with-solar',
  title: 'Reducing Electricity Costs with Solar: Start With Your Usage',
  category: 'Energy Saving Tips',
  excerpt: 'Before installing solar, evaluate how you use electricity. It leads to a better-sized system and smarter savings.',
  coverImage: images.meter,
  coverAlt: 'Homeowner checking a prepaid electricity meter with a smartphone',
  author: blogAuthor.name,
  publishedAt: '2026-06-16',
  seoTitle: 'Evaluate Your Electricity Usage Before Installing Solar',
  metaDescription: 'Practical ways to evaluate your electricity usage before going solar — reading bills and token history, appliance audits, finding big loads and cutting waste.',
  tags: ['energy saving', 'electricity bills', 'tokens', 'efficiency', 'audit'],
  intro: 'The most effective way to reduce electricity costs with solar starts before any panels go up: understanding how, when and where you use electricity. A clear picture of your usage leads to a better-sized system and avoids paying for capacity you do not need.',
  sections: [
  {
    id: 'why-usage',
    heading: 'Why start with your usage?',
    blocks: [
    { type: 'paragraph', text: 'Solar systems are sized around energy use. If you overestimate, you pay for capacity you will not use; if you underestimate, the system will struggle. Reducing waste first can also mean a smaller, more affordable system.' }]

  },
  {
    id: 'bills-and-tokens',
    heading: 'Review your bills or token history',
    blocks: [
    { type: 'paragraph', text: 'Postpaid bills show units used each month in kWh. On prepaid meters, review your token purchase history to see how many units you buy over a typical month. Look at several months to account for seasonal changes.' }]

  },
  {
    id: 'appliance-audit',
    heading: 'Do a simple appliance audit',
    blocks: [
    { type: 'list', ordered: true, items: ['Walk through your property and list every appliance.', 'Note each one’s wattage from its label.', 'Estimate daily hours of use.', 'Multiply watts by hours to get daily watt-hours.', 'Mark which appliances you need during outages.'] }]

  },
  {
    id: 'big-loads',
    heading: 'Find your biggest loads',
    blocks: [
    { type: 'paragraph', text: 'Heating appliances — electric showers, water heaters, cookers, kettles and irons — draw a lot of power. They can strongly affect inverter and battery sizing, so decide whether they need to run on solar or can stay on the grid or gas.' }]

  },
  {
    id: 'cut-waste',
    heading: 'Cut waste and shift usage',
    blocks: [
    { type: 'list', items: ['Switch to LED lighting.', 'Turn off appliances at the wall instead of leaving them on standby.', 'Replace very old fridges and freezers with efficient models when practical.', 'Run high-power tasks like laundry and ironing during sunny hours.'] },
    { type: 'callout', title: 'No fixed savings figure', text: 'How much you save depends on your usage, tariffs and system design. A good installer will explain the factors honestly rather than promise a fixed number.' }]

  }]

}];