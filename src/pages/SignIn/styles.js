import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 275px) {
    width: 100%;
  
    > .content {
      margin: 15.8rem auto;
  
      > .lg-name {
        font-size: 3.5rem;
        font-weight: 700;
  
        img {
          width: 4.3rem;
        }
      }
    }
  }

  @media (min-width: 900px) {
    margin: 20rem 0;
    
    > .content{
      width: auto;
      max-width: 120rem;
      margin: 0 auto;
      display: flex;
      align-items: center;
      padding: 0 10rem;
      gap: 6rem;

      > .lg-name {
        font-size: 3.5rem;
      }
    }
  }  

  @media (min-width: 936px) {
    > .content {
      > .lg-name {
        font-size: 4.2rem;
      }
    }
  }
`;



export const Form = styled.form`
  @media (min-width: 275px) {
    width: 100%;
    max-width: 37rem;
    margin: 0 auto;
    padding: 0 4rem;
    text-align: left;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  
    h1 {
      text-align: center;
      margin-bottom: 3.2rem;
      visibility: hidden;
    }
    
    .input {
      width: 100%;
      max-width: 37rem;
      padding: 1.6rem 1.4rem;
      margin-bottom: 3.2rem;
  
      &::placeholder {
        font-size: 1.2rem;
      }
    }
  
    > .btn {
      width: 100%;
      max-width: 37rem;
      margin: 0 auto 3.2rem;
      background-color: ${({ theme }) => theme.COLORS.BTN_BACKGROUND};
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
      border-radius: .8rem;
    }
  
    .link {
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
      text-decoration: none;
      text-align: center;
    }
  }

  @media (min-width: 900px) {
    margin: 2.5rem 0 2.5rem auto;
    background-color: ${({ theme }) => theme.COLORS.FORM_BACKGROND};
    border-radius: 1.6rem;
    padding: 6.4rem;
    transition: 1s;

    h1 {
      visibility: visible;
      font-weight: 500;
    }
  }

`;