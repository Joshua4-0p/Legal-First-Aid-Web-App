import {
  Scale,
  BookText,
  ShieldCheck,
  Users,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { useState, useEffect } from "react";
import techChantierLogo from "../assets/TC-Logo.png";
import ZitoLogo from "../assets/Zito logo.png";
import ZingerLogo from "../assets/Zinger Logo .jpg";
import RebaseLogo from "../assets/rebase logo.png";
import POSLogo from "../assets/POS logo.png";
import BuyamLogo from "../assets/Buyam Logo.png";
import AfrovisionLogo from "../assets/Afrovision logo.png";
import NkwaLogo from "../assets/Nkwa Logo.jpg";
import image1 from "../assets/Scale-Balance-Of-Justice.png";
import image2 from "../assets/Scale Balancing Image3-B.jpg";
import image3 from "../assets/Scale balance of justice3.png";
import image4 from "../assets/Scale Balancing Image3-A.jpg";

const AboutPage = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
    
  return (
    <div className="min-h-screen bg-white text-black">
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
              About Legal First Aid
            </h1>
            <p className="text-2xl text-neutral-300 max-w-2xl mx-auto">
              Empowering Citizens Through Legal Knowledge
            </p>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <Scale className="w-16 h-16 mx-auto mb-6 text-gray-800" />
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Legal First Aid aims to democratize access to Cameroon's legal
            system, providing citizens with the tools and knowledge to
            understand their rights, navigate legal challenges, and make
            informed decisions in personal and professional matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 bg-gray-50 rounded-xl">
            <BookText className="w-12 h-12 mb-6 text-gray-800" />
            <h3 className="text-2xl font-bold mb-4">Legal Education</h3>
            <p className="text-gray-600">
              We break down complex legal jargon into simple, actionable
              information covering essential areas like civil rights, business
              law, family law, and property disputes.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl">
            <ShieldCheck className="w-12 h-12 mb-6 text-gray-800" />
            <h3 className="text-2xl font-bold mb-4">Court Support</h3>
            <p className="text-gray-600">
              Our platform helps users prepare legal documents, understand court
              procedures, and connect with verified legal professionals for
              personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg max-w-3xl mx-auto">
              To become Cameroon's leading platform for legal empowerment,
              bridging the gap between citizens and the justice system through
              technology and education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-4">100k+</div>
              <p className="text-gray-400">Users Empowered</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-4">500+</div>
              <p className="text-gray-400">Legal Experts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold mb-4">24/7</div>
              <p className="text-gray-400">Legal Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      {/* Sponsorship Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center bg-gray-50 p-12 rounded-2xl">
          <Briefcase className="w-16 h-16 mx-auto mb-6 text-gray-800" />
          <h3 className="text-2xl font-bold mb-4">Proudly Supported By</h3>

          {/* Logo Container */}
          <div className="relative h-32 mb-8 mx-auto w-full max-w-4xl">
            {[
              techChantierLogo,
              ZitoLogo,
              ZingerLogo,
              RebaseLogo,
              POSLogo,
              BuyamLogo,
              AfrovisionLogo,
              NkwaLogo,
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Sponsor"
                className={`absolute inset-0 mx-auto h-32 w-auto object-contain transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Supported by Cameroon's leading tech innovators and social
            enterprises. Our partners share our commitment to leveraging
            technology for social good, enabling us to maintain an open-access
            platform while continuously improving our services and expanding our
            legal knowledge base.
          </p>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <HeartHandshake className="w-16 h-16 mx-auto mb-6 text-gray-800" />
            <h2 className="text-4xl font-bold mb-6">Future Developments</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-bold mb-4">Upcoming Features</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>AI-powered legal document generator</li>
                <li>Multilingual support (French & Local Languages)</li>
                <li>Mobile app with offline access</li>
                <li>Interactive legal scenario simulations</li>
              </ul>
            </div>

            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-bold mb-4">Community Goals</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>Expand to all 10 regions of Cameroon</li>
                <li>Partner with 100+ legal aid organizations</li>
                <li>Train 1,000 community legal advocates</li>
                <li>Launch school legal literacy program</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
