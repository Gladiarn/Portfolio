import { Facebook, GithubIcon, Linkedin, Mail, Phone } from "lucide-react";
import React from "react";
import { ContactInfoTypes, FooterContactInfo } from "../types";
import Link from "next/link";

export default function Contact() {
  const contactInformation: ContactInfoTypes[] = [
    {
      title: "Email",
      value: "bulilaniannecarl@gmail.com",
      icon: <Mail className="text-accent" />,
    },
    {
      title: "Phone Number",
      value: "+63 918 317 2574",
      icon: <Phone className="text-accent" />,
    },
  ];

  const footerContactInformation: FooterContactInfo[] = [
    {
      icon: <Linkedin className="text-foreground group-hover:text-accent" />,
      value: "https://www.linkedin.com/in/ianne-carl-bulilan-321421349/",
    },
    {
      icon: <Facebook className="text-foreground group-hover:text-accent" />,
      value: "https://www.facebook.com/ianne.carl",
    },
    {
      icon: <GithubIcon className="text-foreground group-hover:text-accent" />,
      value: "https://github.com/Gladiarn",
    },
  ];
  return (
    <div className="w-full py-5 flex flex-col items-center gap-5 px-4 bg-card/50 backdrop-blur-sm mt-0 sm:mt-6">
      <div className="flex flex-col items-center justify-center max-w-[600px] text-center gap-4">
        <p className="text-[25px] text-accent/60 font-semi-nold tracking-widest">
          Get in <b className="text-accent">Touch</b>
        </p>
        <p className="text-[13px] text-secondary">
          If you&apos;d like to get in touch, please fill out the form below
          with your contact information and message, and I&apos;ll get back to
          you as soon as possible.
        </p>
      </div>

      <div className=" w-full flex sm:flex-row flex-col gap-5 sm:justify-center sm:items-start items-center">
        <div className="w-full flex flex-col gap-4 justify-center max-w-[500px]">
          <div className="text-center">
            <p className="text-[20px] text-accent font-medium">
              Contact Information
            </p>
          </div>

          {contactInformation.map((contact, index) => (
            <div key={index} className="w-full flex gap-2 items-center">
              <div className="p-2 rounded-full bg-card">{contact.icon}</div>

              <div className="flex flex-col">
                <p className="text-semibold text-accent tracking-wider">
                  {contact.title}
                </p>
                <p className="text-[14px] text-foreground ml-4">
                  {contact.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-4 max-w-[500px]">
          <p className=" font-medium text-accent tracking-widest">My Socials</p>
          <div className="w-full flex gap-4 justify-center">
            {footerContactInformation.map((footer, index) => (
              <Link
              href={footer.value}
                key={index}
                className="p-2 rounded-full bg-accent inline-block hover:bg-foreground group transition-all ease-in-out duration-200"
              >
                {footer.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
