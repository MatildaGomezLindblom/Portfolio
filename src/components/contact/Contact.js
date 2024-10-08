//Inspired by https://donsmog.hashnode.dev/how-to-use-emailjs-for-a-contact-us-page
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import ButtonPrimary from "../ButtonPrimary";
import "../../styles/Contact.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Footer from '../../components/footer';

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
      <div className="custom-shape-divider-top-1701897315">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
      <div className="contact-me-section">
        <h2 className="form-section-title">Say hi!</h2>
        <p>
          Contact me here or email{" "}
          <a style={{}} href="mailto:matildagoli@outlook.com">
            matildagoli@outlook.com
          </a>
        </p>

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
            <div>
            <a href="https://github.com/MatildaGomezLindblom"><FaGithub className="github-icon"/></a>
            <a href="www.linkedin.com/in/matilda-gomez-lindblom"><FaLinkedin className="github-icon"/></a>
            </div>
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
      <Footer></Footer>
    </div>
  );
}

export default Contact;
