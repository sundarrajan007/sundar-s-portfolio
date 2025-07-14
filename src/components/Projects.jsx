import React, { useState } from "react";
import CardSwap from "./ui/CardSwap";
import { Code, Palette, Smartphone } from "lucide-react";
import ScrollFloat from './ScrollFloat';

const PROJECTS = [
    {
      id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects, skills, and experience with modern animations and responsive design.",
    tags: ["React", "CSS", "JavaScript", "Responsive"],
    icon: Code,
    category: "Frontend",
    },
    {
      id: 2,
    title: "Food Delivery UI/UX",
    description: "A user-friendly food delivery app UI/UX design using Figma, focusing on intuitive navigation and accessibility.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    icon: Palette,
    category: "Design",
    },
    {
      id: 3,
    title: "Restaurant Website",
    description: "A multi-page restaurant website using React with responsive design, smooth animations, and consistent UI theme.",
    tags: ["React", "Responsive", "Animations", "Multi-page"],
    icon: Smartphone,
    category: "Frontend",
  },
];

const CATEGORIES = ["All", "Frontend", "Design"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            <ScrollFloat text="My Projects" className="inline-block gradient-text" />
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for creating amazing user experiences.
          </p>
          </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16 gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-orange-500/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
          </div>

        {/* CardSwap Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {filteredProjects.map((project) => (
            <CardSwap
              key={project.id}
              className="w-[380px] min-w-[320px] h-[400px] min-h-[400px]"
              front={
                <div className="flex flex-col items-center justify-center h-full">
                  <project.icon className="w-16 h-16 text-orange-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{project.title}</h3>
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              }
              back={
                <div className="flex flex-col items-center justify-center h-full">
                  <h3 className="text-xl font-bold text-white mb-4 text-center">{project.title}</h3>
                  <p className="text-white text-center mb-6">{project.description}</p>
                  <div className="flex gap-4 mb-6">
                    <a
                      href={project.github || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-slate-700 text-white font-semibold hover:bg-orange-500 transition-colors shadow"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow"
                    >
                      Demo
                    </a>
                  </div>
                  <span className="text-base text-orange-400 font-semibold mt-auto">{project.category}</span>
                </div>
              }
            />
          ))}
              </div>
      </div>
    </section>
  );
}

