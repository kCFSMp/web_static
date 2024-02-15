import styles from "../../css/Mandir.module.css";
import Readmore from "../../img/ReadMore.svg";
import deco_title from "../../img/Rectangle.svg";

export default function Mandir(){
    return(
    <section style={{backgroundColor:"black"}}>
        <div className={styles.container_mandir}>
            <div className={styles.fondoMandir}>
                <div className={styles.container_orientacion}>
                    <div className={styles.container_decorationtext}>
                        <img className={styles.deco_fort} src={deco_title} alt="" />
                            <p style={{margin:"0"}}>BROMO</p>
                        <img className={styles.deco_fort} src={deco_title} alt="" />
                    </div>
                    <div className={styles.container_parrafo}>
                        <p className={styles.title_parrafo}>Shreemant Dagdusheth <br />Halwai Ganpati Mandir</p>
                        <p className={styles.parrafo}>
                        The Dagadusheth Halwai Ganapati temple in Pune is dedicated to the Hindu god Ganesh. 
                        The temple is visited by over hundred thousand pilgrims every year. Devotees of the 
                        temple include celebrities and chief ministers of Maharashtra who visit during the 
                        annual ten-day Ganeshotsav festival.</p>
                    </div>
                    <div>
                        <img src={Readmore} alt="" />
                    </div>
                </div>   
            </div>
        </div>
    </section>
    );
}