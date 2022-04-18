import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

html,
body {
    background: #141412;
    color: #fff;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}



`