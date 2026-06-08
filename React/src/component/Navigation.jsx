import styles from '../assets/css/Navigation.module.css'

function Navigation(props){
    return (
        <div className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li className={styles.navItem}>{props.nav1}</li>
                <li className={styles.navItem}>{props.nav2}</li>
                <li className={styles.navItem}>{props.nav3}</li>
                <li className={styles.navItem}>{props.nav4}</li>
            </ul>
        </div>
    );
}

export default Navigation