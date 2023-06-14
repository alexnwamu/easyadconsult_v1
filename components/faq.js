import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-100 hover:bg-bgWhite focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 ">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-secondary`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 ">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How long does the getting admissions?",
    answer: "On average with our help, you should have your admission letter within a week",
  },
  {
    question: "Where is Georgia (Country) ? ",
    answer: "Georgia is a beautiful country right on the intersection between Europe and Asia. The capital of Georgia is Tbilisi."
  },
  {
    question: "Do I need SAT or other foreign exams? ",
    answer:
      "No, all you need is your O level results (WASSCE) ",
  },
  {
    question: "Does Easy Ad process graduate admissions?",
    answer:
      "Yes we do book a free consultation now",
  },
];

export default Faq;