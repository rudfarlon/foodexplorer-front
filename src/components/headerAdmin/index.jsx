import { Container } from "./styles";
import { Logo } from "../logo";
import menu from '../../assets/menu.svg';

export function HeaderAdmin({ src, id, ...rest }) {
  return(
    <Container {...rest}>
      <div className="content">
        {<img className="menu" src={menu} />}
        <div className="admin">
          <Logo className="logo" />
          <p>admin</p>
        </div>
      </div>
    </Container>
  )
}