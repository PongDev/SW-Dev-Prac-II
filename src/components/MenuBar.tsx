import Image from "next/image";
import Link from "next/link";

export default function MenuBar() {
  return (
    <div className="flex justify-end fixed z-10 right-0 left-0 bg-orange-200 h-14">
      <Link href={"/booking"}>
        <div className="inline-block text-center px-3 py-1 bg-zinc-400 mx-3 text-yellow-900">
          <div>Menu Item</div>
          <div className="font-semibold">Booking</div>
        </div>
      </Link>
      <div className="relative w-24">
        <Link href={"/"}>
          <Image
            src="/img/logo.png"
            alt="logo"
            fill={true}
            className="object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
