import { Container } from "./styles";

export function Input({ icon: Icon, id, label, ...rest }) {
  return(
    <Container>
      {Icon && <Icon size={24} />}
      {label && <label htmlFor={id}>{label}</label>}
      <input {...rest} />
    </Container>
  )
}