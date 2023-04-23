import { Container } from "./style";

import imgbanner from '../../assets/imgbanner.svg';

export function Banner() {
  return(
    <Container>
      <div className="bc_banner"></div>
      <img src={imgbanner} alt="imagem de biscoito" />
      <div className="bc_info">
        <h2>Sabores inigualáveis</h2>
        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
      </div>
    </Container>
  )
}