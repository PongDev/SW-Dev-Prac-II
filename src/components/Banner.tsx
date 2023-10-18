"use client";

import Image from "next/image";
import styles from "./banner.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Banner() {
  const bannerImage = [
    "/img/banner.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg",
    "/img/banner4.jpg",
  ];
  const [bannerIdx, setBannerIdx] = useState(0);
  const router = useRouter();

  const { data: session } = useSession();

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
      {session ? (
        <div className="absolute top-0 right-0 mx-3 my-2 text-slate-800 font-semibold">
          Welcome, {session?.user?.name}
        </div>
      ) : null}
      <div className="absolute bottom-0 right-0">
        <button
          className="rounded-lg bg-orange-400 px-3 py-2 m-2 text-slate-800 font-semibold hover:bg-amber-400 hover:text-slate-900"
          onClick={(e) => {
            e.stopPropagation();
            router.push("/hospital");
          }}
        >
          View Hospital Info
        </button>
      </div>
    </div>
  );
}
