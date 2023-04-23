import styled from "styled-components";

export const Container = styled.span`
  width: fit-content;
  padding: .4rem .8rem;

  display: flex;
  flex-direction: row;

  background-color: ${({ theme }) => theme.COLORS.TAG_BACKGROUND};
  color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  border-radius: .5rem;
  font-size: 1.4rem;
`;