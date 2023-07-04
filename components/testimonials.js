import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/claire.jpg";
import userTwoImg from "../public/segun.jpg";
import userThreeImg from "../public/arnold.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-bgWhite px-14 rounded-2xl py-14 ">
            <p className="text-2xl leading-normal ">
              After leaving secondary school wanting to study medicine but not knowing what to do next. EasyAD Consult helped guide me to Georgia showing me all the <Mark>advantages</Mark> and I absolutely love the experience so far.
            </p>

            <Avatar
              image={userOneImg}
              name="Claire Ohaka"
              title="Medical Student"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-bgWhite px-14 rounded-2xl py-14 ">
            <p className="text-2xl leading-normal ">
              I dont know if I can express them all in words, Like the name EasyAD Consult. They basically made the whole process <Mark>EASY</Mark>for me.
            </p>

            <Avatar
              image={userTwoImg}
              name="Segun Eweje"
              title="Masters Student in IT"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-bgWhite px-14 rounded-2xl py-14 ">
            <p className="text-2xl leading-normal ">
            From helping me process my admission, to acquiring the documents for my visa,working with EasyAD Consult was <Mark>seamless</Mark> and stress-free.
            </p>

            <Avatar
              image={userThreeImg}
              name="Enyinna Arnold"
              title="Aviation Student"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 ">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-secondary bg-gray-100 rounded-md ring-gray-100 ring-4 ">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
