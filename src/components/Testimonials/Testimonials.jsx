import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
            <p>Application is perfect for my work.</p>
            <img src="https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4>John Smith</h4>
            <p className={styles.bio}>Engineer</p>
        </div>
        <div className={styles.testi_items}>
            <p>The application has a beautiful appearance.</p>
            <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHdvbWFufGVufDB8fDB8fHww" alt="" />
            <h4>Eve Orton</h4>
            <p className={styles.bio}>Online Seller</p>
        </div>
        <div className={styles.testi_items}>
            <p>Your application is better than expected.</p>
            <img src="https://images.unsplash.com/photo-1577880216142-8549e9488dad?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4>Joe Black</h4>
            <p className={styles.bio}>Salesperson</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
