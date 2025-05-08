export const TechStack = () => {
  const categories = [
    {
      name: "Frontend",
      tools: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    // {
    //   name: "Backend",
    //   tools: ["Node.js", "Python", "Express", "Flask"]
    // },
    {
      name: "Data",
      tools: ["Excel", "SQL", "R", "Tableau"]
    },
    {
      name: "Tools",
      tools: ["Github", "Figma", "VS Code", "Canva"]
    },
    // {
    //   name: "DevOps",
    //   tools: ["Docker", "AWS", "Git", "CI/CD"]
    // }
  ];

  return (
    <section id="stack" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">My Tech Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-cyan-600 mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.tools.map((tool, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    <span className="text-gray-700">{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};