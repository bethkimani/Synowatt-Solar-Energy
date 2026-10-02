import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from 'lucide-react';
import { CardCarousel } from '../CardCarousel';
import { ProjectCard } from '../projects/ProjectCard';
import { projects } from '../../data/projects';
import { buttonClasses } from '../../utils/button';
import { EASE_OUT } from '../../utils/motion';

export function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-projects-title" className="overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <CardCarousel
          id="featured-projects-title"
          title="Featured Installations"
          description="Solar solutions for homes, businesses and institutions."
          footer={
          <Link href="/projects" className={`${buttonClasses('outline', 'md')} group`}>
              Discover Our Projects
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          }>
          
          {projects.map((p, i) =>
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: EASE_OUT, delay: Math.min(i, 3) * 0.06 }}
            className="w-[85%] shrink-0 snap-start sm:w-[380px]">
            
              <ProjectCard project={p} />
            </motion.div>
          )}
        </CardCarousel>
      </div>
    </section>);

}