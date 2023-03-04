import { Link } from "react-router-dom"
import styles from "./403.module.css"

export const Page403 = () => {
    return (
        <div className={styles.container403}>
            <h1 className={styles.text}><span>403</span></h1>
            <h3 className={styles.text}>You're not allowed to see this page!</h3>
            <Link to="/login" style={{ textDecoration: "none" }}>
                <span className={styles.redirect_btn}>Login</span>
            </Link>
        </div>
    )
}