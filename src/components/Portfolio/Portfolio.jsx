import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
    return (
        <div className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_items}>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://www.backofficesoft.com/images/backoffice/backoffice-screen1.jpg" alt="" />
                    </Tilt>
                    <p>CRUD Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://www.managepetro.com/wp-content/uploads/2020/04/1-1_backoffice.png" alt="" />
                    </Tilt>
                    <p>Realtime Monitoring Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://www.possolutions.com.au/sites/default/files/inline-images/backend.jpg" alt="" />
                    </Tilt>
                    <p>Books Sale Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://documentation.payfacto.com/POS/MaitreD/Fulldoc/assets/images/MDBack-OfficeSuite7/04-MDBack-OfficeSuite7.png" alt="" />
                    </Tilt>
                    <p>Backoffice Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://www.hostinger.co.uk/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway-1024x869.png" alt="" />
                    </Tilt>
                    <p>Web Portfolio Project</p>
                </div>
                <div className={styles.port_items}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://static.pdfcandy.com/uploads/webp-png/freeconvert%20pdf%20to%20png.webp" alt="" />
                    </Tilt>
                    <p>Web File-Convert Project</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
