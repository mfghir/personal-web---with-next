import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { validation } from "./validation";

// import { validation } from "./validation";

const Form = () => {
  const serv = process.env.APP_SERV;
  const temp = process.env.APP_TEMP;
  const apiKey = process.env.APP_KEY;

  const [error, setError] = useState({});
  const [touched, setTouched] = useState({});
  const [inpVal, setinpVal] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setinpVal({ ...inpVal, [e.target.name]: e.target.value });
    console.log(inpVal);
  };

  const touchedHandler = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.keys(error).length) {
      toast.success("toastSucc");
    } else {
      toast.error("toastErr");
    }

    emailjs
      .sendForm(
        serv,
        temp,
        e.target,
        apiKey
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setinpVal({
      name: "",
      email: "",
      message: "",
    });

    setTouched({
      name: false,
      email: false,
      message: false,
    });
  };

  useEffect(() => {
    setError(validation(inpVal));
  }, [inpVal, touched]);

  return (
    <section className="text-grayText dark:text-white" touched={touched} inpVal={inpVal}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            className="main-input"
            type="text"
            name="name"
            required
            value={inpVal.name}
            onChange={changeHandler}
            onFocus={touchedHandler}
            // placeholder="nameInp"
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Name</label>
          {error.name && touched.name && (
            <span className="text-[#ff6464]">{error.name}</span>
          )}
        </div>

        <div className="group">
          <input
            className="main-input"
            type="email"
            name="email"
            required
            value={inpVal.email}
            onChange={changeHandler}
            onFocus={touchedHandler}
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Email</label>
          {error.email && touched.email && (
            <span className="text-[#ff6464]">{error.email}</span>
          )}
        </div>

        <div className="group">
          <textarea
            className="main-input"
            type="text"
            name="message"
            required
            value={inpVal.message}
            onChange={changeHandler}
            onFocus={touchedHandler}
            // maxlength="1000"
            // minlength="200"
            rows="5"
          />
          <span className="highlight-span"></span>
          <label className="lebal-email">Message...</label>
          {error.message && touched.message && (
            <span className="text-[#ff6464]">{error.message}</span>
          )}
        </div>

        <button type="submit">send</button>
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
          color: #ffffff;
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
    </section>
  );
};

export default Form;
