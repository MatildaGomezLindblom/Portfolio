//Inspired by https://donsmog.hashnode.dev/how-to-use-emailjs-for-a-contact-us-page
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "../ButtonPrimary";
import "../../styles/Contact.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, dirtyFields } = formState;

  const isFormDirty =
    Object.keys(dirtyFields).length > 0 || Object.keys(errors).length > 0;

  const onSubmit = (data) => {
    setLoading(true);

    const templateParams = { ...data };

    emailjs
      .send(
        "service_7gsn6xo",
        "template_cwx8gog",
        templateParams,
        "V2uXvrjRLNlSSPVuo"
      )
      .then(
        () => {
          reset();
          setLoading(false);
          alert("Your message has ben sent!");
        },
        (error) => {
          console.error("Something went wrong:", error);
          setLoading(false);
          alert("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-me-section">
        <h2 className="form-section-title">Let's talk</h2>
        <p>Have a question or want to connect? I’d love to hear from you!</p>
        <p className="smaller-text">
          Contact me directly through the form or email{" "}
          <a style={{}} href="mailto:matildagoli@outlook.com">
            matildagoli@outlook.com
          </a>
        </p>
        <svg
          className="coffee"
          xmlns="http://www.w3.org/2000/svg"
          width="165"
          height="158"
          viewBox="0 0 165 158"
          fill="none"
        >
          <path
            d="M139.3 112.136C189.094 37.2995 81.2472 -25.6531 32.6715 14.5149C-52.5031 84.947 60.5167 186.547 119.973 134.461M139.3 112.136C134.94 118.69 161.904 134.133 163.214 139.374C163.852 141.926 155.025 154.116 152.076 155.426C149.128 156.737 121.75 132.999 119.973 134.461M139.3 112.136C139.3 112.136 134.041 119.822 130.128 124.305C126.439 128.53 119.973 134.461 119.973 134.461M46.7578 27.011C46.6054 27.0824 46.4511 27.1561 46.2951 27.2321M46.2951 27.2321C34.99 32.7435 14.3523 50.6111 18.7468 80.0806C19.5112 83.8705 20.9745 89.8875 20.7124 83.6361C20.3848 75.8219 15.7986 44.7009 48.5576 28.6489C74.7648 15.8074 57.9689 22.3538 46.2951 27.2321ZM73.6202 58.4117C70.9995 35.1528 41.1888 41.377 73.6202 71.1877C75.004 72.4597 73.6202 83.6361 71.6547 83.6361C55.9303 73.1532 51.8027 61.8186 51.0165 53.1702C49.7061 38.7562 32.0162 72.498 68.0512 91.4983C69.2523 92.3725 71.6547 96.1517 71.6547 104.274C71.6547 114.428 67.7236 94.7742 60.5166 96.4121C53.3096 98.0501 65.5605 100.102 66.4132 104.274C68.8235 116.068 52.6635 96.4121 46.7578 96.4121C39.8784 96.4121 69.0339 109.512 69.0339 114.428C69.0339 118.36 60.5166 120.57 64.1201 120.326C72.2006 119.78 89.9997 115.805 96.5515 104.274C104.741 89.8603 104.086 88.2224 102.776 92.8086C100.862 99.5053 76.5685 119.999 75.9133 112.136C75.2582 104.274 96.5515 97.3949 91.3101 95.1018C86.0686 92.8086 75.9133 108.533 74.9306 103.619C73.9478 98.7053 73.2926 95.757 74.603 92.8086C75.9133 89.8603 98.5171 86.3006 98.5171 53.1702C98.5171 50.5476 96.71 59.3668 90.6549 67.9118C85.3652 75.3767 81.81 71.1877 74.603 85.9293C73.6202 87.9395 73.7597 72.7407 75.9133 71.1877C99.8233 53.9457 77.5513 17.7905 73.6202 58.4117ZM126.197 120.326C187.456 43.3905 84.265 -18.4769 35.1264 20.4592C-42.1849 81.7186 66.4132 187.203 126.197 120.326ZM133.076 61.408C145.852 91.4983 113.255 129.547 86.2305 131.185C59.2062 132.823 88.0488 127.246 90.6549 126.271C117.952 116.056 138.817 89.9083 130.128 66.3218C120.955 41.425 123.929 43.7181 133.076 61.408Z"
            stroke="currentColor"
            stroke-width="3.2759"
          />
        </svg>
        <div>
          <a href="https://github.com/MatildaGomezLindblom">
            <FaGithub className="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/matilda-gomez-lindblom/">
            <FaLinkedin className="github-icon" />
          </a>
        </div>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label htmlFor="firstName">Name</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder=" "
              />
              {errors.firstName && <span>This field is required</span>}
            </div>
          </div>
          <div>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder=" "
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              {...register("message", { required: true })}
              placeholder=" "
            />
            {errors.message && <span>This field is required</span>}
          </div>

          <div className="contact-button-container">
            <ButtonPrimary
              className="send-button"
              disabled={!isFormDirty || loading}
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
