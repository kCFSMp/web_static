import styles from "../../css/Card2.module.css";
import deco_title from "../../img/Rectangle.svg";
import Readmore from "../../img/ReadMore.svg";
import OurCultue from "../../img/OurCulture.svg";

export default function Card2(){
    return(
        <div className={styles.container_1}>
                    <div className={styles.container_2}>
                        <div className={styles.container_orientacion}>
                            <div className={styles.container_textKing}>
                                <div className={styles.container_decorationtext}>
                                    <img className={styles.deco_fort} src={deco_title} alt="" /><p style={{margin:"0"}}>F.C. ROAD PUNE</p>
                                </div>
                                <div className={styles.container_parrafo}>
                                    <p className={styles.title_parrafo}>Our Culture Here Is Very Friendly To People</p>
                                    <p className={styles.parrafo}>
                                        Pune is a sprawling city in the western Indian state of Maharashtra. It was 
                                        once the base of the Peshwas (prime ministers) of the Maratha Empire, 
                                        which lasted from 1674 to 1818. </p>
                                </div>
                                <div>
                                    <img src={Readmore} alt="" />
                                </div>
                            </div>
                            <div className={styles.container_imgFort}>
                                <img src={OurCultue} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
    );
}