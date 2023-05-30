import styles from "./styles.module.scss";
import { MdSecurity } from "react-icons/md";
import { BsSuitHeart } from "react-icons/bs";
import { RiAccountPinCircleLine, RiArrowDropDownFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";
import { UserMenu } from "./UserMenu";


export default function Top() {
    const [loggedIn,setLoggedIn] = useState(true);
    const [visible, setVisible] = useState(false);

  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li classname ={styles.li}>
            <img src='../../../images/kz.png'></img>
            <span>Kazakhstan / kzt</span>
          </li>
          <li classname ={styles.li}>
            <MdSecurity />
            <span>Buyer protection</span>
          </li>
          <li classname ={styles.li}>
            <span>Customer Service</span>
          </li>
          <li classname ={styles.li}>
            <span>Help</span>
          </li>
          <li classname ={styles.li}>
            <BsSuitHeart />
            <Link href='/profile/wishlist'>
            <span>Wish list</span>
            </Link>
            
          </li>
     <li classname ={styles.li} onMouseOver={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
     {
        loggedIn ? (
            <li classname ={styles.li}>
            <div className={styles.flex}>
             <img src="https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png" alt=""/>
              <span>Aslan</span>
              <RiArrowDropDownFill />
            </div>
          </li>
        ):(
            <li classname ={styles.li}>
            <div className={styles.flex}>
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </li>
        )
      }
      {
        visible && <UserMenu loggedIn={loggedIn} />
      }
     </li>
        </ul>
      </div>
    </div>
  );
}
