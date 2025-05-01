import React from 'react'
import styles from './Services.module.css'
import { FaCode, FaPaintbrush, FaDesktop } from 'react-icons/fa6'

function Services() {
    return (
        <div className={styles.services_con}>
            <h3 className={styles.services_title}>My Services</h3>
            <div className={styles.services_list}>
            <div className={styles.services_items}>
                <FaCode />
                <h4>Application Development</h4>
                <p>Develop applications for both desktop and web, focusing on UX/UI, connecting to back-end systems and databases to make the app work efficiently and securely.</p>
            </div>
            <div className={styles.services_items}>
                <FaPaintbrush />
                <h4>Database & API Design</h4>
                <p>Design database structure and develop API to connect various systems to work together efficiently, support secure data management and easy expansion of the system in the future.</p>
            </div>
            <div className={styles.services_items}>
                <FaDesktop />
                <h4>Front-end & Back-end Consulting</h4>
                <p>Provide consultation on both front-end and back-end web development, recommend technologies, system structures, and development approaches that are appropriate for the project's needs.</p>
            </div>
            </div>
        </div>
    )
}

export default Services
