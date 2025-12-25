"use client";
import Link from "next/link";
import NavLink from "@/app/components/NavLink";
import PrintforgeLogoIcon from "@/public/printforge-logo-icon.svg";
import Printforge from "@/public/printforge-logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname: string = usePathname();
  return (
    <header className="w-full bg-white">
      <nav className="flex justify-between px-6 py-4">
        <Link href="/">
          <div className="relative">
            {/* Desktop logo */}
            <Image
              src={Printforge}
              alt="PrintForge Logo"
              className="w-[200px] h-auto hidden md:block"
            />
            {/* Mobile logo */}
            <Image
              src={PrintforgeLogoIcon}
              alt="PrinForge logo"
              className="w-[40px] h-auto block md:hidden"
            />
          </div>
        </Link>
        <ul className="flex items-center gap-1.5">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>

          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
