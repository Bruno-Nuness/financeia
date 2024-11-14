"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-6">
        <Image src={"/logo.svg"} width={173} height={39} alt="Finance AI" />
        <Link
          href="/"
          className={pathname == "/" ? "text-primary" : "text-muted-foreground"}
        >
          Dashboard
        </Link>
        <Link
          href="/transation"
          className={
            pathname == "/transation" ? "text-primary" : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname == "/subscription"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>
      <UserButton />
    </nav>
  );
};

export default Navbar;
