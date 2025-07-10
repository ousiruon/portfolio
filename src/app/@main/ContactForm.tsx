"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({
  isEn,
  isModern,
}: {
  isEn: boolean;
  isModern: boolean;
}) => {
  const [isBtnHovered, setIsBtnHovered] = useState<boolean>(false);
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isName, setIsMame] = useState<boolean>(true);
  const [isEmail, setIsEmail] = useState<boolean>(true);
  const [isMessage, setIsMessage] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);
  useEffect(() => {
    if (isEmailSent) {
      const timer = setTimeout(() => {
        setIsEmailSent(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isEmailSent]);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;
    const formData = new FormData(form.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    if (!name || !email || !message) {
      if (!name) {
        setIsMame(false);
      } else setIsMame(true);
      if (!email) {
        setIsEmail(false);
      } else setIsEmail(true);
      if (!message) {
        setIsMessage(false);
      } else setIsMessage(true);
      return;
    } else {
      setIsMame(true);
      setIsEmail(true);
      setIsMessage(true);
      emailjs
        .sendForm("service_xc9b6ys", "template_hcej7rp", form.current, {
          publicKey: "zyEhp2gF0jhPbSn-t",
        })
        .then(
          () => {
            setIsEmailSent(true);
            setIsError(null);
            form.current?.reset();
          },
          (error) => {
            setIsError(error.text);
          }
        );
    }
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-start gap-6"
      >
        {isEmailSent && (
          <div className="fixed top-4 left-[50%] translate-x-[-50%] flex items-center justify-center z-40">
            <div
              className={`text-sm px-4 py-2 rounded shadow-xs  ${
                isModern
                  ? "bg-terniary-modern shadow-terniary-modern text-bg2-modern"
                  : "bg-terniary-classic shadow-terniary-classic"
              }`}
            >
              {isEn ? "Message Sent!" : "Message envoyé!"}
            </div>
          </div>
        )}
        <div className="w-full flex flex-col items-start gap-2">
          <input
            type="text"
            placeholder={
              isEn ? (isModern ? "Name" : "name") : isModern ? "Nom" : "nom"
            }
            name="name"
            className={`w-full ${
              isModern
                ? "text-base focus:border-terniary-modern"
                : "text-lg border-terniary-classic"
            } px-4 py-2 border rounded outline-0 transition-colors ease-in duration-300 `}
          />
          {!isName && (
            <div className="text-[10px] text-terniary-classic">
              {isEn ? "Name is required!" : "Le nom est requis !"}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <input
            type="email"
            placeholder={isModern ? "Email" : "email"}
            name="email"
            className={`w-full ${
              isModern
                ? "text-base focus:border-terniary-modern"
                : "text-lg border-terniary-classic"
            } px-4 py-2 border rounded outline-0 transition-colors ease-in duration-300`}
          />
          {!isEmail && (
            <div className="text-[10px] text-terniary-classic">
              {isEn ? "Email is required!" : "L'email est requis !"}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-2">
          <textarea
            className={`w-full ${
              isModern
                ? "text-base focus:border-terniary-modern"
                : "text-lg border-terniary-classic"
            } px-4 py-2 border rounded outline-0 transition-colors ease-in duration-300 resize-none`}
            placeholder={isModern ? "Message" : "message"}
            rows={4}
            name="message"
          ></textarea>
          {!isMessage && (
            <div className="text-[10px] text-terniary-classic">
              {isEn ? "Message is required!" : "Le message est obligatoire !"}
            </div>
          )}
        </div>
        {isError && (
          <div className="text-[10px] text-terniary-classic">
            {isEn ? "Error: " : "Erreur: "}
            {isError}
          </div>
        )}
        <motion.button
          onHoverStart={() => setIsBtnHovered(true)}
          onHoverEnd={() => setIsBtnHovered(false)}
          type="submit"
          className={` ${
            isModern
              ? "px-4 py-2 border-2 hover:border-terniary-modern hover:bg-terniary-modern hover:text-bg2-modern"
              : ""
          } rounded transition-colors ease-in duration-300 cursor-pointer relative`}
        >
          <motion.div
            animate={
              !isModern
                ? { x: isBtnHovered ? -2 : 0, y: isBtnHovered ? -2 : 0 }
                : {}
            }
            className={`${
              !isModern &&
              "relative bg-bg-classic z-4 h-full w-full px-4 py-2 rounded border-2 border-terniary-classic"
            }`}
          >
            {isEn
              ? isModern
                ? "Send"
                : "send"
              : isModern
              ? "Envoyer"
              : "envoyer"}
          </motion.div>
          {!isModern && (
            <div className="absolute top-0 left-0 w-full h-full rounded bg-terniary-classic"></div>
          )}
        </motion.button>
      </form>
    </>
  );
};
export default ContactForm;
