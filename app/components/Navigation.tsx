import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.png";

export default function Navigation() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="Helpdesk logo"
        width={70}
        height={100}
        quality={100}
        placeholder="blur"
      />

      <h1>Next.js Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
