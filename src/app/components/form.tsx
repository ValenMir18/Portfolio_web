"use client";
import { Console } from "console";
import { useState } from "react";

type ContactProps = {
  onSubmitSuccess: () => void;
};

const Form: React.FC<ContactProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const data = await response.json();
      console.log(data);
      setEmail('')
      setMessage('')
      setName('')
      onSubmitSuccess();
      setStatus("Email enviado exitosamente");
    } catch (error) {
      console.error(error);
      setStatus("Error al enviar el email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col w-full lg:mt-0 mt-8 ">
          <input
            type="text"
            value={name}
            required
            id='name'
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="lg:mb-2 lg:h-8 md:h-12 bg-gray-800 p-2 lg:text-sm md:text-2xl rounded mb-3"
          />
          <input
            type="email"
            value={email}
            required
            id='email'
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className=" lg:mb-2 lg:h-8 md:h-12 bg-gray-800 p-2 lg:text-sm md:text-2xl rounded mb-3"
          />
          <textarea
            name="Message"
            value={message}
            autoComplete="off"
            required
            onChange={(e) => setMessage(e.target.value)}
            id="Message"
            placeholder="Your message"
            className="lg:h-32 h-44 bg-gray-800 p-2 lg:text-sm md:text-2xl rounded "
          ></textarea>

          <div>
            <button
              type="submit"
              className={`hover:text-white bg-rose-700 hover:bg-rose-900 focus:ring-2 focus:outline-none font-medium rounded-lg lg:text-sm md:text-2xl px-3 py-0.5 text-center mt-2 text-white focus:ring-pink-400 
                ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={loading}
            >
              {loading ? "SENDING..." : "SEND"}
            </button>
            
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;