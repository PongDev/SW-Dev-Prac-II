import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function MenuBar() {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-end fixed z-10 right-0 left-0 bg-orange-200 h-14">
      <div className="mr-auto flex">
        <Link href={session ? "/api/auth/signout" : "/api/auth/signin"}>
          <div className="h-full flex items-center px-7 bg-green-200 text-yellow-900 font-semibold">
            {session ? "Sign-Out" : "Sign-In"}
          </div>
        </Link>
        <Link href={"/mybooking"}>
          <div className="h-full flex items-center px-5 bg-sky-200 text-yellow-900 font-semibold">
            My Booking
          </div>
        </Link>
      </div>
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
