import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser"; //or you could still import emailjs from "@emailjs/browser" if you prefer
import image1 from "../assets/Scale-Balance-Of-Justice.png";
import image2 from "../assets/Scale Balancing Image3-B.jpg";
import image3 from "../assets/Scale balance of justice3.png";
import image4 from "../assets/Scale Balancing Image3-A.jpg";

const ContactUs = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  // EmailJS configuration (replace with your credentials)
  const EMAILJS_SERVICE_ID = "service_ew0rp4o";
  const EMAILJS_TEMPLATE_ID = "template_7f3birg";
  const EMAILJS_USER_ID = "wHSIOyeoeXvqzZvUq";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    setSubmissionSuccess(false);

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target,
        EMAILJS_USER_ID
      );

      setSubmissionSuccess(true);
      e.target.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmissionSuccess(false), 5000);
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmissionError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-black text-white">
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <img
              key={img}
              src={img}
              alt="Background"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              } blur-sm`}
            />
          ))}
          <div className="container mx-auto text-center mt-30 relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Contact Us For More Advice
            </h1>
            <p className="text-2xl text-neutral-300 max-w-2xl mx-auto">
              Empowering Citizens Through Legal Knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {/* Contact Details */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-neutral-900 mr-2" />
                <p>info@legalfirstaid.com</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-neutral-900 mr-2" />
                <p>+237 6 78 02 95 98</p>
              </div>
              <div className="flex items-center">
                <MapPin className="text-neutral-900 mr-2" />
                <p>Molyko St, Buea, Cameroon</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold text-xl mb-6">Get In Touch</h3>

            {/* Status Messages */}
            {submissionSuccess && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg flex items-center">
                <CheckCircle2 className="mr-2" />
                Message sent successfully! We'll respond shortly.
              </div>
            )}

            {submissionError && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg flex items-center">
                <AlertCircle className="mr-2" />
                {submissionError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="from_name"
                  required
                  className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="from_email"
                  required
                  className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-neutral-600 hover:bg-black text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
