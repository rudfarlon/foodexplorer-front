import { Container } from "./styles";
import { Link } from 'react-router-dom';

import { Header } from '../../components/header';
import { HeaderAdmin } from '../../components/headerAdmin';
import { Tag } from '../../components/tag';
import { Quantity } from '../../components/quantity';
import { Button } from "../../components/button";
import { Footer } from '../../components/footer';

import { RiArrowLeftSLine } from "react-icons/ri";

import plate from '../../assets/plate.svg';
import receipt from '../../assets/receipt.svg';
 
export function Details() {
  return(
    <Container>
      <Header id="header" />
      <div className="main">
        <Link className="link" to="/">
          <RiArrowLeftSLine />
          voltar
        </Link>
        <div className="img-plate">
          <img className="plate" src={plate} alt="Imagem do prato" />
        </div>
        <div className="info-plate">
          <h2>Salada Ravanello</h2>
          <p>Rabanete, folhas verdes e molho agridoce salpicados com gergelim.</p>
          <div className="ingredients">
            <Tag title="salada"/><Tag title="salada"/>
            <Tag title="salada"/><Tag title="salada"/>
            <Tag title="salada"/><Tag />
          </div>
          <div className="confirm">
            <Quantity className="quantity" />
            <Button className="btn" src={receipt} title="pedir &sdot; R$ 25,00" />
          </div> 
        </div>
      </div> 
      <Footer id="footer" />
    </Container>
  )
}