import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  background: #000;

  & > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;
export const Logo = styled.a`
  font-size: 3.2rem;
  font-weight: bold;
  color: #fff;
`;

export const List = styled.ul`
display: flex;
align-items: center;
gap: 20px;
list-style: none;
`

export const Link = styled.a`
    opacity: 0.7;
    color: #FFF;
    font-size: 1.6rem;

    &:hover{
        opacity: 1;
    }
`;
