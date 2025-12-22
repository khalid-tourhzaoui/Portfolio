/* eslint-disable react/prop-types */
import SocialMedias from './SocialMedias';
import { motion } from 'framer-motion';

const beforeAnimation = {
  hidden: {
    top: '1em',
    right: '1.9em',
  },
  visible: {
    top: ['1em', '-1em', '-0.6em'],
    right: ['1.9em', '-0.5em', '0.3em'],
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
      times: [0.1, 0.5, 1],
    },
  },
};

const SocialMediaIcon = ({text}) => {
  return (
    <div className="relative flex items-start space-x-5 text-3xl">
      {SocialMedias.map(socialMedia => (
        <motion.div
          key={socialMedia.id}
          className={`hover:text-${text} text-orange-600 backdrop-blur-[3px] 
          shadow-sm shadow-orange-200 hover:shadow-lg hover:shadow-orange-500/50
          p-2 rounded-md hover:scale-110 relative overflow-hidden 
          ring-2 ring-offset-0 ring-orange-600 hover:ring-amber-500 
          bg-orange-50 hover:bg-orange-100
          transition-all duration-500 cursor-pointer`}
          whileHover="visible"
        >
          <a href={socialMedia.url}>{socialMedia.icon}</a>
          <motion.div
            className="absolute -z-10 w-7 h-16 bg-gradient-to-br from-orange-600 via-amber-500 to-red-600 -rotate-45"
            style={{ top: '1em', right: '1.9em' }}
            variants={beforeAnimation}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialMediaIcon;