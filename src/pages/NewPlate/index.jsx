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

export function NewPlate({ value, ...rest}) {
  return(
    <Container>
      <HeaderAdmin className="header"/>
      <div className="main">
        <Link className="link" to="/">
          <RiArrowLeftSLine />
          voltar
        </Link>
        <h1 className="title" >Adicionar prato</h1>

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
            placeholder="Ex: Salada Ceasar"
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
            placeholder="R$ 00,00"
          />

          <div id="description">
            <p>Descrição</p>
            <Textarea 
              className="textarea"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            />
          </div>

          <Button 
            className="btn"
            title="Salvar alterações"
          />
        </Form>
      </div>
      <Footer className="footer" />
    </Container>
  )
}