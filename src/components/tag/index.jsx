import { Container } from "./styles";

export function Tag({ title, value, ...rest }) {
  return(
    <Container {...rest}>
      {value}
      {title}
    </Container>
  )
}