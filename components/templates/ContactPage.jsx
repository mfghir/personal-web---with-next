import {
  CloseCircle,
  Messages1,
  Call,
  Sms,
  Map,
  Instagram,
  Send,
  Dribbble,
} from "iconsax-react";
import Form from "../common/Form";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="min-h-screen h-fit mt-2 p-2 md:p-4 lg:flex">
      <Link href="/" className="text-4xl right-9 top-16 fixed z-50">
        <CloseCircle className="text-grayText" />
      </Link>

      <div className="hidden lg:block lg:w-[30%] object-fill relative resize">
        <Image className="absolute top-0 left-0" src="/bg.jpg" alt="bg" fill />
      </div>

      <section className="section-container">
        <h1 className="title flex justify-center items-center text-2xl lg:text-4xl w-full">
          <span className="mr-2">Get</span>
          <span className="text-yellowPrimary">In Touch</span>
        </h1>

        <div className="title-line flex justify-center items-center my-7 w-full">
          <span className="border-[#666] w-1/4 border-[1px]"></span>
          <span className="mx-5 text-yellowPrimary">
            <Messages1 />
          </span>
          <span className="border-[#666] w-1/4 border-[1px]"></span>
        </div>

        <div className="md:flex md:justify-between">
          <section className="bg-[#f2f2f2] dark:bg-neutral-900 border-[1px] border-[#ddd] dark:border-[#333] p-6">
            <div className="">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                Phone
              </h4>
              <p className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <Call className="" />
                <span className="ml-2 ">[+98] 922 458 5055</span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                Email
              </h4>
              <p className="flex justify-start items-center flex-wrap mt-3 text-grayText dark:text-white">
                <Sms className="" />
                <span className="ml-2 text-clip">
                  fatemeghafari77[@gmail].com
                </span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                Address
              </h4>
              <p className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <Map className="" />
                <span className="ml-2 ">Tehran, Iran</span>
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-yellowPrimary text-xl font-semibold">
                Socials
              </h4>
              <p className="flex justify-start items-center mt-3 text-grayText dark:text-white">
                <Instagram className="mr-2" />
                <Send className="mr-2 -rotate-45" />
                <Dribbble className="mr-2" />
              </p>
            </div>
          </section>

          <section className="text-grayText dark:text-white my-7 md:my-0 md:px-5">
            <h3 className="font-bold text-lg">Feel free to drop me a line</h3>
            <p className="font-normal text-sm leading-6 my-4">
              If you have any suggestion, project or even you want to say
              Hello.. please fill out the form below and I will reply you
              shortly.
            </p>
            <Form />
          </section>
        </div>
      </section>
    </section>
  );
};

export default ContactPage;
