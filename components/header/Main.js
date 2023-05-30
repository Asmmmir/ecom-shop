import { RiSearch2Line } from "react-icons/ri";
import { FaOpencart } from "react-icons/fa";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Main() {
    const {cart} = useSelector((state) => ({...state}))
    
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link legacyBehavior href="/">
          <a href="" className={styles.logo}>
            <img src="../../../logo.png" />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
          <div className={styles.search__icon}>
            <RiSearch2Line />
          </div>
        </div>
        <Link legacyBehavior href="/cart">
          <a className={styles.cart}>
            <FaOpencart />
            <span>{cart.length}</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
