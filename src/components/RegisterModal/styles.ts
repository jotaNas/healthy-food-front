import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h2 {
    color: var(--green);
  }

  input {
    width: 21.5rem;
    height: 40px;
    padding: 15px;
    font-size: 1rem;
    color: var(--text);
    border-radius: 5px;

    ::-webkit-input-placeholder {
      color: var(--text);
      font-family: "muli";
    }
  }

  .close {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    font-size: 1rem;
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 10px;
    margin-right: 10px;
    &:hover {
      filter: brightness(0.9);
    }
  }

  .btn-submit {
    font-size: 1rem;
    font-family: "muli";
    width: 150px;
    border: 1px solid var(--green);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Error = styled.div`
  color: var(--red);
  font-size: 0.75rem;
`;

export const StyledForm = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr 1fr);
  gap: 20px;
  padding: 2rem;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 360px) {
    padding: 0;
  }
`;
