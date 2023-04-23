import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 11.4rem auto 7.7rem;

  .header {
    height: 11.4rem;
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .content {
    width: 100%;
    padding: 3.6rem 2.8rem;

    grid-column-start: 1;
    grid-column-end: 3;

    .input {
      width: 100%;
      padding: 1.6rem 1.4rem 1.6rem 5.2rem;
      margin-bottom: 3.6rem;
    }

    svg {
      position: absolute;
      margin: 1.2rem 1.4rem;
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
    }

    .admin {
      /* visibility: hidden; */
      display: none;
    }

    a {
      display: flex;
      padding-bottom: 1rem;
      font-size: 2.4rem;
      margin-bottom: 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.FOOTER_COLOR};
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    }

  }

  .footer {
    padding: 2.9rem 2.7rem;
    position: absolute;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;