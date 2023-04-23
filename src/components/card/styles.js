import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .content {
    width: 21rem;
    padding: 0 2.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};

    > .favorite {
      height: 2.4rem;
      position: relative;
      top: 1.6rem;
      left: 7rem;
    }

    > .plate {
      width: 8.8rem;
    }

    > .info {
      display: none;
    }

    > .amount {
      color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
    }

    > .confirm {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      > .quantity {
        height: 3.2rem;
        padding: .4rem 3.9rem;
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
      }    
  
      > .btn {
        height: 3.2rem;
        margin-bottom: 2.4rem;
        background: ${({ theme }) => theme.COLORS.BTN_BACKGROUND};
        color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
        border-radius: .5rem;
      }

    }

  }

  @media (min-width: 900px) {
    .content {
      width: 30.4rem;

      > .favorite {
        left: 10rem;
      }

      > .plate {
        width: 17.6rem;
      }

      > .info {
        display: flex;
        text-align: center;
        font-size: 1.4rem;
        line-height: 140%;
      }

      > .amount {
        font-size: 3.2rem;
      }

      > .confirm {
        display: flex;
        flex-direction: row;

        > .quantity {
          padding: 0;
        }

        > .btn {
          padding: 1.2rem 2.4rem;
        }
      }
    }
  }
`;