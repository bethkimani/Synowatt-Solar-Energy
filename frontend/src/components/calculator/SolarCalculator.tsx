'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BatteryChargingIcon,
  CalculatorIcon,
  CheckCircle2Icon,
  ChevronDownIcon,
  MinusIcon,
  PlusIcon,
  MessageCircleIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  SunIcon,
  TrendingUpIcon,
  ZapIcon,
} from 'lucide-react';
import { company } from '@/data/company';
import { buttonClasses } from '@/utils/button';
import { quoteHref } from '@/utils/quote';

interface ApplianceItem {
  id: string;
  name: string;
  watts: number;
  defaultHours: number;
  category: string;
}

const APPLIANCES: ApplianceItem[] = [
  { id: 'lights', name: 'LED Lights (10 bulbs)', watts: 90, defaultHours: 6, category: 'Lighting' },
  { id: 'fridge', name: 'Refrigerator / Fridge', watts: 180, defaultHours: 12, category: 'Cooling' },
  { id: 'freezer', name: 'Deep Freezer', watts: 250, defaultHours: 10, category: 'Cooling' },
  { id: 'tv', name: 'Smart TV & Soundbar', watts: 130, defaultHours: 5, category: 'Entertainment' },
  { id: 'wifi', name: 'Wi-Fi Router & Fibre', watts: 20, defaultHours: 24, category: 'Connectivity' },
  { id: 'laptops', name: 'Work Laptops & Monitors (2x)', watts: 150, defaultHours: 8, category: 'Work' },
  { id: 'cctv_fence', name: 'CCTV & Electric Fence', watts: 80, defaultHours: 24, category: 'Security' },
  { id: 'booster_pump', name: 'Water Booster Pump (0.5HP)', watts: 375, defaultHours: 2, category: 'Pumps' },
  { id: 'borehole_pump', name: 'Submersible Borehole Pump (1HP)', watts: 750, defaultHours: 3, category: 'Pumps' },
  { id: 'washing_machine', name: 'Washing Machine', watts: 500, defaultHours: 1.5, category: 'Appliances' },
  { id: 'microwave', name: 'Microwave Oven', watts: 1000, defaultHours: 0.5, category: 'Kitchen' },
];

const PRESET_TIERS = [
  {
    amount: 5000,
    label: 'KSh 5,000 / mo',
    desc: 'Small 2–3 Bed Home',
    badge: 'Basic',
  },
  {
    amount: 15000,
    label: 'KSh 15,000 / mo',
    desc: '4-Bed Family Home',
    badge: 'Most Popular',
  },
  {
    amount: 30000,
    label: 'KSh 30,000 / mo',
    desc: 'Home + Water Pump',
    badge: 'High Demand',
  },
  {
    amount: 60000,
    label: 'KSh 60,000 / mo',
    desc: 'Estate Villa / Office',
    badge: 'Executive',
  },
  {
    amount: 100000,
    label: 'KSh 100,000+ / mo',
    desc: 'Commercial / Farm',
    badge: 'Commercial',
  },
];

export function SolarCalculator() {
  const [mode, setMode] = useState<'bill' | 'appliances'>('bill');
  const [monthlyBill, setMonthlyBill] = useState<number>(15000);
  const [selectedAppliances, setSelectedAppliances] = useState<Record<string, { count: number; hours: number }>>({
    lights: { count: 1, hours: 6 },
    fridge: { count: 1, hours: 12 },
    tv: { count: 1, hours: 5 },
    wifi: { count: 1, hours: 24 },
    cctv_fence: { count: 1, hours: 24 },
    booster_pump: { count: 1, hours: 2 },
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Benchmarks for Kenyan conditions
  const MIN_BILL = 3000;
  const MAX_BILL = 120000;
  const sliderPercent = Math.min(
    100,
    Math.max(0, ((monthlyBill - MIN_BILL) / (MAX_BILL - MIN_BILL)) * 100)
  );

  let dailyKwh = 0;
  let peakSurgeWatts = 0;

  if (mode === 'bill') {
    dailyKwh = Math.max(1, +(monthlyBill / 32 / 30).toFixed(1));
    peakSurgeWatts = Math.round(dailyKwh * 350);
  } else {
    let totalWattHours = 0;
    let instantaneousWatts = 0;

    Object.entries(selectedAppliances).forEach(([id, config]) => {
      if (config.count > 0) {
        const item = APPLIANCES.find((a) => a.id === id);
        if (item) {
          totalWattHours += item.watts * config.count * config.hours;
          instantaneousWatts += item.watts * config.count;
        }
      }
    });

    dailyKwh = Math.max(1, +(totalWattHours / 1000).toFixed(1));
    peakSurgeWatts = Math.round(instantaneousWatts * 1.25);
  }

  // Recommended PV array in kWp
  const requiredKwp = +(dailyKwh / (5.2 * 0.8)).toFixed(2);
  const panelCount = Math.max(4, Math.ceil((requiredKwp * 1000) / 550));
  const actualKwp = +((panelCount * 550) / 1000).toFixed(2);

  // Recommended Inverter Selection
  let recommendedInverter = '3.2KVA Pure Sine Hybrid';
  let recommendedInverterSlug = '3-2kva-hybrid';
  if (dailyKwh > 20 || peakSurgeWatts > 4800) {
    recommendedInverter = '10KVA Commercial / Villa Hybrid';
    recommendedInverterSlug = '10kva-hybrid';
  } else if (dailyKwh > 8 || peakSurgeWatts > 2800) {
    recommendedInverter = '5KVA Pure Sine Wave Hybrid';
    recommendedInverterSlug = '5kva-hybrid';
  }

  // Recommended Battery Storage (LiFePO4)
  const eveningKwh = +(dailyKwh * 0.6).toFixed(1);
  const requiredBatteryKwh = +(eveningKwh / 0.85).toFixed(1);
  let recommendedBattery = '5.12kWh LiFePO4 Lithium (100Ah 51.2V)';
  if (requiredBatteryKwh <= 3.0) {
    recommendedBattery = '2.56kWh LiFePO4 Lithium (100Ah 25.6V)';
  } else if (requiredBatteryKwh > 10.0) {
    recommendedBattery = '15.36kWh LiFePO4 Lithium Bank (3x 5.12kWh)';
  } else if (requiredBatteryKwh > 5.5) {
    recommendedBattery = '10.24kWh LiFePO4 Lithium Bank (2x 5.12kWh)';
  }

  // Financial Savings
  const estimatedMonthlyBillKsh = mode === 'bill' ? monthlyBill : Math.round(dailyKwh * 30 * 32);
  const estimatedMonthlySavingsKsh = Math.round(estimatedMonthlyBillKsh * 0.85);
  const estimatedAnnualSavingsKsh = estimatedMonthlySavingsKsh * 12;

  // WhatsApp Pre-fill URL
  const whatsappMessage = encodeURIComponent(
    `Hello Synowatt Power & Solar, I used your Solar Sizing Calculator:\n` +
      `- Mode: ${mode === 'bill' ? `Monthly Bill of KSh ${monthlyBill.toLocaleString()}` : 'Appliance Sizing'}\n` +
      `- Estimated Daily Usage: ${dailyKwh} kWh/day\n` +
      `- Recommended System: ${recommendedInverter}\n` +
      `- Panels: ${panelCount}x 550W Tier-1 (${actualKwp} kWp)\n` +
      `- Battery Storage: ${recommendedBattery}\n` +
      `- Estimated Monthly Savings: KSh ${estimatedMonthlySavingsKsh.toLocaleString()}\n\n` +
      `Please provide an official quote and site survey assessment for my property.`
  );
  const whatsappHref = `https://wa.me/254799188830?text=${whatsappMessage}`;

  const toggleAppliance = (id: string) => {
    setSelectedAppliances((prev) => {
      const current = prev[id];
      if (current && current.count > 0) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      const item = APPLIANCES.find((a) => a.id === id);
      return {
        ...prev,
        [id]: { count: 1, hours: item?.defaultHours ?? 4 },
      };
    });
  };

  const updateHours = (id: string, hours: number) => {
    setSelectedAppliances((prev) => ({
      ...prev,
      [id]: { ...prev[id], hours: Math.max(0.5, Math.min(24, hours)) },
    }));
  };

  const faqs = [
    {
      q: 'How accurate is this solar sizing calculator for Kenya?',
      a: 'The calculation uses real-world Kenyan data: an average of 5.2 Peak Sun Hours (PSH) per day, the official EPRA blended domestic tariff (~KSh 32/kWh), and standard 80% system performance ratios accounting for temperature derating and inverter efficiency. While excellent for sizing your budget and hardware, our EPRA-certified engineers always perform an on-site load audit and roof azimuth inspection before commissioning.',
    },
    {
      q: 'Can a 5kVA hybrid solar system run my refrigerator, pump, and lights?',
      a: 'Yes. A 5kVA pure sine wave inverter can handle continuous loads up to 4,800–5,000 Watts and short surge loads up to 10,000 Watts. It easily operates an energy-efficient refrigerator, deep freezer, LED lighting, entertainment, and a 0.5HP to 1.0HP water booster pump without tripping.',
    },
    {
      q: 'Why do you size lithium batteries instead of lead-acid or gel?',
      a: 'LiFePO4 (Lithium Iron Phosphate) batteries offer 6,000+ cycles at 85%-90% depth of discharge, lasting 10 to 15 years with zero maintenance. Traditional gel or lead-acid batteries only offer 1,200–1,500 cycles at 50% depth of discharge and often fail within 2 to 3 years under Kenya’s frequent grid interruptions.',
    },
    {
      q: 'How long until my solar installation pays for itself in Kenya?',
      a: 'Most residential and commercial solar installations in Nairobi and surrounding counties achieve full financial payback within 3 to 4 years. With solar panels guaranteed for 25 years and lithium batteries for 10 years, the remaining 15–20 years produce virtually free electricity.',
    },
  ];

  return (
    <div className="bg-sand/30 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Ribbon */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-light/35 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark">
            <CalculatorIcon className="h-4 w-4" />
            Kenya Solar Sizing &amp; Savings Tool
          </div>
          <h1 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-4xl lg:text-5xl">
            Solar Sizing &amp; Savings Calculator
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink/75 sm:text-lg">
            Choose your monthly electricity bill or click your appliances to see the exact solar system capacity,
            panel count, and battery size suited for your property.
          </p>

          {/* Mode Selector Tabs */}
          <div className="mt-7 flex flex-col sm:inline-flex sm:flex-row w-full max-w-md sm:w-auto rounded-2xl bg-white p-1.5 shadow-sm ring-1 ring-ink/10 mx-auto">
            <button
              type="button"
              onClick={() => setMode('bill')}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                mode === 'bill'
                  ? 'bg-brand text-brand-dark shadow-sm'
                  : 'text-ink/65 hover:text-ink'
              }`}
            >
              <ZapIcon className="h-4 w-4 shrink-0" />
              1. By Monthly KPLC Bill
            </button>
            <button
              type="button"
              onClick={() => setMode('appliances')}
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                mode === 'appliances'
                  ? 'bg-brand text-brand-dark shadow-sm'
                  : 'text-ink/65 hover:text-ink'
              }`}
            >
              <SunIcon className="h-4 w-4 shrink-0" />
              2. By Appliances
            </button>
          </div>
        </div>

        {/* Main Grid: Calculator Inputs vs Real-time Output */}
        <div className="mt-10 sm:mt-12 grid gap-8 lg:grid-cols-12 lg:items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="rounded-3xl border border-ink/10 bg-white p-5 sm:p-8 shadow-sm lg:col-span-7">
            {mode === 'bill' ? (
              <div>
                {/* Step indicator */}
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-dark">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-light/40 text-[11px]">1</span>
                  Select Your Average Monthly KPLC Bill
                </div>

                {/* Direct Number Input + Stepper */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-sm sm:text-base font-bold text-ink/40">
                      KSh
                    </span>
                    <input
                      type="number"
                      min={MIN_BILL}
                      max={200000}
                      step={1000}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Math.max(1000, Number(e.target.value)))}
                      className="w-full rounded-2xl border-2 border-brand/40 bg-sand/20 py-3 pl-12 pr-16 sm:py-3.5 sm:pl-14 sm:pr-20 font-mono text-xl sm:text-2xl font-black text-brand-dark focus:border-brand-dark focus:bg-white focus:outline-none"
                    />
                    <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[11px] sm:text-xs font-semibold text-ink/45">
                      / month
                    </span>
                  </div>

                  {/* Stepper Buttons for quick adjustment */}
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setMonthlyBill((prev) => Math.max(MIN_BILL, prev - 2500))}
                      className="flex-1 sm:flex-none inline-flex h-11 sm:h-12 items-center justify-center gap-1 rounded-xl border border-ink/15 bg-white px-3 text-xs font-bold text-ink transition-colors hover:bg-sand/60 active:scale-95"
                      title="Decrease by KSh 2,500"
                    >
                      <MinusIcon className="h-3.5 w-3.5" />
                      2.5k
                    </button>
                    <button
                      type="button"
                      onClick={() => setMonthlyBill((prev) => Math.min(200000, prev + 2500))}
                      className="flex-1 sm:flex-none inline-flex h-11 sm:h-12 items-center justify-center gap-1 rounded-xl border border-ink/15 bg-white px-3 text-xs font-bold text-ink transition-colors hover:bg-sand/60 active:scale-95"
                      title="Increase by KSh 2,500"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                      2.5k
                    </button>
                  </div>
                </div>

                {/* Visible Slider Bar */}
                <div className="mt-8 rounded-2xl border border-ink/[0.08] bg-sand/20 p-5">
                  <div className="flex items-center justify-between text-xs font-bold text-ink/70">
                    <span>Drag slider to adjust:</span>
                    <span className="font-mono text-brand-dark font-extrabold text-sm">
                      KSh {monthlyBill.toLocaleString()}
                    </span>
                  </div>

                  <div className="mt-3">
                    <input
                      id="kplc-bill-input"
                      type="range"
                      min={MIN_BILL}
                      max={MAX_BILL}
                      step={1000}
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(Number(e.target.value))}
                      style={{
                        background: `linear-gradient(to right, #00782A 0%, #00782A ${sliderPercent}%, #CBD5E1 ${sliderPercent}%, #CBD5E1 100%)`,
                      }}
                      className="synowatt-slider"
                      aria-label="Monthly electricity bill slider"
                    />
                    <div className="mt-2.5 flex justify-between text-[11px] font-semibold text-ink/50">
                      <span>KSh 3,000 (Min)</span>
                      <span>KSh 30,000</span>
                      <span>KSh 60,000</span>
                      <span>KSh 120,000+ (Max)</span>
                    </div>
                  </div>
                </div>

                {/* Clickable Quick Choice Cards */}
                <div className="mt-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
                    Or Click A Typical Kenyan Property Profile:
                  </p>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {PRESET_TIERS.map((tier) => {
                      const isSelected = monthlyBill === tier.amount;
                      return (
                        <button
                          key={tier.amount}
                          type="button"
                          onClick={() => setMonthlyBill(tier.amount)}
                          className={`flex items-center justify-between rounded-2xl border-2 p-3.5 text-left transition-all ${
                            isSelected
                              ? 'border-brand-dark bg-brand-light/15 shadow-sm'
                              : 'border-ink/10 bg-white hover:border-ink/25 hover:bg-sand/30'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-sm font-extrabold text-ink">
                                {tier.label}
                              </span>
                              <span
                                className={`rounded-md px-1.5 py-0.5 text-[10px] font-bold ${
                                  isSelected
                                    ? 'bg-brand text-brand-dark'
                                    : 'bg-sand text-ink/60'
                                }`}
                              >
                                {tier.badge}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-ink/65">{tier.desc}</p>
                          </div>
                          <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                              isSelected
                                ? 'border-brand-dark bg-brand-dark text-white'
                                : 'border-ink/20 bg-white'
                            }`}
                          >
                            {isSelected && <CheckCircle2Icon className="h-3.5 w-3.5" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Sizing Context Badge */}
                <div className="mt-8 rounded-2xl bg-brand-tint/60 p-4 text-xs leading-relaxed text-ink/75 border border-brand/20">
                  <span className="font-bold text-brand-dark">How We Size This:</span> At Kenya’s current average
                  blended tariff (~KSh 32/kWh), a KSh {monthlyBill.toLocaleString()} monthly bill represents{' '}
                  <strong>{dailyKwh} kWh of daily electricity consumption</strong>. The recommended setup on the right
                  covers this load with battery backup for power cuts.
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">
                      Select Your Key Appliances
                    </span>
                    <p className="text-xs text-ink/60 mt-0.5">
                      Check the devices you want to keep running during daytime and power outages:
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedAppliances({})}
                    className="inline-flex items-center gap-1 rounded-xl border border-ink/15 bg-white px-2.5 py-1 text-xs font-semibold text-ink/60 hover:text-ink"
                  >
                    <RotateCcwIcon className="h-3 w-3" />
                    Reset
                  </button>
                </div>

                {/* Appliance Checklist */}
                <div className="mt-5 space-y-2.5">
                  {APPLIANCES.map((app) => {
                    const isSelected = Boolean(selectedAppliances[app.id]);
                    const currentHours = selectedAppliances[app.id]?.hours ?? app.defaultHours;

                    return (
                      <div
                        key={app.id}
                        className={`flex flex-col gap-3 rounded-2xl border p-3 transition-all sm:flex-row sm:items-center sm:justify-between ${
                          isSelected
                            ? 'border-brand-dark/50 bg-brand-light/10 shadow-xs'
                            : 'border-ink/10 bg-white hover:border-ink/25'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleAppliance(app.id)}
                          className="flex flex-1 items-center gap-3 text-left"
                        >
                          <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all ${
                              isSelected
                                ? 'border-brand-dark bg-brand-dark text-white'
                                : 'border-ink/20 bg-white'
                            }`}
                          >
                            {isSelected && <CheckCircle2Icon className="h-4 w-4" />}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-ink">{app.name}</span>
                            <span className="ml-2 text-xs text-ink/45">({app.watts}W)</span>
                          </div>
                        </button>

                        {isSelected && (
                          <div className="flex items-center gap-2 self-end sm:self-auto">
                            <span className="text-xs font-medium text-ink/60">Hours/day:</span>
                            <input
                              type="number"
                              min="0.5"
                              max="24"
                              step="0.5"
                              value={currentHours}
                              onChange={(e) => updateHours(app.id, Number(e.target.value))}
                              className="h-8 w-16 rounded-lg border border-ink/20 bg-white px-2 text-center text-xs font-bold text-ink focus:border-brand-dark focus:outline-none"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Real-Time Sizing Recommendation Card */}
          <div className="static lg:sticky lg:top-28 rounded-3xl border border-brand-dark/20 bg-brand-dark p-6 text-white shadow-xl sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent">Recommended System</span>
                <h3 className="font-display text-xl font-extrabold">{recommendedInverter}</h3>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-brand">
                <SunIcon className="h-6 w-6" />
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-white/70">Estimated Daily Demand</span>
                <span className="font-mono font-bold text-white">{dailyKwh} kWh / day</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div className="flex items-center gap-2">
                  <SunIcon className="h-4 w-4 text-brand" />
                  <span className="text-white/70">Solar PV Array</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-white">{actualKwp} kWp</span>
                  <p className="text-[11px] text-white/55">({panelCount}x 550W Tier-1 Panels)</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div className="flex items-center gap-2">
                  <BatteryChargingIcon className="h-4 w-4 text-accent" />
                  <span className="text-white/70">Lithium Battery</span>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-white">{recommendedBattery.split(' ')[0]}</span>
                  <p className="text-[11px] text-white/55">LiFePO4 Storage</p>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="h-4 w-4 text-gold" />
                  <span className="text-white/70">Est. Monthly Savings</span>
                </div>
                <span className="font-mono text-base font-extrabold text-accent">
                  ~KSh {estimatedMonthlySavingsKsh.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Annual Payback callout */}
            <div className="mt-6 rounded-2xl bg-white/10 p-4 text-center">
              <p className="text-xs uppercase tracking-wider text-white/70">Estimated Annual Power Savings</p>
              <p className="mt-1 font-mono text-2xl font-extrabold text-white">
                KSh {estimatedAnnualSavingsKsh.toLocaleString()} / yr
              </p>
              <p className="mt-1 text-[11px] text-white/60">Estimated payback period: 3.2 to 3.8 years</p>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className={`${buttonClasses('primary', 'lg')} w-full justify-center`}
              >
                <MessageCircleIcon className="h-5 w-5" />
                Send Sizing on WhatsApp
              </a>

              <Link
                href={quoteHref({
                  service: 'hybrid-solar-systems',
                  solution: recommendedInverterSlug,
                  property: 'Residential',
                })}
                className={`${buttonClasses('white', 'lg')} w-full justify-center`}
              >
                Request Free Site Survey
              </Link>

              <Link
                href={`/solutions/${recommendedInverterSlug}`}
                className="mt-2 text-center text-xs font-semibold text-brand underline-offset-4 hover:underline"
              >
                View full specifications for {recommendedInverter} &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Engineering Standards & Kenya Irradiance Context */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light/30 text-brand-dark">
              <SunIcon className="h-6 w-6" />
            </div>
            <h4 className="mt-4 font-display text-lg font-bold text-ink">5.0–5.5 Peak Sun Hours</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Kenya sits on the equator, providing consistent high solar irradiance throughout the year. We size
              arrays with realistic 80% balance-of-system factors to protect your capacity during overcast seasons.
            </p>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light/30 text-brand-dark">
              <ShieldCheckIcon className="h-6 w-6" />
            </div>
            <h4 className="mt-4 font-display text-lg font-bold text-ink">EPRA Electrical Compliance</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              All inverters, Type-2 surge protection devices, and AC/DC isolation switchgear meet Energy and Petroleum
              Regulatory Authority (EPRA) class standards for domestic and commercial safety.
            </p>
          </div>

          <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-xs">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-light/30 text-brand-dark">
              <BatteryChargingIcon className="h-6 w-6" />
            </div>
            <h4 className="mt-4 font-display text-lg font-bold text-ink">6,000-Cycle LiFePO4 Chemistry</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              We exclusively deploy Tier-1 Lithium Iron Phosphate batteries that can discharge to 90% DoD daily for 10–15
              years without degrading like old tubular lead-acid batteries.
            </p>
          </div>
        </div>

        {/* Solar Calculator FAQ Accordion */}
        <div className="mx-auto mt-16 max-w-3xl">
          <h3 className="text-center font-display text-2xl font-extrabold text-ink sm:text-3xl">
            Frequently Asked Sizing Questions
          </h3>
          <p className="mt-2 text-center text-sm text-ink/60">
            Clear engineering answers to common solar system sizing questions in Kenya.
          </p>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div key={faq.q} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-5 text-left font-display text-base font-bold text-ink hover:text-brand-dark"
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon
                      className={`h-5 w-5 shrink-0 text-ink/40 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-brand-dark' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-ink/5 bg-sand/15 px-5 py-4 text-sm leading-relaxed text-ink/75">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
