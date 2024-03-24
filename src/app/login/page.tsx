import Image from 'next/image'

import EnsignIcon from '@/assets/ensign.svg'
import EnsignIconWhite from '@/assets/ensign-white.svg'

import styles from './login.module.scss'

const Login = () => {
  return (
    <div className={styles.component}>
      <div className={styles.login}>
        <div className={styles.logo}>
          <Image src={EnsignIcon} alt="Ensign Software" height={50} width={50} className={styles.icon} />
          <p>Ensign Software | Technical Test</p>
        </div>
        <div className={styles.title}>
          <h1>Login</h1>
          <p>Please enter your Tech Test credentials</p>
        </div>
        <form>
          <div>
            <label>Username</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <button type="submit">Login to Ensign</button>
        </form>
      </div>
      <div className={styles.pane}>
        <Image src={EnsignIconWhite} alt="Ensign Software" height={50} width={50} className={styles.icon} />
        <p className={styles.bold}>
          Congratulations on getting to the Technical Test stage!
        </p>
        <p>Please refer to the email you received for your login credentials.</p>
      </div>
    </div>
  )
}

export default Login