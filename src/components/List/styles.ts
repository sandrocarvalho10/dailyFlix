import styled from "styled-components";

export const ListCards = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  &.movieRow {
    margin-bottom: 30px;
  }
`;

export const MovieRowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
  left: 0;

  &:hover {
    opacity: 1;
  }
  @media (max-width: 600px) {
    opacity: 0.7;
  }
`;
export const MovieRowRight = styled(MovieRowLeft)`
  right: 0;
  left: unset;

  &:hover {
    opacity: 1;
  }
`;

export const MovieRowListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
  height: 400px;
`;
export const MovieRowList = styled.ul`
  transition: all ease 0.5s;
  display: flex;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
`;
