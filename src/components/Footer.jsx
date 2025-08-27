import { MailIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <section
      id="contact"
      className="flex items-center px-6 lg:px-12 py-16 bg-gray-950 text-gray-200"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <div className="flex gap-5">
              <h2 className="text-3xl font-bold mb-4 text-violet-400">
                Contact me
              </h2>

              <Button className="cursor-pointer w-15 flex items-center bg-violet-600 hover:bg-purple-700 transition-all duration-300">
                <MailIcon className="w-[18px]" />

              </Button>
            </div>
            <p className="text-gray-400 mb-6">
              Get in touch and let's discuss how I can help you to achieve goals.
            </p>

            {/* Botón */}

          </div>

           <div className="flex flex-col lg:items-end">
            <a
              href="mailto:tu-correo@correo.com?subject=Contacto%20desde%20mi%20web"
              target="_blank"
              rel="noopener noreferrer"
            >

            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
