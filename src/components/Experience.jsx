import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import ScrollFloat from './ScrollFloat';

  const experiences = [
    {
    title: "Frontend Developer Intern",
    company: "Tech Solutions Inc.",
    time: "Jun 2023 - Sep 2023",
    location: "Remote",
    role: "Internship",
    roleColor: "bg-orange-500",
    tags: ["React", "UI", "Teamwork"],
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
      achievements: [
      "Built a responsive dashboard UI",
      "Improved performance by 30%",
      "Collaborated with a team of 5 developers",
    ],
    },
    {
    title: "UI/UX Design Trainee",
    company: "Creative Minds Studio",
    time: "Jan 2023 - Mar 2023",
    location: "Chennai, India",
    role: "Training",
    roleColor: "bg-blue-500",
    tags: ["Figma", "Wireframing", "Prototyping"],
    technologies: ["Figma", "Adobe XD"],
      achievements: [
      "Designed 10+ mobile app wireframes",
      "Conducted user research interviews",
    ],
  },
  {
    title: "AI Research Intern",
    company: "DataScience Lab",
    time: "May 2022 - Aug 2022",
    location: "Bangalore, India",
    role: "Internship",
    roleColor: "bg-violet-500",
    tags: ["Python", "ML", "Research"],
    technologies: ["Python", "TensorFlow", "Pandas"],
      achievements: [
      "Developed a sentiment analysis model",
      "Published a research paper",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-transparent min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-orange-500 mb-4">
            <ScrollFloat text="My Experience" className="inline-block gradient-text" />
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            A timeline of my internships, trainings, and professional growth.
          </p>
        </div>
        <div className="relative">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {experiences.map((exp, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <div className="w-[350px] bg-slate-800 rounded-2xl shadow-xl px-6 py-6 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_0_rgba(59,130,246,0.5)] focus-within:scale-105 focus-within:shadow-[0_0_32px_0_rgba(251,146,60,0.5)] outline-none">
                    <div className="flex flex-col h-full justify-between space-y-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">
                            {exp.title}
                      </h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${exp.roleColor}`}
                          >
                            {exp.role}
                    </span>
                  </div>
                        <div className="flex items-center gap-3 text-sm text-white flex-wrap">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span>{exp.time}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                    </div>
                  </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {exp.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-700 text-orange-300"
                        >
                            {tag}
                        </span>
                      ))}
                    </div>
                      {exp.technologies.length > 0 && (
                        <div className="mb-2">
                          <span className="text-sm text-gray-400 font-semibold">
                            Technologies Used: {" "}
                          </span>
                          <span className="text-sm text-white">
                            {exp.technologies.join(", ")}
                          </span>
                  </div>
                      )}
                      {exp.achievements.length > 0 && (
                  <div>
                          <span className="text-sm text-gray-400 font-semibold">
                            Key Achievements:
                          </span>
                          <ul className="list-disc list-inside text-sm text-white mt-1 space-y-1">
                            {exp.achievements.map((ach, i) => (
                              <li key={i}>{ach}</li>
                      ))}
                    </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </CarouselItem>
          ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

