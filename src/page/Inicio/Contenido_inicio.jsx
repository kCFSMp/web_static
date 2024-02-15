import styles from "../../css/Inicio.module.css";
import banner from "../../img/bannerPune.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Row } from "react-bootstrap";
import down from "../../img/ScrollDown.svg";
import deco_title from "../../img/Rectangle.svg";
import Rajgad from "../../img/RajgadFort.svg";
import Readmore from "../../img/ReadMore.svg";
import Mandir from "../../Components/Mandir/Mandir";
import Card2 from "../../Components/Card2/Card2";

export default function Contenido_inicio(){
    return(
        <div className={styles.container_inicio}>
            <div className={styles.container_banner}>
                <img className={styles.banner}src={banner} alt="" /> 
                <div className={styles.container_up}>
                    <div className={styles.container_text}>
                        <div className={styles.container_redsocial}>
                            <p>Follow us</p>
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
                        <div className={styles.container_textbann}>
                            <div className={styles.title_text}>
                                <div className={styles.ro_1}>
                                    <img className={styles.deco_title} src={deco_title} alt="" /><p>QUEEN OF THE DECCAN</p>
                                </div>
                                <div className={styles.ro_2}>
                                    <p className={styles.ro2_title1}>Discover</p>
                                    <p className={styles.ro2_title2}>Rapchik Pune</p>
                                </div>
                            </div>
                            <div className={styles.ro_3}>
                                <img src={down} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------ */}
                <div className={styles.container_1}>
                    <div className={styles.container_2}>
                        <div className={styles.container_orientacion}>
                            <div className={styles.container_imgFort}>
                                <img src={Rajgad} alt="" />
                            </div>
                            <div className={styles.container_textKing}>
                                <div className={styles.container_decorationtext}>
                                    <img className={styles.deco_fort} src={deco_title} alt="" /><p style={{margin:"0"}}>KING OF FORT</p>
                                </div>
                                <div className={styles.container_parrafo}>
                                    <p className={styles.title_parrafo}>Rajgad Fort</p>
                                    <p className={styles.parrafo}>Rajgad is a hill fort in Pune. It was initially called Murumbdev and was 
                                    later renamed to Rajgad by Shivaji Maharaj. It is located south-west to
                                    Pune City. The base village Gunjavane is around 60km from Pune. This fort 
                                    was initially the capital of Shivaji Maharaj's Hindavi Swarajya. The capital 
                                    was later shifted to Raigad. The area of the fort base is 24 square miles.</p>
                                </div>
                                <div>
                                    <img src={Readmore} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ---------------------------- */}
            </div>
            <Mandir/>
            <Card2/>
            
        </div>
    );
}