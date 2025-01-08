import React from "react";
import logo from "../assets/logo.jpeg";
import flight from "../assets/flight.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import footerlogo from "../assets/footerlogo.png";
import call from "../assets/call.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.jpg";


const Home = () => {
  return (
    <div>
      <div className="shadow-sm  p-1 flex items-center justify-between ">
        <div className=" px-1 md:px-5">
          <img src={logo} className="md:h-16 md:w-16 h-12 w-12" alt="#" />
        </div>
        <div className="bg-white rounded-full flex justify-center items-center gap-x-2 px-2 md:px-10">
          <img src={call} className="h-8 w-8" alt="#" />
          <p style={{ fontFamily: "Georgia" }} className="font-semibold">
            +123456789
          </p>
        </div>
      </div>

      <div className="relative ">
        <img
          src={flight}
          alt="bg"
          className="w-full h-[38rem] md:h-[34rem] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 opacity-50"></div>

        <div className="absolute top-40 md:top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center space-y-4">
          <h1
            style={{ fontFamily: "Rubik Vinyl, sans-serif" }}
            className="text-4xl text-black font-bold"
          >
            UNBELIEVABLE FLIGHT DEALS
          </h1>
          <p
            style={{ fontFamily: "Rubik Vinyl, sans-serif" }}
            className="text-4xl text-black font-bold "
          >
            SAVE UP TO 60% OFF !
          </p>
          <p
            style={{ fontFamily: "Georgia" }}
            className="text-lg md:text-2xl text-orange-600 font-bold py-1"
          >
            STARTING AT $59 FOR DOMESTIC FLIGHTS
          </p>
          <p
            style={{ fontFamily: "Georgia" }}
            className="text-lg px-3 md:text-2xl text-black font-bold   "
          >
            Get roundtrip deals like:
          </p>
          <div className="mt-2">
            <a href="tel:+1234567890">
              <button
                style={{ fontFamily: "Georgia" }}
                className="bg-orange-600 p-3 text-sm transform transition-transform duration-300 hover:scale-105   px-6 font-medium rounded-lg text-white"
              >
                BOOK YOUR FLIGHT TODAY
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="md:mx-10">
          <p
            style={{ fontFamily: "Georgia" }}
            className="text-3xl md:text-4xl px-0 md:px-4 text-center font-bold text-black  py-2"
          >
            THE BENEFITS!
          </p>
          <p className="text-lg  mt-2 mx-2 text-gray-500 text-center font-semibold">
            People love our Platform because its so easy to use and has so many
            extra features, but thats only one of many reasons. Clients speak
            about the Platform for the following reasons:
          </p>
          <div
            style={{ fontFamily: "Georgia" }}
            className="mt-4 text-center mx-1 md:mx-10"
          >
            <p className="py-1 md:py-2 font-semibold text-xl md:text-2xl">
              No wait time
            </p>
            <p className="py-1 md:py-2 font-semibold text-xl md:text-2xl">
              No hidden charges
            </p>
            <p className="py-1 md:py-2 font-semibold text-xl md:text-2xl">
              Knowledgeable customer support
            </p>
            <p className="py-1 md:py-2 font-semibold text-xl md:text-2xl">
              24/7 Online support
            </p>
            <p className="py-1 md:py-2 font-semibold text-xl md:text-2xl">
              24 Hour LIVE Operators with No Hold Times!
            </p>
            <div className="mt-2">
              <a href="tel:+1234567890">
                <button className="bg-orange-600 transform transition-transform duration-300 hover:scale-105  p-2 text-xs md:text-sm px-8 md:px-12  font-medium rounded-lg text-white">
                  BOOK YOUR FLIGHT TODAY
                  <p className=" text-gray-100">Call Now: +1234567890</p>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-12 flex flex-wrap md:flex-nowrap items-center justify-center mx-4 md:mx-0 md:gap-x-14">
      <div className="relative mt-8 md:mt-0  w-full sm:w-auto">
          <img
            src={img1}
            className="h-[33rem] md:h-[30rem] rounded-lg object-cover w-full sm:w-96 transform transition-transform duration-300 ease-out md:hover:scale-105 "
            alt="img"
          />
          <div className="absolute bottom-2 flex justify-center items-center text-black bg-white w-full bg-opacity-100 p-2">
            <p className="font-medium">Croatia</p>
            <span className="mx-2">|</span>{" "}
      
            <p className="text-orange-600 font-bold">$350 Roundtrip</p>
          </div>
        </div>

        <div className="relative mt-8 md:mt-0 w-full sm:w-auto">
          <img
            src={img5}
            className="h-[33rem] object-cover rounded-lg md:h-[30rem]  w-full sm:w-96 transform transition-transform duration-300 ease-out md:hover:scale-105"
            alt="img"
          />
          <div className="absolute bottom-2 flex justify-center items-center text-black bg-white w-full bg-opacity-100 p-2">
            <p className="font-medium">Bali</p>
            <span className="mx-2">|</span>{" "}
       
            <p className="text-orange-600 font-bold">$225 Roundtrip</p>
          </div>
        </div>

        <div className="relative  w-full sm:w-auto">
          <img
            src={img3}
            className="h-[33rem] object-cover rounded-lg md:h-[30rem] w-full sm:w-96 transform transition-transform duration-300 ease-out md:hover:scale-105"
            alt="img"
          />
          <div className="absolute bottom-2 flex justify-center items-center text-black bg-white w-full bg-opacity-100 p-2">
            <p className="font-medium">Hawali</p>
            <span className="mx-2">|</span>{" "}
         
            <p className="text-orange-600 font-bold">$400 Roundtrip</p>
          </div>
        </div>

       

      </div>

      <div className="mt-10">
        <div className="md:mx-10">
          <p
            style={{ fontFamily: "Georgia" }}
            className="text-3xl md:text-4xl px-4 text-center font-bold text-black  py-2"
          >
            HOW DOES CHEAFLIGHT WORK?
          </p>
          <p className="text-lg  mt-2 mx-2 text-gray-500 text-center font-semibold">
            With our secure flight routing database and hundoranges of
            unpublished deals, we aim to make finding the very best flight rate
            easy and efficient.
          </p>
        </div>

        <div className="text-center mx-6 md:mx-14 mt-10 md:grid md:grid-cols-3 md:gap-14 sm:block">
          <div className="mb-8 md:mb-0 p-6 shadow-sm border border-gray-100">
            <img src={icon1} className="h-16 w-16 mx-auto" alt="" />
            <p style={{ fontFamily: "Georgia" }} className="font-bold text-3xl">
              1. Database Scan
            </p>
            <p
              style={{ fontFamily: "Georgia" }}
              className="text-gray-600 mt-2 text-sm"
            >
              YOU TELL US THE NAME OF YOUR CLOSEST AIRPORT.
            </p>
          </div>
          <div className="mb-8 md:mb-0 p-6 shadow-sm border border-gray-100">
            <img src={icon2} className="h-16 w-16 mx-auto" alt="" />
            <p style={{ fontFamily: "Georgia" }} className="font-bold text-3xl">
              2. Cheapest Deal
            </p>
            <p
              style={{ fontFamily: "Georgia" }}
              className="text-gray-600 mt-2 text-sm"
            >
              OUR SYSTEM SCANS THOUSANDS OF DATABASES FOR THE CHEAFLIGHT DEALS .
            </p>
          </div>
          <div className="mb-8 md:mb-0 p-6 shadow-sm border border-gray-100">
            <img src={icon3} className="h-16 w-16 mx-auto" alt="" />
            <p style={{ fontFamily: "Georgia" }} className="font-bold text-3xl">
              3. Direct Booking
            </p>
            <p
              style={{ fontFamily: "Georgia" }}
              className="text-gray-600 mt-2 text-sm"
            >
              YOU BOOK DIRECTLY WITH THE AIRLINE NO MIDDLEMAN OR AGENT IS
              INVOLVED.
            </p>
          </div>
        </div>
        <div style={{ fontFamily: "Georgia" }} className="text-center mt-8">
          <a href="tel:+1234567890">
            <button className="bg-orange-600 transform transition-transform duration-300 hover:scale-105  p-3 text-md  px-16 font-medium rounded-lg text-white">
              GET A QUOTE
            </button>
          </a>
        </div>
      </div>

      <div className="bg-blue-950 text-white mt-10">
        <div className="container text-center mx-auto py-10  px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="mb-6  md:mb-0 md:w-1/2 flex justify-center md:justify-start">
              <img
                src={footerlogo}
                className="h-[20rem] w-[20rem] md:h-[30rem] md:w-[30rem]"
                alt="Footer Logo"
              />
            </div>

            <div className="md:w-2/3  text-center md:text-left">
              <h2
                style={{ fontFamily: "Georgia" }}
                className="text-xl md:text-2xl font-bold mb-4"
              >
                WHERE CUSTOMERS MATTER THE MOST!
              </h2>
              <p
                style={{ fontFamily: "Georgia" }}
                className="mb-4 text-sm md:text-base py-3 md:py-2"
              >
                Looking for an affordable getaway? Cheaflight can help! We
                specialize in finding the best rates for flights so you can
                spend your hard-earned money on other things. Plus, we make
                booking your ticket very easy, so what are you waiting for? Give
                us a try today!
              </p>
              <div className="mb-4">
                <p
                  style={{ fontFamily: "Georgia" }}
                  className="text-lg font-medium"
                >
                  ✔️ 100% satisfaction guaranteed.
                </p>
                <p
                  style={{ fontFamily: "Georgia" }}
                  className="text-lg font-medium"
                >
                  ✔️ Guaranteed the best price!
                </p>
              </div>
              <div className="mt-2 py-2">
                <a href="tel:+1234567890">
                  <button
                    style={{ fontFamily: "Georgia" }}
                    className="bg-orange-600 transform transition-transform duration-300 hover:scale-105  p-4 text-sm  px-6 font-medium rounded-lg text-white"
                  >
                    BOOK YOUR FLIGHT TODAY
                  </button>
                </a>
              </div>
              <p style={{ fontFamily: "Georgia" }} className="mt-2 py-3">
                Call Now: <span className="font-bold">+1234567890</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5 md:py-10  text-white  flex flex-col items-center justify-center px-6 md:px-4">
        <div className="text-center mt-2 md:mt-0">
          <div className="flex items-center justify-center mb-4">
            <img src={logo} className="h-[7rem] w-[7rem]" alt="" />
          </div>
          <h1
            style={{ fontFamily: "Georgia" }}
            className="text-3xl font-semibold"
          >
            Looking for an affordable getaway?
          </h1>
          <p className="mt-2 text-sm">
            Cheaflight can help! We specialize in finding the best rates for
            flights so you can spend your hard-earned money on other things.
            Plus, we make booking easy and stress-free. So what are you waiting
            for?
          </p>
          <p
            style={{ fontFamily: "Georgia" }}
            className="mt-4 font-bold text-orange-600"
          >
            Give us a try NOW!
          </p>
        </div>

        <div className="mt-5 text-gray-400 text-sm text-center md:mx-10">
          <p>
            <strong>Disclaimer:</strong> Cheaflight US is a referral source that
            provides information and access to a helpline to match consumers
            with companies that may provide certain flight details to them.
            Cheaflight US does not promise a specific outcome or the results you
            may achieve by calling the helpline. The helpline is free to call
            but the services or programs that you pursue may have costs
            associated with them.
          </p>
          <p className="mt-2">
            <strong>TCPA DISCLOSURE:</strong> By clicking the CALL or SUBMIT
            button anywhere on this website, you consent to receive recurring
            auto-dialed and/or pre-recorded telemarketing calls and/or text
            messages from our partners in order to discuss options at the
            telephone number you provided or called from. You understand that
            you may receive a call even if your telephone number is listed on a
            Do Not Call list and that your consent is not a requirement of
            purchase. You understand that your telephone company may impose
            charges for this contact and that you can revoke this consent at any
            time.
          </p>
          <p className="mt-2">
            For SMS campaigns: Text STOP to cancel and HELP for help. Msg and
            data rates may apply. Recurring msgs up to 10 msgs per month. Our
            goal is to provide exceptional service. One of our agents may reach
            out to you to discuss your order, ask for feedback, and/or see if
            you need any assistance with your products, services, or plans, at
            the phone number you provided regardless of your do-not-call list
            status. You may opt out of further contact at any time by simply
            telling our customer service team that you would no longer like to
            be contacted. In the event that our team is unable to reach you by
            phone, they may send you a text message letting you know that we
            called. Both our text messages and phone calls may be sent or
            connected utilizing automated software. Carrier charges may apply.
            You may opt-out of any future contact via text message by replying
            anytime with STOP.
          </p>
        </div>
      </div>

      <div   style={{ fontFamily: "Georgia" }} className="bg-black py-5 pb-10 text-white px-6 md:px-20">
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-44">
          {/* Top Domestic Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              Top Domestic Destinations
            </h3>
            <ul className="space-y-1">
              <li>New York City</li>
              <li>Orlando</li>
              <li>Atlanta</li>
              <li>Chicago</li>
              <li>Washington</li>
              <li>San Francisco</li>
              <li>Los Angeles</li>
              <li>Miami</li>
              <li>Las Vegas</li>
            </ul>
          </div>

          {/* Top International Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              Top International Destinations
            </h3>
            <ul className="space-y-1">
              <li>Dublin</li>
              <li>Amsterdam</li>
              <li>Athens</li>
              <li>Rome</li>
              <li>Dubai</li>
              <li>London</li>
              <li>Paris</li>
              <li>Singapore</li>
              <li>Malaysia</li>

            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h3 className="font-bold text-lg mb-3">Reach Us</h3>
            <p>Cheaflight.com</p>
            <p>2500 Main Street</p>
            <p>Suite 300</p>
            <p>Dallas,TX 75201, USA.</p>
            <p className="font-bold mt-3">24/7 Number</p>
            <p>+123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
