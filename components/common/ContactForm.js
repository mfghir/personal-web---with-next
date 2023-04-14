import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const { locale } = useRouter();

  const schema = Yup.object().shape({
    name: Yup.string().required(t("errorNameOne")).min(2, t("errorNameTwo")),
    email: Yup.string().email(t("errorEmailOne")).required(t("errorEmailTwo")),
    message: Yup.string()
      .required(t("errorMessageOne"))
      .min(10, t("errorMessageTwo")),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_APP_SERV,
        process.env.NEXT_PUBLIC_APP_TEMP,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_APP_KEY
      );
      toast.success(t("toastSucc"));
      reset();
    } catch (error) {
      toast.error(t("toastErr"));
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <input
            className="main-input"
            id="name"
            type="text"
            {...register("name")}
          />
          <span className="highlight-span"></span>
          <label
            className={`lebal-email ${locale === "fa" ? "right-0" : "left-0"}`}
          >
            {t("name")}
          </label>
          {errors.name && (
            <span className="text-[#ff6464]">{errors.name.message}</span>
          )}
        </div>

        <div className="group">
          <input
            className="main-input"
            id="email"
            type="text"
            {...register("email")}
          />
          <span className="highlight-span"></span>
          <label
            className={`lebal-email ${locale === "fa" ? "right-0" : "left-0"}`}
          >
            {t("email")}
          </label>
          {errors.email &&  <span className="text-[#ff6464]">{errors.email.message}</span>}
        </div>

        <div className="group">
          <textarea
            className="main-input"
            id="message"
            {...register("message")}
          />
          <span className="highlight-span"></span>
          <label
            className={`lebal-email ${locale === "fa" ? "right-0" : "left-0"}`}
          >
            {t("message")}
          </label>
          {errors.message &&  <span className="text-[#ff6464]">{errors.message.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? `${t("send")}...` :  t("send")}
        </button>
      </form>

      <style jsx>{`
        .group {
          position: relative;
          margin: 20px 0;
        }

        .form {
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;

          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          position: relative;
        }

        .form p {
          padding-bottom: 20px;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 0.5px;
          color: white;
        }

        .main-input {
          width: 100%;

          font-size: 16px;
          padding: 10px 10px 10px 5px;
          border: none;
          border-bottom: 1px solid #6c6c6c;
          background: transparent;
        }

        .main-input:focus {
          outline: none;
          border-bottom-color: #daa520;
        }

        .lebal-email {
          color: #999999;
          font-size: 18px;
          font-weight: normal;
          position: absolute;
          pointer-events: none;
          left: 5px;
          top: 10px;
          transition: 0.2s ease all;
          -moz-transition: 0.2s ease all;
          -webkit-transition: 0.2s ease all;
        }

        .main-input:focus ~ .lebal-email,
        .main-input:valid ~ .lebal-email {
          top: -20px;
          font-size: 14px;
          color: #daa520;
        }

        .highlight-span {
          position: absolute;
          height: 60%;
          width: 0px;
          top: 25%;
          left: 0;
          pointer-events: none;
          opacity: 0.5;
        }

        .main-input:focus ~ .highlight-span {
          -webkit-animation: input-focus 0.3s ease;
          animation: input-focus 0.3s ease;
        }

        @keyframes input-focus {
          from {
             {
              /* background: #daa520; */
            }
          }

          to {
            width: 185px;
          }
        }

        form button {
          width: 100%;
          padding: 10px 0;
          background: #daa520;
          margin-top: 10px;
          color: #ffffff;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
