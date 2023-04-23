import styled from "styled-components";

export const Container = styled.header`
  @media (min-width: 275px) {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.FORM_BACKGROND};
    
    .content {
      max-width: 112rem;
      padding: 4.6rem 2.8rem 2.4rem 2.8rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
  
      > .logo {
        > img {
          width: 2.5rem;
        }
      }
  
      > .menu {
        height: 1.8rem;
      }
    }
  }
`;