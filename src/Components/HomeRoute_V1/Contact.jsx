import React, { useEffect, useState, useRef } from "react";
// import contactImage from "../../assets/images/contact_img.webp";

import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Contact.css';
import {
  AlertCircle,
  ArrowRight,
  Building2,
  Check,
  FileText,
  Loader2,
  Mail,
  ShieldCheck,
  Smartphone,
  User,
} from 'lucide-react'


const ContactUs = () => {
  const recaptchaRef = useRef(null);
  const recaptchaContainerRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    company: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [shouldLoadRecaptcha, setShouldLoadRecaptcha] = useState(
    () => !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const element = recaptchaContainerRef.current;
    if (!element || !("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadRecaptcha(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px 0px" });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    let temp = {};

    if (!formData.firstname.trim()) temp.firstname = "First name is required";
    if (!formData.lastname.trim()) temp.lastname = "Last name is required";
    if (!formData.company.trim()) temp.company = "Company name is required";
    if (!formData.email.trim()) temp.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter valid email";

    if (!formData.mobile.trim()) temp.mobile = "Mobile is required";
    else if (!/^[0-9]{10}$/.test(formData.mobile))
      temp.mobile = "Enter valid 10-digit mobile";

    if (!formData.message.trim())
      temp.message = "Please enter your requirement";

    if (!captchaToken) temp.captcha = "Please verify captcha";

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  //Submit form
  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    setApiMessage("");

    try {
      const res = await axios.post(
        "https://www.codetrios.com/api/submit-contact.php",
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          company: formData.company,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          captcha: captchaToken,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      setApiMessage("Your enquiry has been submitted successfully.");
      setFormData({
        firstname: "",
        lastname: "",
        company: "",
        mobile: "",
        email: "",
        message: "",
      });

      recaptchaRef.current.reset();
      setCaptchaToken("");
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      setApiMessage(
        err?.response?.data?.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="contactForm">
      {/* <div className="">
        <img src={contactImage} loading="lazy" /> 
      </div> */}
        <div className="contactHead">
          <h3>Get in touch</h3>
          <span><Mail /></span>
        </div>
        <div className="fomrStyle">
          <div className="inputFlex">
            <div className="group">
              <span className="icon"><User /></span>
              <label>First name</label>
              <input
                type="text"
                name="firstname"
                placeholder="First name"
                value={formData.firstname}
                onChange={handleChange}
              />
              {errors.firstname && (
                <p className="error-text"><AlertCircle /> {errors.firstname}</p>
              )}
            </div>
            <div className="group">
              <span className="icon"><User /></span>
              <label>Last name</label>
              <input
                type="text"
                name="lastname"
                placeholder="Last name"
                value={formData.lastname}
                onChange={handleChange}
              />
              {errors.lastname && (
                <p className="error-text"><AlertCircle /> {errors.lastname}</p>
              )}
            </div>
          </div>
          <div className="inputFlex">
            <div className="group">
              <span className="icon"><Building2 /></span>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && (
                <p className="error-text"><AlertCircle /> {errors.company}</p>
              )}
            </div>
            <div className="group">
              <span className="icon"><Smartphone /></span>
              <label>Mobile</label>
              <input
                type="number"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <p className="error-text"><AlertCircle /> {errors.mobile}</p>
              )}
            </div>
          </div>
          <div className="inputFlex">
            <div className="group">
              <span className="icon"><Mail /></span>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="error-text"><AlertCircle /> {errors.email}</p>
              )}
            </div>
          </div>
          <div className="inputFlex">
            <div className="group">
              <span className="icon"><FileText /></span>
              <label>Your Requirement?</label>
              <textarea
                name="message"
                placeholder="Your Requirement?"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="error-text"><AlertCircle /> {errors.message}</p>
              )}
            </div>
          </div>
          <div className="inputFlex">
            <div className="group">
              {/* <div
                className="g-recaptcha"
                data-sitekey="6Ldc9-YrAAAAAPlEy99RO6N06uFh6LRqjJ76ggk4"
              ></div> */}
              <div className="recaptchaSlot" ref={recaptchaContainerRef}>
                {shouldLoadRecaptcha && (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Ldc9-YrAAAAAPlEy99RO6N06uFh6LRqjJ76ggk4"
                    onChange={(token) => setCaptchaToken(token)}
                  />
                )}
              </div>
              {errors.captcha && (
                <p className="error-text"><AlertCircle /> {errors.captcha}</p>
              )}
            </div>
          </div>
          <div className="buttonFlex">
            <button
              type="button"
              className="ctBtn ct-primery-btn"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
    </div>
  );
};

export default ContactUs;
