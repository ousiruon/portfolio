import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcVoicePresentation } from "react-icons/fc";
import { useSelector } from "react-redux";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { isEn, isModern } = useSelector((state: RootState) => state.menu);
  const contact = useSelector((state: RootState) => state.contact);
  const [contactContent, setContactContent] = useState<
    {
      important: boolean;
      text: string;
    }[]
  >([]);
  useEffect(() => {
    if (isEn) {
      setContactContent(contact.en);
    } else {
      setContactContent(contact.fr);
    }
  }, [isEn, isModern]);
  return (
    <>
      <div
        id="contact"
        className="flex flex-row items-center justify-start py-10 md:py-20 px-4 w-full"
      >
        <div className="flex flex-col gap-10 w-full max-w-[900px] mx-auto">
          {isModern && (
            <div className="flex flex-row w-full md:w-3/4 relative mb-10 gap-4">
              <div className="flex flex-row leading-none items-center justify-start gap-2">
                <span className="text-xl md:text-2xl text-terniary-modern font-bold">
                  03.
                </span>
                <div className="transition-colors ease-in duration-300 hover:text-terniary-modern w-full text-3xl md:text-4xl font-bold">
                  Contact
                </div>
              </div>
              <div className="relative flex-1">
                <div className="absolute top-[50%] translate-y-[-50%] right-0 w-full h-[1px] bg-text-modern opacity-50"></div>
              </div>
            </div>
          )}
          {!isModern && (
            <div className="flex flex-row relative mb-10 gap-4">
              <div className="flex flex-row items-center justify-center gap-2">
                <div className="transition-colors ease-in duration-300 border-b-2 border-terniary-classic text-4xl font-bold">
                  Contact
                </div>
                <FcVoicePresentation size={26} />
              </div>
            </div>
          )}
          <div className="flex md:flex-row flex-col-reverse gap-10 md:gap-0 w-full">
            <div className="w-full md:w-1/2 flex flex-col items-start gap-6 md:gap-12 md:pr-10 text-justify">
              <p>
                {contactContent.map((item, index) => (
                  <span
                    key={index}
                    className={
                      item.important
                        ? isModern
                          ? "text-terniary-modern"
                          : "text-terniary-classic"
                        : ""
                    }
                  >
                    {item.text}
                    {index < contactContent.length - 1 && " "}
                  </span>
                ))}
              </p>
              <a
                href={contact.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-2xl p-2 rounded hover:rounded-lg ${
                  isModern
                    ? "bg-terniary-modern text-bg-modern"
                    : "bg-terniary-classic text-bg-classic"
                } transition-all ease-in duration-300 flex items-start justify-start relative`}
              >
                <FaGithub />
              </a>
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:pl-10">
              <ContactForm isEn={isEn} isModern={isModern} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
