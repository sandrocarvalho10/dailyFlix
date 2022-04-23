import { useState } from "react";
import { Card } from "../Card";
import {
  MdNavigateBefore,
  MdNavigateNext,
} from "react-icons/md";
import * as S from "./styles";

export const List = ({ items }: any) => {
  const itemsProps = items.data;

  // console.log('Items ',itemsProps)

  const [scrollX, setScrollX] = useState(0);
  // const [listW, setListW] = useState(0);



  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2 );
    let listW = itemsProps.list.length * 250;
    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) -60;
    }
    setScrollX(x)
    };




  return (
    <S.ListCards className="movieRow">
      <S.MovieRowLeft onClick={handleLeftArrow}>
        <MdNavigateBefore
          style={{
            fontSize: 50,
          }}
        />
      </S.MovieRowLeft>
      <S.MovieRowRight onClick={handleRightArrow}>
        <MdNavigateNext
          style={{
            fontSize: 50,
          }}
        />
      </S.MovieRowRight>

      <S.MovieRowListArea>
        <S.MovieRowList style={{
          marginLeft: scrollX,
          width: itemsProps.list.length * 250
        }}>
        {itemsProps.list.map((item: any, key: any) => (
          <Card key={key} item={item} />
        ))}
        </S.MovieRowList>
      </S.MovieRowListArea>

    </S.ListCards>
  );
};
