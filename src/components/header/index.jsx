import { Container } from "./styles";

import { Logo } from "../logo";
import menu from '../../assets/menu.svg';
import receipt from '../../assets/receipt.svg';

export function Header({ src, ...rest }) {
  
  return(
    <Container {...rest}>
      <div className="content">

        {<img className="menu" src={menu} />}

        <Logo className="logo" />
        
        {<img src={receipt} />}

      </div>
    </Container>
  )
}