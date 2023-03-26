import {
  CloseCircle,
  Personalcard,
  Briefcase,
  Calendar,
  Teacher,
  Star1,
} from "iconsax-react";

const AboutTwo = () => {
  return (
    <>

      <div className="hidden lg:flex lg:flex-col w-1/5">
        <button className="btn-aboutMe px-4 py-2 ">Experience</button>
        <button className="btn-aboutMe px-4 py-2  mt-3">Educatio</button>
        <button className="btn-aboutMe px-4 py-2  mt-3">Skill</button>
      </div>

      <div className=" lg:w-[70%] relative bg-red-500 min-h-screen">
        {/*  Experience  */}
        <div className="lg:absolute top-0 right-0 w-full">
          <div className="w-full bg-[#f2f2f2] dark:bg-[#151515] rounded border-[1px] border-[#ddd] dark:border-[#333] text-yellowPrimary p-6 text-xl flex justify-center items-center duration-300">
            <Briefcase variant="Bold" />
            Experience
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-base text-[#656c6d] dark:text-white ">
              WEB DESIGNER - ENVATO
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> 2015 - 2023
            </span>
            <p className="leading-6 font-normal text-sm text-whitePrimary dark:text-[#656c6d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium orci sit amet mi ullamcorper
            </p>
          </div>

          <div className="mt-5">
            <h3 className="font-semibold text-base text-[#656c6d] dark:text-white ">
              WEB DESIGNER - ENVATO
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> 2015 - 2023
            </span>
            <p className="leading-6 font-normal text-sm text-whitePrimary dark:text-[#656c6d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium orci sit amet mi ullamcorper
            </p>
          </div>
        </div>

        {/*  Education  */}
        <div className="mt-9 lg:mt-0 lg:absolute top-0 right-0 w-full">
          <div className="w-full bg-[#f2f2f2] dark:bg-[#151515] rounded border-[1px] border-[#ddd] dark:border-[#333] text-yellowPrimary p-6 text-xl flex justify-center items-center duration-300">
            <Teacher variant="Bold" />
            Education
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-base text-[#656c6d] dark:text-white ">
              WEB DESIGNER - ENVATO
            </h3>
            <span className="flex items-center py-4 text-[#aaaaaa] text-xs">
              <Calendar size={16} variant="Bold" className="mr-2" /> 2015 - 2023
            </span>
            <p className="leading-6 font-normal text-sm text-whitePrimary dark:text-[#656c6d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              pretium orci sit amet mi ullamcorper
            </p>
          </div>
        </div>

        {/*  Skill  */}
        <div className="mt-9 lg:mt-0 lg:absolute top-0 right-0 w-full">
          <div className="w-full bg-[#f2f2f2] dark:bg-[#151515] rounded border-[1px] border-[#ddd] dark:border-[#333] text-yellowPrimary p-6 text-xl flex justify-center items-center duration-300">
            <Teacher variant="Bold" />
            Skills
          </div>

          <ul className="flex justify-between flex-wrap">
            <li className="w-[35%] mt-4">
              <span className="text-[#656c6d] dark:text-white ">HTML</span>

              <p className="flex  items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-[#656c6d] dark:text-white ">CSS</span>

              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>

            <li className="w-[35%] mt-4">
              <span className="text-[#656c6d] dark:text-white ">Js</span>

              <p className="flex items-center mt-2">
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
                <span className="w-3 h-3 mr-1 block bg-yellowPrimary rounded-full"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
