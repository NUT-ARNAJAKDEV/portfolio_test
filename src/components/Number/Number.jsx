import React, { useState } from 'react'
import styles from './Number.module.css'
import CountUp from 'react-countup'

function Number() {
  const [countKey, setCountKey] = useState(0);

  const handleMouseEnter = () => {
    setCountKey(prevKey => prevKey + 1); // เปลี่ยน key ใหม่เพื่อรีเซ็ต CountUp
  };

  return (
    <div className={styles.number_con} onMouseEnter={handleMouseEnter}>
      {[
        { end: 100, text: 'Project Delivered' },
        { end: 50, text: 'Companies Helped' },
        { end: 10, text: 'Years of Experience' },
        { end: 200, text: 'Happy Clients' }
      ].map(({ end, text }, index) => (
        <div key={index} className={styles.number_items}>
          <h3>
            <CountUp key={countKey + index} start={0} end={end} duration={5} />+
          </h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default Number
