import hero from '../../assets/girl_code.png'
import cv from '../../assets/claudia_joppa_cv.pdf'
const Hero = () => {
  return (
    <section id='home' className='pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-b from-cyan-50 to-white'>
      <div className="flex flex-col md:flex-row items-center ">
        <div className="md:w-1/2 pl-12 mb-8 md:mb-0 justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800mb-4">
            Hi, I'm <span className="text-cyan-600">Claudia</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600">Software Engineer 
            | Tech Enthusiast
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">I’m passionate about building smart, impactful digital experiences using modern tools and data-driven thinking.
          </p>
          <div className="flex flex-col md:flex-row gap-4 space-x-4">
            <a
              href="#projects"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors text-center"
            >View my work
            </a>
            <a
              href={cv}
              download={cv}
              className="border border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg transition-colors text-center"
            >Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-cyan-100 rounded-full overflow-hidden border-4 border-cyan-200">
            <div className='w-full h-full bg-cyan-300 flex items-center justify-center text-white text-4xl'>
              <img src={hero} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero