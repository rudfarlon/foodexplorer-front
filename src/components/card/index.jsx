import { Container } from "./styles";
import { Button } from "../button";
import { Quantity } from "../quantity";

import heart from '../../assets/heart.svg';
import plate from '../../assets/plate.svg';

export function Card({ ...rest }) {
  return(
    <Container {...rest}>
        <div className="content">
          <img className="favorite" src={heart} />
          <img className="plate" src={plate} alt="imagem do prato" />
          <h2 className="title">Salada Ravanello</h2>
          <p className="info">Rabanetes, folhas verdes e molho agridoce salpicado com gergelim</p>
          <span className="amount">R$ 49,97</span>
          <div className="confirm">
            <div className="quantity">
              <Quantity />
            </div> 
            <Button
            className="btn"
            title="incluir" />
          </div>
        </div>

    </Container>
  )
}