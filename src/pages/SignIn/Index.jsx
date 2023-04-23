import { Link } from 'react-router-dom';

import { Logo } from '../../components/logo';
import { Input } from '../../components/input';
import { Button } from '../../components/button';

import { Container, Form } from "./styles";

export function SignIn({ ...rest }) {
  return(
    <Container {...rest}>
      <div className="content">
        <div className="lg-name">
          <Logo />
        </div>
        <Form>
          <h1>Faça login</h1>
          
          <Input className="input" type="email" label="Email" id="email"
            placeholder="Exemplo: exemplo@exemplo.com"
          />

          <Input className="input" type="password" label="Senha" id="senha"
            placeholder="No mínimo 6 caracteres"
          />

          <Button className="btn" title="Entrar" />

          <Link className='link' to="/register">
            Criar uma conta
          </Link>
        </Form>
      </div>

    </Container>
  )
}