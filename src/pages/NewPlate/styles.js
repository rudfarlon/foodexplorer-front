import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .main {
    margin: 1rem 3.2rem 5.3rem;

    .link {
      width: 100%;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
      
      > svg {
        font-size: 2.2rem;
      }
    }
    
    h1 {
      margin-block: 2.4rem;
      color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    }
  }
  .footer {
    padding: 2.9rem 2.7rem;
  }

  @media (min-width: 900px) {
    width: 100%;
    
    .main {
      width: 100%;
      max-width: 112rem;
      margin: 0 auto;
      padding: 0 1.5rem;
      
      .link {
        margin-top: 4rem;
        font-size: 2.4rem;

        > svg {
          font-size: 3rem;
        }
      }

      h1 {
        font-size: 4rem;
      }
    }

    .footer {
      position: absolute;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  position: relative;
  color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
  
  .input {
    padding: 1.6rem 1.4rem 1.6rem 1.4rem;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  .input-image {
    padding: 1.2rem 16.7rem 1.2rem 6.4rem;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }
    
  svg {
    position: absolute;
    margin: 5.5rem .8rem 1.2rem 3.2rem;
  }

  .category {
    padding: 0 1.6rem 0 1.6rem;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  #category {
    width: 100%;
    padding: .8rem 1.6rem .8rem 0;
    margin-top: .8rem;
    margin-bottom: .8rem;
    border-radius: .8rem;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.PLACEHOLDER};
  }

  .ingredients {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    flex-wrap: wrap;

    padding: .8rem 1.6rem 0 1.6rem;
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
    border-radius: .8rem;
    background-color: ${({ theme }) => theme.COLORS.INPUT_BACKGROUND};
  }

  .tag-input {
    width: 10rem;
  }  

  svg:last-child {
    margin: -0.5rem 0;
  }

  .textarea {
    margin-top: 1.6rem;
    margin-bottom: 2.4rem;
  }

  .btn {
    background-color: ${({ theme }) => theme.COLORS.ADMBTN_BACKGROUND};
    color: ${({ theme }) => theme.COLORS.TEXTBTNTITLE};
    border-radius: .5rem;
  }

  @media (min-width: 900px) {
    width: 100%;
    max-width: 112rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3.2rem;

    .input-image {
      padding: 1.2rem 3.2rem 1.2rem 6.4rem;
      font-size: 1.4rem;
    }

    .category {
      margin-top: 2.5rem;
    }

    #category {
      padding: .6rem 1.6rem .6rem 0;
    }

    #ingredients {
      grid-column-start: 1;
      grid-column-end: 3;

      .ingredients {
        padding: .6rem 1.6rem 0 1.6rem;
      }
    }

    .tag-input {
      padding: 1rem 0 .8rem 1rem; 
    }

    #description {
      grid-column-start: 1;
      grid-column-end: 4;

      .textarea {
        margin-bottom: 0;
      }
    }

    .btn {
      grid-column-start: 3;
      grid-column-end: 4;
      margin-bottom: 9rem;
    } 
  }
`;