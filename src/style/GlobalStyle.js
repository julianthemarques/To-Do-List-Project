import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Hepta Slab', serif;
    font-size: 1rem;
}

.app{
    width: 100vw;
    height: 100vh;
    padding:5rem;
}

body{
 background-image: url('/img/anotacoes.jpeg');
 background-size: cover;
 background-repeat: repeat-y ;
 width: 100vh;
 height: 100%;
}



.title{
    font-size: 4rem;
    display: flex;
    justify-content: center;
    padding: 0.8rem;
    color: #174580;
    @media screen and (max-width:990px){
        font-size: 3rem;
    }
    @media screen and (max-width:660px){
        font-size: 2rem;
    }
}

.container{
    display: flex;
    flex-direction: column ;
    width: 100%;
    height: 100%;
}

.creatingContainer{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
}


.inputAddTodo{
    width: 30rem;
    height: 3.2rem;
    background-color: transparent;
    border: none;
    border-bottom: 0.3rem solid #151C48;
    border-radius: 0.2rem 0 0 0.2rem;
    outline: none;
    color:  white;
    padding-left: 0.5rem;
    ::placeholder{
        font-size: 1.1rem;
        color: white;
    }
}

.buttonAddTodo{
    height: 3.2rem;
    border: none;
    font-size: 1rem;
    background-color: #151C48;
    border: 0.3rem solid #151C48;
    color: white;
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 0 0.5rem 0.5rem 0;
}

.containerList{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.4rem;
    padding: 2rem 4rem;

    li{
    width: 50%;
    color: white;
    border-radius: 0.5rem;
    flex: 1;
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 1rem;
    @media screen and (max-width:1440px){
        width:50%;
    }
    @media screen and (max-width:1190px){
        width:70%;
    }
    @media screen and (max-width:940px){
        width:90%;
    }
    @media screen and (max-width:690px){
        width:150%;
    }
    @media screen and (max-width:446px){
        width:220%;
    } 
    @media screen and (max-width:407px){
        width: 500%;
    }    
   

    p{
        max-width: 30rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        
        :hover{
         text-overflow: unset;
         overflow: auto;
        }
     }
}
}

.emojis{
    display: flex
}

.emoji {
    margin-right: 0.5rem;
}

li{
}

li:nth-child(4n+1){
    background-color: #2A5872;
}

li:nth-child(4n+2){
    background-color: #174580;
}

li:nth-child(4n+3){
    background-color: #3B70A2;
}
li:nth-child(4n+4){
    background-color: #00A1D7;
}

.updateContainer{
    width: 100%;
    display: flex;
    justify-content: center;
}

.inputUpdateTodo{
    width: 70%;
    border: none;
    border-bottom: 0.3rem solid #151C48;
    border-radius: 0.2rem 0 0 0.2rem;
    outline: none;
    background-color: transparent;
    color:  white;
    ::placeholder{
        color: white;
        font-size: 1.1rem;
    }
}

.buttonUpdateTodo{
    margin-right: 0.5rem;
    font-size: 1rem;
    background-color: #151C48;
    border: 0.3rem solid #151C48;
    color: white;
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 0 0.5rem 0.5rem 0;
}
`;

export default GlobalStyle;
