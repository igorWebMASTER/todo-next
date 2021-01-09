import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;800&display=swap');
*{
 margin: 0;
 padding: 0;
 outline: 0;
 box-sizing: border-box;
}

body{
  -webkit-font-smoothing: antialised;
 
}

body, input , button{
  font-family: 'Nunito', sans-serif;
}

#root{
  margin: 0 auto;
  /* padding: 0 20px 50px; */
}

button{
  cursor: pointer;
}


`;
