import { Container } from "./styles";

import minus from '../../assets/minus.svg';
import more from '../../assets/more.svg';

export function Quantity({ ...rest }) {
  return(
    <Container {...rest}>
      <img src={minus} alt="botão de menos" />
      <span>01</span>
      <img src={more} alt="botão de mais" />
    </Container>
  )
}