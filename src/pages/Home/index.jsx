import { Container } from "./styles";

import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { Header } from '../../components/header';
import { Banner } from '../../components/banner';
import { Card } from '../../components/card';
import { Footer } from '../../components/footer';

export function Home() {
  return(
    <Container>
      <Header className="header"/>
      <div className="main">
        <div className="banner">
          <Banner />
        </div>
        <div className="meals">
          <h2 className="title">Refeições</h2>
          <div className="carrossel">
            <RiArrowLeftSLine className="left"/>
            <div className="meal">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <RiArrowRightSLine className="right"/>
          </div>
          <h2 className="title">Pratos principais</h2>
          <div className="carrossel">
            <RiArrowLeftSLine className="left"/>
            <div className="meal">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <RiArrowRightSLine className="right"/>
          </div>
          <h2 className="title">Bebidas</h2>
          <div className="carrossel">
          <RiArrowLeftSLine className="left"/>
            <div className="meal">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <RiArrowRightSLine className="right"/>
          </div>
        </div>
      </div>
      <Footer className="footer" />
    </Container>
  )
}