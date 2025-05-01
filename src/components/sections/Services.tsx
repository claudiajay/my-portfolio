export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Building responsive, performant web applications with modern frameworks.",
      icon: "💻"
    },
    {
      title: "Data Engineering",
      description: "Designing data pipelines and infrastructure for analytics and machine learning.",
      icon: "📊"
    },
    {
      title: "Data Analysis",
      description: "Extracting insights from complex datasets to drive business decisions.",
      icon: "🔍"
    },
    {
      title: "Technical Consulting",
      description: "Advising on system architecture and technology strategy.",
      icon: "💡"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What I Offer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-cyan-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cyan-100"
            >
              {/* <div className="text-4xl mb-4">{service.icon}</div> */}
              <h3 className="text-xl font-semibold text-cyan-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};