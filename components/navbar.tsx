import Link from "next/link";
import { navbarMenuItems } from "@/constants";

export const Navbar = () => {
  return (
    <header id="home" className="w-full p-8 relative">
      <div className="absolute -z-50 border rounded-full top-0 right-0 size-96 -translate-y-1/2 translate-x-1/2" />

      <nav className="flex items-center justify-center relative">
        <div className="lg:absolute left-0">
          <Link
            href="/"
            className="flex gap-2 items-start justify-center text-lg font-JetBrainsBold hover:text-muted-foreground transition-colors"
          >
            <p>{"<"}Elias</p>
            <p>Martins{"/>"}</p>
          </Link>
        </div>

        <div
          className="hidden lg:flex flex-1 items-center justify-center gap-10
  "
        >
          {navbarMenuItems.map(({ label, href }) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
