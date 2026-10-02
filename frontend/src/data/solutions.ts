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
  type: 'Hybrid Solar Solution',
  capacity: '3.2KVA',
  inverter: '3.2KVA hybrid inverter',
  battery: '5.12kWh lithium battery',
  panels: '4 × 625W bifacial solar panels',
  components: ['Hybrid inverter', 'Lithium battery', 'Bifacial solar panels', 'Mounting, cabling & protection'],
  features: [
  'Solar, battery and grid working together',
  'Backup power during outages',
  'Lithium storage for evening use',
  'Bifacial panels for flexible mounting'],

  suitableFor: ['Homes', 'Small offices', 'Shops'],
  image: images.homeRoof,
  imageAlt: 'Family home with rooftop solar panels',
  price: null
},
{
  slug: '5kva-hybrid',
  name: '5KVA Hybrid Solar Solution',
  type: 'Hybrid Solar Solution',
  capacity: '5KVA',
  inverter: '5KVA hybrid inverter',
  battery: '5.12kWh lithium battery',
  panels: '6 × 615W solar panels',
  components: ['Hybrid inverter', 'Lithium battery', 'Solar panels', 'Mounting, cabling & protection'],
  features: [
  'Higher capacity for more appliances at once',
  'Backup power during outages',
  'Lithium storage for evening use',
  'Room to grow with your energy needs'],

  suitableFor: ['Larger homes', 'Offices', 'Small businesses'],
  image: images.townhouse,
  imageAlt: 'Townhouse with a hybrid rooftop solar system',
  price: null
}];


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