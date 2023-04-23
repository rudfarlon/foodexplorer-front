import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    position: absolute;
    margin-bottom: 3.4rem;
  }
  
  @media (min-width: 300px) {
    > .bc_info {
      width: 100%;
      height: 10rem;
      margin-left: 1.5rem;
      margin-bottom: 6.2rem;
      padding: 2rem .8rem 2.2rem 5rem;
  
      background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  
      h2 {
        font-size: 1.8rem;
        margin-bottom: .3rem;
        position: relative;
      }
  
      p {
        font-size: 1.2rem;
        line-height: 140%;
        position: absolute;
      }
    }

    img {
      width: 17rem;
      margin-bottom: 9.5rem;
    }
  }

  @media(min-width: 415px) {
    > .bc_info {
      padding: 2rem .8rem 2.2rem 15rem;
      margin-bottom: 6.2rem;
    }
  }

  @media(min-width: 600px) {
    > .bc_info {
      height: 15rem;
      margin: 6rem 0 4.8rem 2.5rem;
      margin-top: 6rem;
      margin-bottom: 4.8rem;
      padding: 3.6rem .8rem 2.2rem 25rem;

      h2 {
        font-size: 2rem;
      }

      p {
        font-size: 1.6rem;
        margin-right: 2rem;
      }
    }

    img {
      width: 30rem;
      margin-bottom: 7.3rem;
    }
  
  }

  @media (min-width: 900px) {
    max-width: 112rem;
    margin: 2.6rem auto;
    
    > .bc_info {
      height: 23rem;
      margin: 0 0 2rem 3.5rem;
      padding-right: 7rem;

      h2 {
        font-size: 3rem;
        margin-left: 13rem;
        margin-top: 3rem;
      }

      p {
        font-size: 1.6rem;
        margin-left: 13rem;
        margin-right: 2rem;
      }
    }

    img {
      width: 40rem;
      padding-bottom: 3rem;
    }
  }
`;