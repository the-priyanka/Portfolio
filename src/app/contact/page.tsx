import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-black min-w-[100vw] min-h-[100vh] p-[200px]">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="w-[40%]">
            <h1 className="text-white text-[50px] py-[30px]">
              Contact
            </h1>
            <p className="text-white text-[16px] opacity-70">
              Charley Knox Is Represented by United Creatives
            </p>
            <div className="py-[20px]">
              <p className="text-white text-[16px] opacity-70">
                Email: priyanka@gmail.com
              </p>
              <p className="text-white text-[16px] opacity-70">
                Phone: 123-456-7890
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-6 text-end flex justify-end">
          <div className="w-[70%] h-[400px]">
            <div className="flex gap-4 my-8">
              <div className="text-start">
                <label
                  htmlFor="firstName"
                  className="text-white opacity-70"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="text-white border-b-2 mt-[20px]"
                  id="firstName"
                  style={{ background: "none" }}
                />
              </div>
              <div className="text-start">
                <label
                  htmlFor="lastName"
                  className="text-white opacity-70"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="text-white border-b-2 mt-[20px]"
                  id="lastName"
                  style={{ background: "none" }}
                />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-start">
                <label
                  htmlFor="email"
                  className="text-white opacity-70"
                >
                  Email*
                </label>
                <input
                  type="email"
                  className="text-white border-b-2 mt-[20px]"
                  id="email"
                  style={{ background: "none" }}
                />
              </div>
              <div className="text-start">
                <label
                  htmlFor="phone"
                  className="text-white opacity-70"
                >
                  Phone
                </label>
                <input
                  type="text"
                  className="text-white border-b-2 mt-[20px]"
                  id="phone"
                  style={{ background: "none" }}
                />
              </div>
            </div>

            <div className="my-8">
              <div className="text-start flex flex-col ">
                <label
                  htmlFor="message"
                  className="text-white opacity-70"
                >
                  Leave us a message...
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="text-white border-b-2 mt-[20px]"
                  style={{ background: "none" }}
                ></textarea>
              </div>
            </div>

            <button className="text-white border px-8 py-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
