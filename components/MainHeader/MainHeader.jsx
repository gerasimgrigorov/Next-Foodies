import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.png";
import classes from "./MainHeader.module.css";
import MainBackground from "./MainBackground";
import NavLink from "../NavLink";

export default function MainHeaeder() {
  return (
    <>
      <MainBackground />

      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="Plate with food" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
