import Image from "next/image";
import styles from "./banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/banner.jpg"}
        alt="banner"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1>Vaccine Center</h1>
        <h3>Get Free Vaccine for You and Your Family</h3>
      </div>
    </div>
  );
}
