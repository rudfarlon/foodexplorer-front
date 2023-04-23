import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 4.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  > span {
    color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  }
`;