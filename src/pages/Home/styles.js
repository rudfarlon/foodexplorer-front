import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  overflow: hidden;

  .banner {
    width: 100%;
    margin-top: 4.4rem;
    padding: 0 1.6rem 0 0;
  }

  .meals {
    > .title:first-child {
      margin: 0 0 2.4rem 2.4rem;
    }
    
    > .title {
      margin: 2.4rem 0 2.4rem 2.4rem;
      font-size: 1.8rem;
      font-weight: 400;
    }

    .carrossel {
      width: 100%;
      position: relative;

      .left, .right {
        display: none;
      }
    }

    .carrossel:last-child {
      margin-bottom: 2.5rem;
    }

    .meal {
      width: 100%;
      margin-left: 2.4rem;
      display: flex;
      gap: 1.6rem;
      overflow: scroll;

      h2 {
        font-size: 1.4rem;
      }
    }
  }

  .footer {
    padding: 2.9rem 2.7rem;
  }

  @media (min-width: 900px) {

    .main {
      max-width: 112rem;
      margin: 0 auto;

      > .banner {
        max-width: 112rem;
        margin: 9.5rem auto 0;
      }

      .meals {
        max-width: 112rem;

        h2 {
          font-size: 3.2rem;
        }
        
        .carrossel {
          display: flex;
          align-items: center;
          
          svg {
            width: 4rem;
            height: 4rem;
            background-color: #000;
            box-shadow: 0 0 16rem 14rem rgba(0, 0, 0, 5.9);
            position: absolute;
            display: flex;
            position: relative;
          }
        }

        .meal {
          h2 {
            font-size: 2.4rem;
          }
        }
      }
    }
  }
`;