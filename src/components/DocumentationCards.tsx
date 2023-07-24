import styles from '../styles/Cards.module.css'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { BsBook, BsInfoCircle } from 'react-icons/bs'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { FaMoneyCheckAlt } from 'react-icons/fa'

export default function DocumentationCards() {
  return (
    <div className={styles.grid}>
      <a href="https://openexa.ai/" target="_blank" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle className={styles.logo} />↗
        </div>
        <h3>RWA Market Intelligence</h3>
        <p>Real World Assets (RWA) - Market Research and Cryptocurrency Exploration.</p>
      </a>

      <a
        href="https://token-interface-next-app-wmn5n7rc5q-uc.a.run.app/transactions"
        target="_blank"
        className={styles.card}
      >
        <div className={styles.row}>
          <FaMoneyCheckAlt className={styles.logo} />↗
        </div>
        <h3>Token Management</h3>
        <p>Minting of AUT's and OXA's and Management of Tokens.</p>
      </a>

      {/* <a href="https://docs.uniswap.org/sdk/widgets/swap-widget" className={styles.card}>
        <div className={styles.row}>
          <BsInfoCircle />↗
        </div>
        <h3>Swap Widget Docs</h3>
        <p>Explore the Swap Widget&apos;s features and API.</p>
      </a>

      <a href="https://discord.gg/ybKVQUWb4s" className={styles.card + ' ' + styles.external}>
        <div className={styles.row}>
          <FaDiscord className={styles.logo} fill="#8c9eff" />
          <div className={styles.column}>
            <h3>Discord</h3>
            <p>Hop into #widgets for realtime help.</p>
          </div>
        </div>
      </a> */}

      {/* <a
        href="https://github.com/OpenData-BondIntelligence"
        className={styles.card + ' ' + styles.external}
      >
        <div className={styles.row}>
          <FaGithub className={styles.logo} />
          <div className={styles.column}>
            <h3>GitHub</h3>
            <p>View the OpenExa Github.</p>
          </div>
        </div>
      </a> */}
    </div>
  )
}
