import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Spartan&display=swap');

    *,*::before,*::after {
       padding:0px;
       border:none;
       outline:none; 
       margin:0px;
       box-sizing:border-box;
    }

    html,body, #root {
        width:100%;
        height:100%;  
        font-family:'Spartan',sans-serif;
        font-size:15px;
        background-color:#fff;   
        overflow-x:hidden;   
    }

`;
