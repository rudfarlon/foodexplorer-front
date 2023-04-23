import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.TAG_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${ theme.COLORS.ADMIN_AMOUNT}` : "none"};
  

  input {
    width: fit-content;
    padding: 1.2rem 0 1.2rem 1.2rem;
    color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
    }
  }
  
  > button {
    width: fit-content;
    padding-right: 1.6rem;
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.BTN_BACKGROUND};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
  }
`;
