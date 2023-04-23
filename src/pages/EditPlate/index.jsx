import { Container, Form } from "./styles";
import { Link } from 'react-router-dom';

import { HeaderAdmin } from "../../components/headerAdmin";
import { Input } from "../../components/input";
import { TagInput } from "../../components/tagInput";
import { Textarea } from "../../components/textArea";
import { Button } from "../../components/button";
import { Footer } from "../../components/footer";

import { RiArrowLeftSLine } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";

export function EditPlate({ value, ...rest}) {
  return(
    <Container>
      <HeaderAdmin className="header" />
      <div className="main">
        <Link className="link" to="/">
          <RiArrowLeftSLine />
          voltar
        </Link>
        <h1 className="title" >Editar prato</h1>

        <Form>
          <Input 
            className="input-image"
            label="Imagem do prato"
            icon={FiUpload}
            id="image"
            placeholder="Selecione imagem"
          />

          <Input 
            className="input"
            type="text"
            label="Nome"
            placeholder="Salada Ceasar"
          />

          <div>
            <label htmlFor="category">Categoria</label>
            <div className="category">
              <select name="category" id="category">
                <option value="Salada Ceasar">Salada Ceasar</option>
              </select>
            </div>
          </div>

          <div id="ingredients">
            <p>Ingredientes</p>
            <div className="ingredients">
              <TagInput 
                value="Salada" 
                className="tag-input" 
              />

              <TagInput isNew
                className="tag-input"
                value={value}
                placeholder="Adicionar"
              />
            </div>
          </div>

          <Input 
            className="input"
            type="number"
            label="Preço"
            placeholder="R$ 40,00"
          />

          <div id="description">
            <p>Descrição</p>
            <Textarea 
              className="textarea"
              placeholder="A Salada César é uma opção refrescante para o verão."
            />
          </div>

          <div className="buttons">
            <Button 
              className="btn"
              title="Excluir prato"
            />

            <Button 
              className="btn-save"
              title="Salvar alterações"
            />
          </div>
        </Form>
      </div>
      <Footer className="footer" />
    </Container>
  )
}