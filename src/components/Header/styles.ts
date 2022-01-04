import styled from "styled-components";

export const Container = styled.header``;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  input {
    display: block;
  }
  .navbar {
    width: 430px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    ul {
      display: flex;
      gap: 20px;
      list-style: none;
      color: var(--white);
      font-family: montserrat;
      font-weight: 300;
    }

    a {
      text-decoration: none;
      position: relative;
      padding-bottom: 5px;
      font-weight: bold;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 3px;
        background-color: white;
        transition: all 0.3s ease;
      }
      &:link {
        color: white;
      }
      &:hover {
        color: white;
        &::before {
          width: 80%;
        }
      }

      &:visited {
        color: white;
      }

      &.active {
        a {
          color: white;
          &::before {
            width: 50%;
          }
        }
      }
    }
  }

  button {
    font-size: 1rem;
    color: var(--green);
    background: var(--white);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    background-color: var(--white);
  }

  @media (max-width: 920px) {
    img {
      filter: brightness(0.5);
      transform: scale(0.7, 0.7);
    }

    .navbar {
      display: none;
    }
    .hamburger {
      display: block;
      margin-right: 5px;
    }

    .hamburger.active .bar:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    .hamburger.active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
`;
