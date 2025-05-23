import React, { useState } from "react";
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const SendEmail = (e) => {
        e.preventDefault();
        const result = emailjs.send("service_vfn0ezo", "template_nzu20qe", {
            name: name,
            email: email,
            message: message,
        },"J5-D4YGTUJGA9DLms");
        console.log(result);
        if (result) {

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Email Sucessfully Send",
                showConfirmButton: false,
                timer: 1500
            });
            setName("");
            setEmail("");
            setMessage("");
        }
    }
    return (
        <section id="contact" className="py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-center font-bold text-blue-500 my-12">Contact Me</h2>
                <form className="max-w-2xl mx-auto" onSubmit={SendEmail}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
                    />
                    <textarea
                        placeholder="Your Message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 mb-4 bg-gray-800 text-white rounded-lg"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;