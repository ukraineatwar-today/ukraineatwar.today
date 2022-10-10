import * as React from 'react'

import * as config from 'lib/config'

import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>Copyright © {year} {config.author}</div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
