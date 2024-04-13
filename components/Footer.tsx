import * as React from 'react'

import * as config from 'lib/config'

import styles from './styles.module.css'

export const FooterImpl: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>© {year} {config.author}</div>
      <div className={styles.contact}>
        Got feedback?{' '}
        <a href="mailto:mail@ukraineatwar.today">
          Let us know
        </a>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterImpl)
