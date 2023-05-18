import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png"

export default function SobreMim() {
    return (
       <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
       >
        conteudo..
       </PostModelo>
    )
}