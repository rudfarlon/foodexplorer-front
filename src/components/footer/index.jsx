import { Container } from "./styles";
import lgfooter from '../../assets/lgfooter.svg';

export function Footer({ ...rest }) {
  return(
    <Container {...rest}>
      <div className="content">
        <span>
          <img src={lgfooter} alt="logo food explorer" />
          food explorer
        </span>
        <span className="copy">&copy; 2023 - Todos os direitos reservados.</span>
      </div>
    </Container>
  )
}