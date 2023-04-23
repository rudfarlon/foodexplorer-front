import { Link } from 'react-router-dom';

import { Container, Form } from "./styles";

import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";

export function SignUp({ ...rest }) {
  return(
    <Container {...rest}>
      <div className="content">
        <div className="lg-name">
          <Logo />
        </div>
        <Form>
          <h1>Crie sua conta</h1>
        
          <Input className="input" type="text" label="Seu nome" id="name"
            placeholder="Exemplo: Maria da Silva"
          />

          
          <Input className="input" type="email" label="Email" id="email"
            placeholder="Exemplo: exemplo@exemplo.com"
          />

          
          <Input className="input" type="password" label="Senha" id="senha"
            placeholder="No mínimo 6 caracteres"
          />

          <Button className="btn" title="Criar conta" />

          <Link className='link' to="/">
            Já tenho uma conta
          </Link>
        </Form>
      </div>
    </Container>
  )
}