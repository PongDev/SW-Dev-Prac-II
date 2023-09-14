"use client";

import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";

export default function Banner() {
  const bannerImage = [
    "/img/banner.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
    "/img/banner4.jpg",
  ];
  const [bannerIdx, setBannerIdx] = useState(0);

  return (
    <div className={styles.banner}>
      <Image
        src={bannerImage[bannerIdx]}
        onClick={() => {
          setBannerIdx((bannerIdx + 1) % bannerImage.length);
        }}
        alt="banner"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1 className="text-2xl font-semibold">Vaccine Center</h1>
        <h3 className="text-lg font-medium">
          Get Free Vaccine for You and Your Family
        </h3>
      </div>
    </div>
  );
}
