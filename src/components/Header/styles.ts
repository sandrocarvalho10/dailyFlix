import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.a`
  font-size: 32px;
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

    &:hover{
        opacity: 1;
    }
`;