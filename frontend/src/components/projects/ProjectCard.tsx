import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import type { Project } from '../../types/content';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects?project=${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_1px_2px_rgba(34,34,34,0.06)] ring-1 ring-ink/[0.07] transition-[box-shadow,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(34,34,34,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
      
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.06]" />
        
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-200 group-hover:bg-ink/30" />
        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-deep shadow-sm">
          {project.category}
        </span>
        <span className="absolute bottom-4 right-4 inline-flex translate-y-2 items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-md transition-[opacity,transform] duration-200 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          View project
          <ArrowUpRightIcon className="h-4 w-4" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-ink">{project.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{project.description}</p>
        <p className="mt-auto flex items-center gap-1.5 pt-4 text-sm text-ink/55">
          <MapPinIcon className="h-4 w-4 text-accent" aria-hidden />
          {project.location ?? 'Location to be added'}
        </p>
      </div>
    </Link>);

}