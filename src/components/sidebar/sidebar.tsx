import SignedInPlate from "../signedInPlate/signedInPlate";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import { Icon } from "../Icon/icon";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarMain}>
        <Link className={styles.brand} href="/">
          <Icon name="akari_icons/check-box-fill" className={styles.brandMark}>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Family</span>
              <span className={styles.brandCaption}>TASK WORKSPACE</span>
            </span>
          </Icon>
        </Link>

        <nav className={styles.navigation} aria-label="Main navigation">
          <p className={styles.sectionLabel}>Workspace</p>
          <ul className={styles.navList}>
            <li>
              <Link className={styles.navLink} href="/tasks">
                <Icon name="akari_icons/clipboard" className={styles.navSvg} />
                <span>Tasks</span>
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/users">
                <Icon
                  name="akari_icons/people-multiple"
                  className={`${styles.navSvg}`}
                />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link className={styles.navLink} href="/adminpanel">
                <Icon
                  name="akari_icons/person"
                  className={`${styles.navSvg}`}
                />
                <span>Aminpanel</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.account}>
        <SignedInPlate />
      </div>
    </aside>
  );
}
