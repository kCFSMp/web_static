import React from 'react';
import styles from "../../css/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className={styles.footterr}>
    <div className={styles.container}>

        <div className={styles.row_1}>
            <div className={styles.col_1_1}>
                <p>PUNE</p>
            </div>
            <div className={styles.col_1_2}>
                <p>Ready to explore?</p>
                <button>Get started</button>
            </div>
        </div>
                <hr style={{color:"#fff", margin:"4.5vh 0"}}/>
        <div className={styles.row_2}>
            <div className={styles.col_2_1}>
                <p>Discover <br/>Rapchik Pune</p>
            </div>

            <div className={styles.col_2_2}>
                <form action="mailto:tucorreo@ejemplo.com" method="post">
                    <input type="email" id="email" name="email" placeholder="Email Address" required/>
                    <button type="submit">&#x3E;</button>
                </form>
            </div>
                <div className={styles.col_2_3}>
                    <a className={styles.sub}>About</a>
                    <a href="">Our Story</a>
                    <a href="">Benefits</a>
                    <a href="">Team</a>
                    <a href="">Careers</a>
                </div>

                <div className={styles.col_2_4}>
                    <a className={styles.sub}>Help</a>
                    <a href="">FAQs</a>
                    <a href="">Contact us</a>
                </div>
        </div>

        <div className={styles.row_3}>
            <div className={styles.col_3_1}>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className={styles.col_3_2}>
                <a href="#" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} className="fa-2x" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                </a>
            </div>
        </div>

        <div className={styles.row_4}>
            <p>Copyright 2021 PUNE</p>
        </div>

    </div>
    </footer>
  );
}


