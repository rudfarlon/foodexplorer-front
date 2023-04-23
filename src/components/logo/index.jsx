import { Container } from "./styles";
import logo from '../../assets/logo.svg'; 

export function Logo({ ...rest }) {
  return(
    <Container {...rest}>
      <img src={logo} alt="imagem do logo" />
      <span className="name-logo">food explorer</span>
    </Container> 
  )
}