import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.FORM_BACKGROND};
  .content {
    width: 100%;
    margin: 0 auto;
    padding: 4.6rem 2.8rem 2.4rem 2.8rem;
    display: flex;
    align-items: center;
    justify-content: baseline;
    

    > .menu {
      height: 1.8rem;
    }

    > .admin {
      width: fit-content;
      display: flex;
      align-items: center;
      gap: .8rem;
      margin: 0 auto;

      > .logo {
        width: 100%;
        font-size: 2.1rem;

        > img {
          width: 2.5rem;
        }
      }
  
      > p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
      }
    }
  }

  @media (min-width: 900px) {
    width: 100%;
    
    .content {
      width: 100%;
      max-width: 112rem;
    }
  }
`;