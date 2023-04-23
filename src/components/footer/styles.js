import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.7rem;
  bottom: 0;
  position: relative;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.FOOTER_BACKGROUND};

  > .content {
    width: 100%;
    max-width: 112rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > span {
      display: flex;
      align-items: center;
      gap: .6rem;
      color: ${({ theme }) => theme.COLORS.FOOTER_COLOR};
    }
  
    > img {
      height: 1.8rem;
    }
  
    > .copy {
      font-size: 1.2rem;
      font-family: ${({ theme }) => theme.FONTS.DM};
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    }

  }
`;