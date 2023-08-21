import Image from "next/image";
import styles from "./card.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardHeader}>Moderna Vaccine</h3>
      <div className={styles.cardBody}>
        <div className={styles.cardContainer}>
          <div className={styles.cardImageContainer}>
            <Image
              src={"/img/vaccine.jpg"}
              alt="vaccine"
              fill={true}
              objectFit="cover"
              className={styles.cardImage}
            />
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.cardText}>
            <div>Developed By: Moderna</div>
            <div>Type: mRNA</div>
            <div>Average Effective: 90%</div>
            <br />
            <div>Required 2 Doses</div>
            <div>Suitable for 18 years old and up</div>
          </div>
        </div>
      </div>
    </div>
  );
}
