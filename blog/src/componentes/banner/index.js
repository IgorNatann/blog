import styles from './Banner.module.css'
import React from 'react'

export default function Banner() {
    return (
        <div className={styles.Banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Igor Natan, Tenho 23 anos! Sou formado em Analise e desenvolvimento de Sistemas. Sou desenvolvedor Front-end. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>
            <div className={styles.Banner}>

            </div>
        </div>
    )
}
