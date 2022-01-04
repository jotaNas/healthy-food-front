import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #BADC58;
    --red:  #E62E4D;
    --shape: #FFFFFF;
    --titles: #1D164D; 
    --text: #BCBCBC;
    --white: #ffffff;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
  display: none;
}

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; 
    }
    @media (max-width: 720px){
      font-size: 87.5%; 
    }
    @media (max-width: 540px){
      font-size: 81.25%; 
    }
    @media (max-width: 420px){
      font-size: 75%; 
    }

    @media (max-width: 360px){
      font-size: 60%;
    }  
    scroll-behavior: smooth;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

/**
  .modal-overlay{
    background: rgba(0,0,0, 0.6);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal-content{
    width: 100%;
    max-width: 720px;
    padding: 3rem;
    position: relative;
    background: var(--background);
    max-height:720px;
    
  }  */

`;
