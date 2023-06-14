import React from "react";
import { useState } from "react";
import Container from "./container";
import 'react-toastify/dist/ReactToastify.css';
import { toast,ToastContainer } from "react-toastify";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import {
  DevicePhoneMobileIcon,
  EnvelopeOpenIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
const clearForm = ()=>{
  setName('')
  setEmail('')
  setPhoneNumber('')
  setMessage('')
}
  const submitHandler = async(e)=>{
    e.preventDefault()
    if(!email || !phoneNumber || !name){
      return toast.error('Please fill your name ,email, phone number')
    }
    try{
      setIsLoading(true)
const {data }= await axios.post('/api/mail',  {

name,email,message,phoneNumber

});
setIsLoading(false)
clearForm()
toast.success(data.message)


}catch (err){
      setIsLoading(false)
      toast.error(
        err.response && err.response.data.message ? err.response.data.message :err.message
      )
    }
  }
  return (
    <Container className="sm:!p-0">

      <div
        id="contact"
        className=" bg-primary p-8 overflow-hidden text-white w-full rounded-lg flex flex-col relative justify-center items-center"
      > 
           <ToastContainer position="bottom-center" limit={1} />
        <h1 className="sm:text-4xl text-center text-3xl font-roboto mb-4 font-semibold ">
          Get in Touch !
        </h1>
        <h3 className="mb-4 lg:text-base text-[14px] text-center font-inter">
          Contact us to book a <span className=" font-bold">free </span>{" "}
          consultation or for more enquiries
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 text-[14px]  gap-4">
          <Link href={"https://goo.gl/maps/SmV3NKttHQx13xbD6"}>
            <div className="text-white hover:bg-secondary px-3  rounded-xl flex flex-col text-center items-center justify-center py-5  ">
              <MapPinIcon className=" w-6 md:w-8" />
              46, Diya Street, Gbagada, <br /> Lagos
            </div>
          </Link>

          <Link href={"mailto:info@easyadconsult.com"}>
            {" "}
            <div className=" text-white pb-10  hover:bg-secondary px-3 pt-5 rounded-xl flex flex-col items-center justify-center ">
              {" "}
              <EnvelopeIcon className=" w-6 md:w-8" /> info@easyadconsult.com
            </div>
          </Link>
          <Link href={"tel:+2349034791081"}>
            {" "}
            <div className="text-white flex flex-col items-center justify-center  hover:bg-secondary px-3 pb-10 pt-5 rounded-xl  ">
              <PhoneIcon  className=" w-6 md:w-8" />
          <span id="contactform">+234 903 479 1081</span>    
            </div>
          </Link>
        </div>

        <div  className="form bg-bgWhite mt-4 sm:mt-8 mb-4 p-4 sm:p-8 text-black  rounded-lg">
          <h2 className="mb-4 text-center sm:text-left">Fill in your Details</h2>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col  sm:flex-row gap-4">
              <div className="user-info ">
                <div className="max-[300px]:text-center">
                  <h1>Your name</h1>
                  <div className="flex  bg-white hover:outline hover:text-secondary relative rounded focus:outline">
                    {" "}
                    <UserIcon className="w-6 ml-2" />{" "}
                    <input
                    value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      className="sm:w-[300px] placeholder:text-[14px] ml-2 py-2 hover:text-black focus:outline-none"
                      placeholder="Enter your Full Name."
                    />{" "}
                  </div>
                </div>
                <div className="my-8 max-[300px]:text-center">
                  <h1>Mail</h1>
                  <div className="flex bg-white hover:outline hover:text-secondary  rounded relative">
                    {" "}
                    <EnvelopeOpenIcon className="w-6 ml-2" />{" "}
                    <input
                    value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="sm:w-[300px]  hover:text-black ml-2 py-2 focus:outline-none placeholder:text-[14px]"
                      placeholder="Enter a valid email address "
                    />{" "}
                  </div>
                </div>
                <div className="max-[300px]:text-center">
                  <h1>Phone Number</h1>
                  <div className="flex bg-white hover:outline hover:text-secondary rounded relative">
                    {" "}
                    <DevicePhoneMobileIcon className="w-6 ml-2" />{" "}
                    <input
                    value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="number"
                      className="sm:w-[300px] placeholder:text-[14px] hover:text-black ml-2 py-2 focus:outline-none"
                      placeholder="Enter a valid phone number "
                    />{" "}
                  </div>
                </div>{" "}
              </div>

              <div className="message max-[300px]:text-center">
                <h1>Message</h1>
                <textarea
                value={message}
                  name="Message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here ..."
                  id=""
                  className="rounded-sm hover:outline hover:outline-secondary max-[300px]:w-full placeholder:text-[14px] p-2 resize-none
    "
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
            <div>
              <button
              disabled ={isLoading}
                type="submit"
                className="bg-secondary  max-[300px]:text-[10px] mt-4 sm:mt-0 text-white py-2 px-4 rounded-md"
              >
             {isLoading ? "Booking": "Book Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
