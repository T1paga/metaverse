'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText
        title={<>Track friends around you and invite them to play together in the same world</>}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]">
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[170px] left-[250px] md:w-[140px] xl:w-[217px] h-[167px] p-[9px] rounded-3xl bg-fuchsia-300 hidden lg:flex">
          <div className="map-card w-full h-full rounded-3xl flex flex-col items-start justify-end gap-[8px] p-2">
            <div className="flex gap-2 items-center">
              <div className="flex relative">
                <a href="#" className="">
                  <img src="p2.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="-ml-[10px]">
                  <img src="p3.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="-ml-[10px]">
                  <img src="p2.svg" alt="" className="w-full h-full" />
                </a>
              </div>
              <p className="leading-4 text-[12px] text-white">+264 has joined</p>
            </div>
            <h2 className="font-bold text-[18px] text-white leading-6">The Upside Down</h2>
          </div>
        </div>

        <div className="absolute top-0 right-[250px] md:w-[140px] xl:w-[217px] h-[167px] p-[9px] rounded-3xl bg-fuchsia-300 hidden lg:flex">
          <div className="map-card2 w-full h-full rounded-3xl flex flex-col items-start justify-end gap-[8px] p-2">
            <div className="flex gap-2 items-center">
              <div className="flex relative">
                <a href="#" className="">
                  <img src="p2.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="-ml-[10px]">
                  <img src="p3.svg" alt="" className="w-full h-full" />
                </a>
                <a href="#" className="-ml-[10px]">
                  <img src="p2.svg" alt="" className="w-full h-full" />
                </a>
              </div>
              <p className="leading-4 text-[12px] text-white">+264 has joined</p>
            </div>
            <h2 className="font-bold text-[18px] text-white leading-6">Hawkins Labs</h2>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
