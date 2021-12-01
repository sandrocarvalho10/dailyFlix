import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 270px;
  background: #ccc;
  transition: all 0.2s;
  transform: scale(0.8);
  color: #fff;
  opacity: 0.8;

  &:hover {
    transform: scale(1);
    opacity: 1;

    
    svg {
      position: absolute;
      display: block;
      top: 50%; /* position the top  edge of the element at the middle of the parent */
      left: 50%; /* position the left edge of the element at the middle of the parent */

      transform: translate(-50%, -50%);
    }
  }

  a{
      width: 100%;
      height: 100%;
      background: redial-gradient(rgba(0,0,0,0.5), rgba(255,255,255,0.0) );
  }

  svg {
      transition: all 4ms;
    display: none;
  }
`;
