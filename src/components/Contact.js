import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [message, setMessage] = useState();
  const temizle = () =>{
    setName("");
    setMail("");
    setMessage("");
  }
  return (
    <div name="contact" className="w-full h-screen bg-blue-400 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
            Contact
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/f2e6ff2c-579f-4096-953c-a442a72932c6"
            method="POST"
            target="_blank"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-white"
            />
            <input
              onChange={(e) => setMail(e.target.value)}
              value={mail}
              type="email"
              name="email"
              placeholder="Enter your e-mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-white"
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
              rows="10"
              placeholder="Enter youe message"
              className="resize-none p-2 bg-transparent border-2 rounded-md focus:outline-none text-white placeholder:text-white"
            ></textarea>
            <button
              onClick={temizle}
              className="px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-200 bg-blue-500 text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
