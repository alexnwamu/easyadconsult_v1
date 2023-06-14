import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.jpg";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap mt-[100px] ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-medium leading-snug  font-roboto tracking-tight text-primary lg:text-4xl lg:leading-tight xl:text-7xl xl:leading-tight dark:text-primary ">
           Make your Dream your Reality !
            </h1>
            <p className="py-5 text-base leading-normal text-gray-500 lg:text-lg xl:text-lg dark:text-gray-300">
            Our agency empowers you to  achieve greatness through <br  className="hidden xl:block"/>studying abroad in Georgia in Europe with tailored <br className="hidden xl:block" />  support, mentorship, and resources
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#contact"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-secondary rounded-md ">
                Free Consultation
              </a>
              <div className="sm:text-base text-sm text-gray-700 dark:text-white">
          Over <span className="text-secondary">5+</span>{" "}years helping students <br className="hidden sm:block
          " /> achieve their dreams
            
          </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div  className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cove rounded-lg border border-secondary "}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
export default Hero;