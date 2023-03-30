import { User } from "iconsax-react";

const AboutOne = () => {
  return (
    <section className="pb-7 ">
      <div className="flex items-center py-3 md:py-0 text-grayText dark:text-white">
        <span className="mr-2">
          <User variant="Bold" />
        </span>
        <h3 className="text-lg font-semibold">Personal info</h3>
      </div>

      <p className="text-grayText dark:text-white text-sm md:mt-3 leading-8">
        I'm a Freelance Web Designer & Developer based in Moscow, Russia, I have
        serious passion for UI effects, animations and creating intuitive, with
        over a decade of experience.
      </p>

      <ul className="lg:flex lg:justify-between">
        <div>
          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            First Name:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Fateme
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Last Name:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Ghafari
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Date of birth:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              5 September 1998
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Nationality:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Iranian
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Freelance:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Available
            </span>
          </li>
        </div>

        <div>
          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Phone:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              +922 458 5055
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Address:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Tehran, Iran
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Email:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              [fatemeghafari77]@gmail.com
            </span>
          </li>

          <li className="text-[#222] dark:text-white font-bold text-sm my-3">
            Spoken Langages:
            <span className="text-grayText dark:text-[#eee] font-normal ml-3">
              Farsi, English
            </span>
          </li>
        </div>
      </ul>
    </section>
  );
};

export default AboutOne;
