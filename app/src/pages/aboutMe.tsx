import CardCopyText from '@/components/CardCopyText';
import Confetti from '@/components/Confetti';

export default function AboutMe() {
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
                      platforms like SUSE, AIX, and Windows. I enjoy creating
                      front-end, middleware, and back-end solutions for in house
                      use cases across multiple business units like Journeys and
                      Johnston&Murphy.
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
                        Hobbies
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      My latest passion is teaching my Husky, Bavo, joring
                      commands. He's a natural and loves to run. I also enjoy
                      playing adult league ice hockey, watching the Pittsburgh
                      Penguins, listening to live music, playing the saxophone,
                      video games, and spending time with my family.
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
                        Clone This Project
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
                      ------------
                    </p>
                    <ul className="mb-2 text-gray-600 list-disc list-inside">
                      <CardCopyText text="git clone https://github.com/FlaccidFacade/portfolio.git" />
                      Simple examples of: automating testing with github actions
                      and Jest; configuring Next.js and Tailwind o for a
                      responsive website; dependabot workflows; developing with
                      docker; and more
                      <li>vTBD : enable i18 translations</li>
                      <li>vTBD : instagram feed view.</li>
                      <li>vTBD : spotify view</li>
                      <li>vTBD : streak tracking (github, duolingo...)</li>
                    </ul>
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
                        Continuous Learning
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-600 uppercase">
                      ------------
                    </p>
                    <p className="mb-3 text-gray-600">
                      It's one of my passions to keep learning about new
                      methodologies and solutions In this project mostly
                      practicing docker commands, next.js, and tailwind. I
                      currently challenge myself to make small strides in self
                      development by studying French and Chess every day. I also
                      spend time investing in Udemy courses to keep up to date
                      on the latest patch releases and methods from languages
                      and frameworks like two of my favorites FastAPI and
                      Angular.
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
                        Syntax Soup
                      </h3>
                    </div>
                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">
                      ------------
                    </p>
                    <p className="mb-2 text-gray-600">
                      Having touched a variety of solutions I will rank my
                      favorite languages/syntaxes/suites that I've touched.
                      Python (vitrualEnv &gt conda),TS/JS (Typescript when it's
                      easily available, javascript is just fine) (Angular &gt;
                      Next.js &gt; React), YAML (docker &gt; podman), SHELL,
                      C++, SQL (postgreSQL &gt; Oracle), Java (maven &gt gradle
                      &gt ant), Go, json, Batch, CSS/SCSS/Less(Bootstrap &gt;
                      Tailwind), groovy, xml, and html
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
