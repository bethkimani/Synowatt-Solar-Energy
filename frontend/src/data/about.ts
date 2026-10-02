import {
  AwardIcon,
  FileTextIcon,
  HandshakeIcon,
  HardHatIcon,
  HeadsetIcon,
  LeafIcon,
  MessageSquareIcon,
  ShieldCheckIcon,
  UsersIcon } from
'lucide-react';
import type { IconFeature } from '../types/content';

// Company copy — edit freely to match Synowatt's official wording.
export const whoWeAre: string[] = [
'Synowatt Power & Solar Ltd provides solar energy solutions that help homes, businesses and institutions reduce their dependence on conventional electricity and access reliable, renewable power.',
'We design, supply, install and maintain solar systems — from compact hybrid setups for family homes to larger systems for offices, businesses and institutions. Every system is planned around how our clients actually use energy.'];


export const mission =
'To provide homes, businesses and institutions with reliable, well-designed solar energy solutions that reduce dependence on conventional electricity.';

export const vision =
'A Kenya where clean, dependable power is within reach of every home, business and institution.';

export const values: IconFeature[] = [
{ title: 'Reliability', description: 'Systems designed and installed to deliver dependable power.', icon: ShieldCheckIcon },
{ title: 'Quality', description: 'Carefully selected components and workmanship we stand behind.', icon: AwardIcon },
{ title: 'Integrity', description: 'Honest advice and recommendations sized to real needs.', icon: HandshakeIcon },
{ title: 'Customer Focus', description: 'Clear communication from first call to long-term support.', icon: UsersIcon },
{ title: 'Sustainability', description: 'Helping more Kenyans move to clean, renewable energy.', icon: LeafIcon }];


export const commitments: IconFeature[] = [
{
  title: 'Honest, clear advice',
  description: 'We explain your options in plain language and recommend only what your property needs.',
  icon: MessageSquareIcon
},
{
  title: 'Transparent quotations',
  description: 'You’ll know what’s included in your system before any work begins.',
  icon: FileTextIcon
},
{
  title: 'Safe, tidy workmanship',
  description: 'Careful installation with respect for your property, your time and your safety.',
  icon: HardHatIcon
},
{
  title: 'Support after handover',
  description: 'We remain available for maintenance, troubleshooting and technical questions.',
  icon: HeadsetIcon
}];


export const expertise: string[] = [
'Solar system design',
'Professional installation',
'Hybrid solar solutions',
'Lithium battery storage',
'Solar maintenance',
'Energy consultation',
'Residential solutions',
'Commercial solutions',
'Institutional solutions'];