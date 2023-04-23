import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  margin: 0 auto;
  text-align: left;

  > input {
    height: 4.8rem;
    width: 100%;
    margin: 0 auto;

    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    border-radius: .8rem;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }

    :focus {
      outline: ${({ theme }) => theme.COLORS.OUTLINE} solid 0.1rem;
    }
  }
`;