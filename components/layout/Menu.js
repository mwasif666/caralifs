import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      <ul className="navigation clearfix">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/#CallExpert">Talk Car Expert </Link>
        </li>
        <li>
          <Link href="/#CarValuation">Car Valuation </Link>
        </li>
        <li>
          <Link href="/#Vehicles">Vehicles </Link>
        </li>
        {/* <li className={pathname == "/contact-us" ? "current" : ""}>
          <Link href="/contact-us">Contact us </Link>
        </li> */}
      </ul>
    </>
  );
}
