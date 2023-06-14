import Link from "next/link";
import Image from "next/image"
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const navigation = [
    
    "Services",
    "Why Georgia ?",
    "Programs",
    "Contact",
    
  ];

  return (
    <div className="w-full flex z-40 items-center justify-center bg-bgWhite">
      <nav className="container z-10 fixed top-0 w-full flex bg-white dark:bg-trueGray-900 flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
                  <Image src='/img/logo.png' height={100} width={150} alt="EASYAD"/>
                    
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-secondary focus:text-secondary focus:bg-bgWhite focus:outline-none dark:text-gray-300 dark:focus:bg-secondary ">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} scroll={false} href={`${ index === 0 ? '/#services' :''} ${ index === 2 ? '/programs' :''}${ index === 3 ? '/#contactform' :''} ${ index == 1 ? '/#whygeorgia ' :''} `}  className="w-full px-4 py-2 -ml-4 text-gray-500  dark:text-gray-300 hover:text-primary focus:text-primary focus:bg-bgWhite dark:focus:bg-gray-800 focus:outline-none
                       border-b">
                          {item}
                      </Link>
                    ))}
                    <Link href="/#contact" className="w-full px-6 py-2 mt-3 text-center text-white bg-secondary rounded-md lg:ml-5">         
                       Apply Now
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link scroll={false} href={`${ index === 0 ? '/#services' :''}  ${index === 3 ? '/#contact' :''} ${ index === 1 ? '/#whyus' :''} ${index == 2 ? '/programs':''} `} className={`inline-block scroll-smooth px-4 py-2 text-lg font-normal text-gray-800 no-underline
                 rounded-md dark:text-gray-200 hover:text-secondary focus:text-primary focus:bg-bgWhite 
              focus:outline-none dark:focus:bg-gray-800`}>
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link scroll={false} href="/#contact" className="px-6 py-2 text-white bg-secondary rounded-md md:ml-5">
            Free Consultation
          </Link>

       
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
