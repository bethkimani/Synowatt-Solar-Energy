import { images } from './images';
import type { Project } from '../types/content';

// Representative images — replace with Synowatt project photos. Add `location` when available.
export const projects: Project[] = [
{
  slug: 'family-home-rooftop',
  title: 'Family home rooftop system',
  category: 'Residential',
  description: 'Hybrid solar with lithium storage for reliable day-and-night home power.',
  image: images.homeRoof
},
{
  slug: 'commercial-rooftop-array',
  title: 'Commercial rooftop array',
  category: 'Commercial',
  description: 'Large rooftop installation to offset daytime business energy costs.',
  image: images.commercialRoof
},
{
  slug: 'school-solar-installation',
  title: 'School solar installation',
  category: 'Institutional',
  description: 'Dependable power for classrooms, lighting and learning equipment.',
  image: images.school
},
{
  slug: 'estate-townhouse-hybrid',
  title: 'Estate townhouse hybrid system',
  category: 'Residential',
  description: 'Compact rooftop system with battery backup for a gated-estate home.',
  image: images.townhouse
},
{
  slug: 'office-warehouse-ground-mount',
  title: 'Office & warehouse ground-mount',
  category: 'Commercial',
  description: 'Ground-mounted array supporting office and storage operations.',
  image: images.groundMount
},
{
  slug: 'health-centre-backup',
  title: 'Health centre backup power',
  category: 'Institutional',
  description: 'Solar and storage keeping essential services running through outages.',
  image: images.healthCentre
}];