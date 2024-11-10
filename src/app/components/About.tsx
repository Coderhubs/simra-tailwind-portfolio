import React from 'react';
import Image from 'next/image';

const About = () => {
  const skills = ['HTML, CSS, TypeScript', 'Next.js, Tailwind CSS', 'Problem Solving, Leadership', 'Team Management', 'Creativity, Artistic'];
  const qualifications = [
    'Governor Initiative and Cloud Computing (Web Developer)',
    'Bachelor\'s in BBA (Human Resources)',
    'Internships (Efu Life Insurance)',
    'Internships (Youth Awareness)',
  ];

  return (
    <div id="About">
      <div className="relative z-0 w-full overflow-hidden bg-opacity-0 bg-[url('/image/technical.jpg')] bg-cover">
        <div className="absolute inset-0 w-full h-full -z-50 bg-white bg-opacity-85"></div>

        <div className="p-4 sm:p-8 max-w-5xl mx-auto overflow-hidden">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-[#EA1D5D] mb-4">About Us</h1>
          <p className="text-base sm:text-lg mb-6 text-[#21243D] font-medium text-center">
            Welcome to my website! I am working on myself to gain more expertise in the following skills. I am passionate about becoming a better developer and continually improving my knowledge in the latest technologies and frameworks. Stay tuned for more updates as I grow!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[ 
              "/image/ts-js.jpeg", 
              "/image/team.jpeg", 
              "/image/leadership.jpeg", 
              "/image/html-css.jpg", 
              "/image/creativity.jpeg", 
              "/image/nextjs.jpeg" 
            ].map((src, index) => (
              <div key={index} className="relative w-full h-64 sm:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl animate-fadeIn">
                <Image
                  src={src}
                  alt={`Skill image ${index + 1}`}
                  className="object-cover rounded-lg" // Ensures the image covers the area without stretching
                  layout="fill" // Makes the image fill its container completely
                  quality={75} // Set image quality (default is 75)
                  priority={index === 0} // Optionally set for the first image
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-6 lg:space-y-0">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#EA1D5D] mb-4">My Skills</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base font-semibold text-[#21243D]">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#EA1D5D] mb-4">My Qualifications and Experiences</h2>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base font-semibold text-[#21243D]">
                {qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
