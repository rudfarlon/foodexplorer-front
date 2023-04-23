import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 17.2rem;
  border-radius: .8rem;
  padding: 1.4rem;

  background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  border: none;
  outline: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }
`;