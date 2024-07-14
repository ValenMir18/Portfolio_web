'use client'

import Form from "app/app/components/form";
import { useState } from "react";

const Contact: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = () => {
    setMessageSent(true);
  };

  const handleNewMessage = () => {
    setMessageSent(false); // Resetear el estado para permitir enviar otro mensaje
  };

  return (
    <section id="contact">
      <div className={`p-5 lg:w-[900px] md:px-10 sm:mx-auto md:mx-auto dark:bg-[#0a192fee] bg-gray-200 shadow-lg drop-shadow-lg text-gray-300 ${messageSent ? '' : 'lg:grid lg:grid-cols-2'}`}>
      <div>
          
          {messageSent ? (
            <div className="text-center order-2 md:mb-8 lg:order-1 lg:col-span-1">
            <h2 className="lg:text-[35px] text-[42px]">Thank you for your message!</h2>
            <p className="py-2 px-8 flex justify-center lg:text-[18px] text-[28px]">
            I appreciate your interest and I will contact you soon.
            </p>
            <button
              onClick={handleNewMessage}
              className="mt-4 bg-rose-700 hover:bg-rose-900 text-white font-bold py-2 px-4 rounded"
            >
              Send another message
            </button>
          </div>
          ) : (
            <div className="text-center order-2 md:mb-8 lg:order-1 lg:col-span-1">
              <h2 className="lg:text-[35px] text-[42px]">Let's connect!</h2>
              <p className="py-2 px-8 flex justify-center lg:text-[18px] text-[28px]">
              If you want to know more about me or my work, or if you would just
              like to say hello, send me a message. I'd love to hear from you.
            </p>
            <div className="mt-2">
            <i className="fa fa-code" aria-hidden="true"></i>
            <i className="fa fa-heart ml-2" aria-hidden="true"></i>
          </div>
          </div>
            
          )}
          
        </div>
        <div className={`order-1 lg:order-2 lg:col-span-1 ${messageSent ? 'hidden' : ''}`}>
          <Form onSubmitSuccess={handleFormSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
