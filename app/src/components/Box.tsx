import Confetti from './Confetti';

export default function Box({}) {
  return (
    <div>
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <Confetti>
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Development Engineer III @ Genesco Inc.
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Here I've had the opportunity to work across multiple
                      platforms.One of my main functions being full stack
                      development I enjoy creating front-end, middleware, and
                      back-end systems for in house solutions for multiple
                      business units.
                    </p>
                  </div>
                </div>
              </Confetti>
            </div>

            <div className="w-full sm:w-1/2">
              <Confetti>
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-purple-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Husky Joring, Music, and Ice Hockey
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      My latest passion is training my Husky to learn joring
                      commands. He's a natural and loves to run. I also enjoy
                      playing/watching ice hockey, listening/playing music, and
                      spending time with my family.
                    </p>
                  </div>
                </div>
              </Confetti>
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <Confetti>
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Node.js Familiarity
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      I have working experience with React, Redux, Next.js, and
                      Angular. I have also worked with various CSS, SCSS, Less
                      frameworks like Tailwind and Bootstrap.I additionally have
                      experience with Node.js and Docker Containers when
                      developing for back end html like struts, spring, and
                      Flask.
                    </p>
                  </div>
                </div>
              </Confetti>
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <Confetti>
                <div className="relative h-full ml-0 mr-0 sm:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-600 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-yellow-600 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Hacking / RE
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-600 uppercase">
                      ------------
                    </p>
                    <p className="mb-3 text-gray-600">
                      A security hacker is someone who explores methods for
                      breaching defenses and exploiting weaknesses in a computer
                      system or network.
                    </p>
                  </div>
                </div>
              </Confetti>
            </div>
            <div className="w-full sm:w-1/2">
              <Confetti>
                <div className="relative h-full ml-0 md:mr-10">
                  <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                  <div className="relative h-full p-5 bg-white border-2 border-green-500 rounded-lg">
                    <div className="flex items-center -mt-1">
                      <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
                        Bot/Script Development
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Bot development frameworks were created as advanced
                      software tools that eliminate a large amount of manual
                      work and accelerate the development process.
                    </p>
                  </div>
                </div>
              </Confetti>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
