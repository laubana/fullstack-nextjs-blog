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
          {links.map((link, index) => (
            <li>
              <Link href={link.href} key={index}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
