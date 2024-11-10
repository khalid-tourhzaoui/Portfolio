/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const dataCerifs = [
  
];

const Certificate = ({ nameCertif, link, date, provider }) => (
  <motion.div
    className="flex flex-col md:space-y-2 w-full text-purple-100"
    initial={{ opacity: 0, y: 100, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center space-y-1 lg:space-x-1 mb-3 lg:mb-0 text-purple-100">
      <div className="font-semibold text-base md:text-lg mr-1 w-[87%] md:w-auto">
        {nameCertif}:
      </div>
      {provider.length < 25 ? (
        <div className="flex md:justify-center items-center font-normal text-sm md:text-base  ">
          <div className="mb-0.5 text-purple-50">
            {provider} - {date}
          </div>
          <a
            title="Check it"
            className="inline-block text-primary3 ml-3 mb-0.5 text-xl transition-colors duration-300 hover:text-primary5"
            href={link}
            target="_blank"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      ) : (
        <div className="flex md:justify-center items-center font-normal text-[0.82rem] md:text-base ">
          <div className="mb-0.5 text-purple-50">
            {provider} - {date}
          </div>
          <a
            title="Check it"
            className="inline-block text-primary3 ml-3 mb-0.5 text-xl transition-colors duration-300 hover:text-primary5"
            href={link}
            target="_blank"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      )}
    </div>
  </motion.div>
);

export default function SkillsPart() {
  return (
    <div className="space-y-3">
      {dataCerifs.map(elem => (
        <Certificate
          key={elem.id}
          nameCertif={elem.nameCertif}
          link={elem.link}
          date={elem.date}
          provider={elem.provider}
        />
      ))}
    </div>
  );
}
