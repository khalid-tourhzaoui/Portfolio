import SecName from './SecName';
import { motion } from 'framer-motion';
import { GrProjects } from 'react-icons/gr';
import { AnimatePresence } from 'framer-motion';
import Transition from './Transition';
import Grid from './Grid';
import { FaReact } from 'react-icons/fa';
import { SiFramer, SiMapbox, SiTailwindcss, SiTiktok, SiTypescript, SiVercel } from 'react-icons/si';
import { SiFastapi } from 'react-icons/si';
import { SiShadcnui } from 'react-icons/si';
import { BiQrScan } from 'react-icons/bi';
import { MdColorLens } from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube, AiOutlineDownload } from 'react-icons/ai';
import WeatherApp from '../assets/WeatherApp.png';
import QrCode from '../assets/QrCode.png';
import { FaFacebook, FaTwitter } from 'react-icons/fa6';
import { TbBrandFramerMotion } from 'react-icons/tb';

const data = [
  {
    id: 1,
    serviceName: 'WEATHER APP',
    tools: [
      FaReact, 
      SiTailwindcss, 
      SiShadcnui, 
      SiFastapi, 
      SiTypescript, 
      SiMapbox, 
      SiVercel
    ],
    link: 'https://github.com/khalid-tourhzaoui/WEATHER-APP',
    imgUrl: WeatherApp,
  },
  
];

const staggerContainer = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <AnimatePresence mode="wait">
      <Transition key={1} />
      <div
        key={2}
        className="cursor-custom relative  flex flex-col mb-10 md:mb-20 space-y-14 items-center md:w-3/5 md:pr-28 w-full h-full md:h-full mt-16 md:mt-0 pt-12 md:pt-24 ml-20"
      >
        <SecName secName="Projects">
          <GrProjects />
        </SecName>
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="space-y-3  self-start flex justify-center flex-col items-start"
        >
          <div className="text-white self-start text-4xl w-80 md:w-full md:text-4xl uppercase backdrop-blur-[3px]">
            Take a look at
            <span className="text-primary3"> My Work</span>
          </div>
        </motion.div>
        <Grid data={data} />
      </div>
    </AnimatePresence>
  );
}