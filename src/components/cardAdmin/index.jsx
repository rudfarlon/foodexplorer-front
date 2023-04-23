import { Container } from "./styles";

import pencil from '../../assets/pencil.svg';
import plate from '../../assets/plate.svg';

export function CardAdmin({ ...rest }) {
  return(
    <Container {...rest}>
      <div className="content">
        <img className="change" src={pencil} />
        <img className="plate" src={plate} alt="imagem do prato" />
        <h2 className="title">Salada Ravanello &rsaquo;</h2>
        <span className="amount">R$ 49,97</span>
      </div>
    </Container>
  )
}