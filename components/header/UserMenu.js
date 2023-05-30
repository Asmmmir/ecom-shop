import Link from "next/link";
import styles from "./styles.module.scss";

export const UserMenu = ({ loggedIn }) => {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Shoppay</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png"
            alt=""
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>Aslan</h3>
            <span>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>Login</button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/wishlist">Wishlist</Link>
        </li>
        
      </ul>
    </div>
  );
};
