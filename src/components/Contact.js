import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      message: form.current.message.value,
      name: form.current.name.value,
      email: form.current.email.value
    }

    // const message = form.current.message.value;
    // const name = form.current.name.value;
    // const email = form.current.email.value;

    try {
      const res = await fetch("http://localhost:4000/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await res.json();

      if (!response.success) {
        alert(response.message);
      } else {
        alert(response.message);
        form.current.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="mx-auto text-center p-5">
        <h5 className="text-2xl">Get In Touch</h5>
        <h2 className="font-bold text-3xl">Contact Us</h2>
      </div>

      <div
        className="flex justify-center gap-24 bg-yellow-100 p-10 mx-auto rounded-xl"
        style={{ width: "800px" }}
      >
        <div className="flex flex-col">
          <article className="pb-24">
            <MdOutlineEmail className="text-3xl" />
            <h4>Email</h4>
            <h5>sakibshaikh4724@gmail.com</h5>
            <a
              href="mailto:sakibshaikh4724@gmail.com"
              target="_blank"
              className="font-bold text-red-900 w-36 hover:text-gray-700"
            >
              Send a Message
            </a>
          </article>

          <article className="pb-10">
            <BsWhatsapp className="text-3xl" />
            <h4>Whatsapp</h4>
            <h5>+919657134724</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+919657134724"
              target="_blank"
              className="font-bold text-red-900 w-36 hover:text-gray-700"
            >
              Send a Message
            </a>
          </article>
        </div>

        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="mb-5 w-80 border border-b-gray-700 p-2"
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              required
              className="mb-5 w-80 border border-b-gray-700 p-2"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="mb-5 w-80 border border-b-gray-700 p-2"
            />
            <button
              className="btn btn-primary m-auto bg-red-900 text-white w-36 border border-r-2 rounded-lg hover:bg-gray-700 p-2"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
