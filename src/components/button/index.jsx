import { Container } from "./styles";

export function Button({ title, src,...rest }) {
  return(
    <Container type="button" {...rest}>
      <img src={src} />
      {title}
    </Container>
  )
}