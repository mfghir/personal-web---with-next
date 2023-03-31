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
        "service_mvy485h",
        "template_3unplb2",
        e.target,
        "ikAgJ0NQP9m1rJohf"
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
    <section className="formStyles" touched={touched} inpVal={inpVal}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            required
            value={inpVal.name}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder="nameInp"
          />
          {error.name && touched.name && <span>{error.name}</span>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            required
            value={inpVal.email}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder="email"
          />
          {error.email && touched.email && <span>{error.email}</span>}
        </div>

        <div>
          <textarea
            type="text"
            name="message"
            required
            value={inpVal.message}
            onChange={changeHandler}
            onFocus={touchedHandler}
            placeholder="messageInp"
            // maxlength="1000"
            // minlength="200"
            rows="10"
          />
          {error.message && touched.message && <span>{error.message}</span>}
        </div>

        <button type="submit">submitBtn</button>
      </form>

      <style jsx>{`
        form div {
          margin: 10px 0;
        }

        form div span {
          color: #ff6464;
        }

        form input,
        form textarea {
          width: 100%;
          outline: none;
          border: 2px solid #ccc;

          border-radius: 8px;
          padding: 5px 10px;
        }

        form button {
          width: 100%;
          outline: none;
          border: 2px solid #47a3da;

          background: #ffffff;
          padding: 5px 10px;
          border-radius: 8px;

          cursor: pointer;
          transition: 0.4s;
        }

        form button:hover {
          background: #47a3da;
          color: #ffffff;
        }
      `}</style>
    </section>
  );
};

export default Form;
