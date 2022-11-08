import Link from 'next/link'
import React from 'react'
import styles from "./styles/Layout.module.css"

const links = [
  {
    name: "Inicio",
    to: "/"
  },
  {
    name: "Cronograma",
    to: "/cronograma"
  },
  {
    name: "Auspiciantes",
    to: "/auspiciantes"
  },
  {
    name: "FAQ",
    to: "/faq"
  },
]



export const Navbar = () => {
  return (
    <header>
      <nav className={styles.container}>

        <Link href={"/"} className={`${styles.li}`}>
          <img src='/logo.png' alt='logo image' className={styles.image} />
        </Link>


        <ul className={styles.ul}>
          {links.map(link => (
            <Link href={link.to} className={styles.li}>
              {link.name}
            </Link>
          ))}
        </ul>


        <div className={styles.button}>
          <Link href={"/registro"} className={styles.registerContent}>
            Regístrate
          </Link>
        </div>

      </nav>
    </header>
  )
}
