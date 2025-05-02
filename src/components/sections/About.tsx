import me from '../../assets/my_photo.jpg'

const About = () => {
  return (
    <section id='about' className='py-12 px-6 md:px-12 md:pt-24 md:pb-20 bg-gradient-to-b from-cyan-50 to-white'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-12 text-center'>About Me</h1>
        
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
          {/* Profile Image */}
          <div className='md:w-1/3 flex justify-center'>
            <div className="w-64 h-64 md:w-120 md:h-120 bg-cyan-100 rounded-xl overflow-hidden border-4 border-cyan-200 shadow-lg">
              <img 
                src={me} 
                alt="Profile photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content Cards */}
          <div className='md:w-2/3 space-y-6'>
            {/* Introduction Card */}
            <div className='bg-white p-6 rounded-xl shadow-md border border-gray-100'>
              <h2 className='text-xl font-semibold text-cyan-600 mb-3'>Who I Am</h2>
              <p className='text-gray-700 pb-5'>
                I'm a Computer Engineering graduate with a deep curiosity for how systems work and how to make them work better. 
                I'm currently growing my skills across software development, data analysis, and data engineering to build 
                end-to-end tech solutions that are both functional and meaningful.
              </p>
            
            {/* Capabilities*/}
              <h2 className='text-xl font-semibold text-cyan-600 mb-3'>What I Bring</h2>
              <ul className='list-disc pl-5 space-y-2 text-gray-700'>
                <li>Experience with JavaScript, Python, SQL, React, and Pandas</li>
                <li>Ability to write clean, efficient code and optimize systems</li>
                <li>Skills in extracting insights from complex datasets</li>
                <li>Knowledge of both frontend and backend development</li>
                <li>Strong problem-solving at the intersection of logic and creativity</li>
              </ul>
  
            {/* Motivation */}
              <h2 className='text-xl font-semibold text-cyan-600 mb-3 pt-5'>What Drives Me</h2>
              <p className='text-gray-700'>
                At the heart of my journey is a desire to use technology to drive real impact through innovative apps, 
                efficient systems, and data-informed decisions. I'm passionate about continuous learning and applying 
                technical skills to solve meaningful problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;