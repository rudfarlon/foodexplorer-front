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
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.CARD_BACKGROUND};

    > .change {
      width: fit-content;
      height: 2.4rem;
      position: relative;
      top: 1.6rem;
      right: -7rem;
    }

    > .plate {
      width: 8.8rem;
      margin-top: 3.5rem;
    }

    h2 {
      margin: 1.2rem 0;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    }

    > .amount {
      color: ${({ theme }) => theme.COLORS.ADMIN_AMOUNT};
      margin-bottom: 7rem;
    }
  }
`;