/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FloatingNotif from './FloatingNotif';
import { BiCommentError } from 'react-icons/bi';
import { PiWarningCircleFill } from 'react-icons/pi';
import { FiX, FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const NOTIFICATION_TTL = 5000;
const PUBLIC_kEY = '6LcLKnkqAAAAAJyPa6kv7Nzi9h8y60DUW2fkB6l6';

const Form = () => {
  const form = useRef();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userSubject, setUserSubject] = useState('');
  const [userText, setUserText] = useState('');
  const [errors, setErrors] = useState({
    username: false,
    email: '',
    subject: false,
    message: false,
  });
  const [userSub, setUserSub] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [send, setSend] = useState('Send Message');
  const [errorNotif, setErrorNotif] = useState(false);

  const [focus, setFocus] = useState({
    username: false,
    email: false,
    subject: false,
    message: false,
  });

  const Notification = ({ children }) => {
    useEffect(() => {
      const timeoutRef = setTimeout(() => {
        setUserSub(false);
      }, NOTIFICATION_TTL);

      return () => clearTimeout(timeoutRef);
    }, []);

    return (
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{
          duration: 0.5,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 60,
        }}
        className={`px-4 py-3 fixed top-4 right-4 z-50 flex space-x-3 items-center rounded-xl text-sm shadow-2xl text-white pointer-events-auto backdrop-blur-xl border ${
          !errorNotif 
            ? 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 border-purple-400/50' 
            : 'bg-gradient-to-r from-red-600/90 to-red-500/90 border-red-400/50'
        }`}
      >
        {children}
      </motion.div>
    );
  };

  const handleChange = (e, setter, field) => {
    const value = e.target.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setter(value);

    if (field === 'email') {
      if (value.trim() === '') {
        setErrors({
          ...errors,
          [field]: 'Email is required',
        });
      } else if (!emailRegex.test(value)) {
        setErrors({
          ...errors,
          [field]: 'Invalid email address',
        });
      } else {
        setErrors({
          ...errors,
          [field]: '',
        });
      }
    } else {
      setErrors({
        ...errors,
        [field]: value.trim() === '',
      });
    }
  };

  const handleFocus = field => {
    setFocus({
      ...focus,
      [field]: true,
    });
  };

  const handleBlur = field => {
    setFocus({
      ...focus,
      [field]: false,
    });
  };

  const sub = e => {
    e.preventDefault();
    if (
      !errors.username &&
      errors.email === '' &&
      !errors.subject &&
      !errors.message &&
      userName.trim() !== '' &&
      userEmail.trim() !== '' &&
      userSubject.trim() !== '' &&
      userText.trim() !== '' &&
      capVal != null
    ) {
      setSend('Sending...');
      setTimeout(() => setSend('Send Message'), 1000);
      emailjs
        .sendForm(
          'service_m6zqb38',
          'template_atk9df3',
          form.current,
          {
            publicKey: 'sA_P3nSKIOHL1Z_mt',
          },
        )
        .then(
          () => {
            reset();
            setIsNotifOpen(true);
            setErrorNotif(false);
          },
          error => {
            setErrorNotif(true);
            console.log('FAILED...', error.text);
          },
        );
    } else {
      setUserSub(true);
    }
  };

  const reset = () => {
    setErrors({
      username: false,
      email: '',
      subject: false,
      message: false,
    });
    setUserName('');
    setUserEmail('');
    setUserSubject('');
    setUserText('');
    setCapVal(null);
    setUserSub(false);
  };

  return (
    <>
      {userSub && (
        <AnimatePresence>
          <Notification>
            <div className="text-2xl">
              <PiWarningCircleFill />
            </div>
            <div className="font-medium">Please fill in all the required fields</div>
            <button
              onClick={() => setUserSub(false)}
              className="ml-2 transition-all duration-200 hover:scale-110 hover:rotate-90"
            >
              <FiX className="text-lg" />
            </button>
          </Notification>
        </AnimatePresence>
      )}
      {errorNotif && (
        <AnimatePresence>
          <Notification>
            <div className="text-2xl">
              <BiCommentError />
            </div>
            <div className="font-medium">Email not sent, please try later</div>
            <button
              onClick={() => setErrorNotif(false)}
              className="ml-2 transition-all duration-200 hover:scale-110 hover:rotate-90"
            >
              <FiX className="text-lg" />
            </button>
          </Notification>
        </AnimatePresence>
      )}

      <form className="space-y-4" onSubmit={sub} ref={form}>
        {/* Name & Email Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Name Input */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors">
              <FiUser className="text-lg" />
            </div>
            <input
              id="username"
              value={userName}
              onChange={e => handleChange(e, setUserName, 'username')}
              name="user_name"
              type="text"
              onFocus={() => handleFocus('username')}
              onBlur={() => handleBlur('username')}
              placeholder="Your Name"
              className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl
                text-white placeholder:text-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                transition-all duration-300
                ${errors.username ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/10 hover:border-white/20'}
              `}
            />
            {errors.username && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1.5 ml-1"
              >
                * Name is required
              </motion.p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors">
              <FiMail className="text-lg" />
            </div>
            <input
              id="email"
              value={userEmail}
              onChange={e => handleChange(e, setUserEmail, 'email')}
              name="user_email"
              type="text"
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              placeholder="your.email@example.com"
              className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl
                text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
                transition-all duration-300
                ${errors.email ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/10 hover:border-white/20'}
              `}
            />
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1.5 ml-1"
              >
                * {errors.email}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Subject Input */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors">
            <FiMessageSquare className="text-lg" />
          </div>
          <input
            id="subject"
            value={userSubject}
            onChange={e => handleChange(e, setUserSubject, 'subject')}
            name="user_subject"
            type="text"
            onFocus={() => handleFocus('subject')}
            onBlur={() => handleBlur('subject')}
            placeholder="Subject"
            className={`w-full pl-11 pr-4 py-3 bg-white/5 border rounded-xl
              text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
              transition-all duration-300
              ${errors.subject ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/10 hover:border-white/20'}
            `}
          />
          {errors.subject && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5 ml-1"
            >
              * Subject is required
            </motion.p>
          )}
        </motion.div>

        {/* Message Textarea */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <textarea
            id="message"
            name="message"
            rows={5}
            value={userText}
            onChange={e => handleChange(e, setUserText, 'message')}
            onFocus={() => handleFocus('message')}
            onBlur={() => handleBlur('message')}
            placeholder="Your message here..."
            className={`w-full px-4 py-3 bg-white/5 border rounded-xl
              text-white placeholder:text-gray-500 resize-none
              focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent
              transition-all duration-300
              ${errors.message ? 'border-red-500 ring-2 ring-red-500/20' : 'border-white/10 hover:border-white/20'}
            `}
          />
          {errors.message && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs mt-1.5 ml-1"
            >
              * Message is required
            </motion.p>
          )}
        </motion.div>

        {/* ReCAPTCHA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <ReCAPTCHA
            sitekey={PUBLIC_kEY}
            onChange={capVal => setCapVal(capVal)}
            theme="dark"
          />
        </motion.div> */}

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Send Button */}
          <motion.button
            type="submit"
            disabled={send === 'Sending...'}
            className="relative group px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 
              text-white font-semibold rounded-xl overflow-hidden
              hover:shadow-lg hover:shadow-purple-500/50 
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
            whileHover={{ scale: send === 'Sending...' ? 1 : 1.02 }}
            whileTap={{ scale: send === 'Sending...' ? 1 : 0.98 }}
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Button content */}
            <span className="relative flex items-center gap-2">
              {send === 'Sending...' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend className="text-lg" />
                  {send}
                </>
              )}
            </span>
          </motion.button>

          {/* Reset Button */}
          <motion.button
            type="reset"
            onClick={reset}
            className="px-8 py-3.5 bg-white/5 border border-white/10 
              text-white font-semibold rounded-xl
              hover:bg-white/10 hover:border-white/20
              transition-all duration-300
              flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Reset
          </motion.button>
        </motion.div>
      </form>
      <FloatingNotif isOpen={isNotifOpen} setIsOpen={setIsNotifOpen} />
    </>
  );
};

export default Form;