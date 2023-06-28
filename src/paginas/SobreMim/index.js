import styles from "./SobreMim.module.css"

import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotosSobreMim from "assets/sobre_mim_foto.jpg"


export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >

            <h3 className={styles.subtitulo}>
                Olá, meu sou o Igor!
            </h3>

            <img
                src={fotosSobreMim}
                alt="Foto do Igor Natan sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>

            <p className={styles.paragrafo}>
                Minha história com programação começou por volta de 2017, onde estava terminando o ensino medio e precisava definir um norte para seguir. Sempre gostei de hardware, mas não tinha tanto contato com a programação em si. Após realizar um teste vocacional, onde o mesmo me forneceu duas opções de possíveis profissões que me encaixaria, a primeira sendo Programação e em segundo Ed.Física.. Optei por Programação e até o momento não me arrependo nem um pouco dessa escolha, e só tenho a agradecer esse universo maravilhoso da tecnologia.
            </p>

            <p className={styles.paragrafo}>
                Hoje eu sou formado em Analise e desenvolvimento de sistemas, trabalho na área a aproximadamente 3 anos.
            </p>

            <p className={styles.paragrafo}>
                Ainda não estou exercendo a função de desenvolvedor Web, mas cada vez mais estou apromirando meus conhecimento e colocando em pratica em projetos pessoais.
            </p>

            <p className={styles.paragrafo}>
                Desenvolvi esse blog a fins de expansão de conhecimento.
            </p>

        </PostModelo>
    )
}