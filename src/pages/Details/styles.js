import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 11.4rem auto 7.7rem;

  #header {
    height: 11.4rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .main {
    height: 100%;
    padding: 3.7rem 5rem 4rem;

    grid-column-start: 1;
    grid-column-end: 3;
    
    .link {
      display: flex;
      align-items: center;
  
      font-size: 2.4rem;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  
      > svg {
        font-size: 3rem;
        width: fit-content;
      }
    }

    .img-plate {
      width: 100%;
      margin: 1.6rem auto;

      > .plate {
        width: 24rem;
        margin: 0 auto;
        display: flex;
      }
    }

    .info-plate {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
      line-height: 140%;
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
      
      h2 {
        margin: 3rem 0;
        font-size: 2.7rem;
        font-weight: 500;
      }
      
      p {
        margin: 0 0 3rem 0;
      }

      > .ingredients {
        height: fit-content;
        margin-bottom: 4.8rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }

      > .confirm {
        display: flex;
        justify-content: center;
        gap: 1.6rem;


        > .quantity {
          width: fit-content;
          padding: .5rem;
          font-size: 2.2rem;

          > img {
            width: 2rem;
          }
        }

        > .btn {
          width: 18.8rem;
          padding: 1.3rem 2rem;

          display: flex;
          align-items: center;
          gap: .7rem;
          border-radius: .3rem;

          background-color: ${({ theme }) => theme.COLORS.BTN_BACKGROUND};
          color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};

          > img {
            width: 2rem;
            transition: .3s;
          }
        }
      }
    }
  }

  #footer {
    grid-column-start: 1;
    grid-column-end: 3;

    padding: 2.9rem 2.7rem;
  }


  @media (min-width: 760px) {
    .main {

      .img-plate {

        .plate {
          width: 32.7rem;
        }
      }
      
      .info-plate {

        h2 {
          margin: 2rem 0;
          font-size: 3.2rem;
        }

        p {
          margin: 3rem 0;
          font-size: 1.8rem;
        }
      }
    }
  }


  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    #header {
      width: 100%;
      margin: 0 auto;
    }

    .main {
      width: 100%;
      max-width: 112rem;
      margin: 0 auto;

      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 4.7rem;
      
      .link {
        grid-column-start: 1;
        grid-column-end: 3;
      }

      .img-plate {
        .plate {
          width: 39rem;
        }
      }
      
      .info-plate {
        text-align: start;
        display: flex;
        align-items: flex-start;
        
        h2 {
          font-size: 4rem;
          line-height: 140%;
        }

        p {
          margin: 2.4rem 0;
          font-size: 2.4rem;
          line-height: 140%;
        }

        .ingredients {
          justify-content: flex-start;
        }
      }

      .btn {
        img {
          display: none;
        }
      }
    }

    #footer {
      position: absolute;
    }
  }
`;