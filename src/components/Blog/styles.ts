import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin-top: 30px;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }

  button.rec-dot {
    background-color: var(--text);
    box-shadow: 0 0 1px 3px white;
  }

  button.rec-dot:hover,
  button.rec-dot:active,
  button.rec-dot:focus {
    box-shadow: 0 0 1px 3px grey;
  }

  .rec.rec-dot_active {
    background: #badc58;
  }

  .rec.rec-carousel-wrapper .rec-carousel button {
    color: var(--green);
    background-color: white;
    margin: 0 10px;
  }

  .rec.rec-carousel-wrapper .rec-carousel button:hover {
    background: var(--green);
    color: #fff;
    transition: all 1s;
  }
`;

export const Title = styled.div`
  text-align: center;
  h2 {
    font-size: 2rem;
    color: var(--titles);
  }
  p {
    font-size: 1rem;
    font-family: "muli";
    color: var(--text);
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #683bb7;
  color: #fff;
  margin: 15px;
  font-size: 4em;
`;
