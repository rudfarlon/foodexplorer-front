import { Container } from "./styles";
import { Header } from "../../components/header";
import { Input } from "../../components/input";
import { Footer } from "../../components/footer";

import { FiSearch } from 'react-icons/fi';

export function Menu() {
  return(
    <Container>
      <Header className="header" />
      <div className="content">
        <Input 
          className="input"
          icon={FiSearch}
          placeholder="Busque por pratos ou ingredientes"
        /> 
        <a className="admin" href="#">Novo prato</a>
        <a href="/">Sair</a>
      </div>
      <Footer className="footer" />
    </Container>
  )
}