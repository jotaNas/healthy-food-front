import styled from "styled-components";

export const Container = styled.div`
  img {
    z-index: -1;
    position: absolute;
    top: -1px;
    right: -1px;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 920px) {
    img {
      filter: opacity(0.7);
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    width: 400px;
    font-size: 3rem;
    color: var(--titles);
    margin-right: 5px;
  }
  .search-recipes {
    margin-top: 10px;
    display: flex;
    gap: 20px;

    input {
      width: 21rem;
      height: 52px;
      padding: 15px;
      font-size: 1rem;
      color: var(--text);
      border-radius: 5px;

      ::-webkit-input-placeholder {
        color: var(--text);
        font-family: "muli";
      }
    }

    button {
      background: var(--green);
      width: 52px;
      height: 52px;
      border: none;
      border-radius: 5px;

      line-height: 5px;
    }
  }
  @media (max-width: 400px) {
    h1 {
      width: 300px;
    }
    .search-recipes {
      display: flex;
      flex-direction: column;
    }
  }
`;
