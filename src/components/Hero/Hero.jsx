import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it’s me</p>
            <h3 className={styles.text_2}>Nuttawut S.</h3>
            <p className={styles.text_3}>
              <span style={{marginRight: '10px' }}>I’m a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Full Stact Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Application Developer',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
              </p>
            <p className={styles.text_4}>I am a Full Stack Developer with expertise in both Front-end and Back-end, including web,<br />desktop application development. I have experience in designing and developing systems<br />that meet user needs and can work effectively with a team.</p>
            <ul className={styles.hero_social}>
              <li><a href="#"><FaGithub /></a></li>
              <li><a href="#"><FaYoutube /></a></li>
              <li><a href="#"><FaFacebookF /></a></li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
