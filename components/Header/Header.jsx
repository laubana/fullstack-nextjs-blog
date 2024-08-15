import Link from "next/link";
import styles from "./Header.module.css";
import Logo from "../Logo";

const links = [
  { href: "/posts", label: "Posts" },
  { href: "/contact", label: "Contact" },
];

export default () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
