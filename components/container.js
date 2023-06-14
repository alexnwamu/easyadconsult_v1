import React from "react";
import {  Roboto, Montserrat } from 'next/font/google';
const mont = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mont-',
});
const roboto_mono = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-',
});
const Container = (props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${roboto_mono.variable} ${roboto_mono.variable} ${mont.variable} ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;