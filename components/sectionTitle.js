import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div id = {props.id} className="text-sm font-bold tracking-wider text-primary uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl  font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-[32px] ">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl ">
          {props.children}
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;