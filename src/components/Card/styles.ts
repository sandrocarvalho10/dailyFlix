import styled from "styled-components";


export const Card = styled.div`
width: 200px;
height: 270px;
background: #ccc;
padding: 15px;
transition: all 0.2s;
transform: scale(0.8);
color: #fff;
opacity: 0.8;

&:hover{
    transform: scale(1);
    opacity: 1;
}
`