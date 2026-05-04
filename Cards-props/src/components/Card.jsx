import { Bookmark } from 'lucide-react'
import Styles from './Card.module.css'
import React from 'react'

const Card = (props) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.top}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnm5CmL80RwspTM5fccqQGnp3IgQGMPDKgkA&s" alt="" />
        <div>Save <Bookmark /> </div>
      </div>

      <div className={Styles.middle}>
        <div className={Styles.divt}>
          <h3>Amazon</h3>
          <span>3 Days Ago</span>
        </div>
        <h2>Seniour UI/UX Designer</h2>
        <div className={Styles.divb}>
          <span>Part Time</span>
          <span>Senior Level</span>
        </div>
      </div>

      <div className={Styles.bottom}>
          <div>
            <h2>$120/hr</h2>
            <h4>Mumbai , india</h4>
          </div>
          <button>Apply Now</button>
      </div>

    </div>
  )
}

export default Card

