import { ProjectCard } from "../projectCards/projectCard";
import {  dataProjects } from "../../data/dataProject";
import { useState } from "react";
import { softwareProjects } from "../../data/softwareProject";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<'software' | 'data'>('software');

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my technical work across software development and data analysis
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveTab('software')}
              className={`px-6 py-3 text-sm font-medium rounded-l-lg border ${
                activeTab === 'software'
                  ? 'bg-cyan-600 text-white border-cyan-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Software Projects
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('data')}
              className={`px-6 py-3 text-sm font-medium rounded-r-lg border ${
                activeTab === 'data'
                  ? 'bg-cyan-600 text-white border-cyan-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
              }`}
            >
              Data Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {activeTab === 'software' && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Software Development
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {softwareProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'data' && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Data Analysis & Engineering
              </h3>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dataProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>

      
      </div>
    </section>
  );
};