import * as S from "./styles";
import { FiPlay } from "react-icons/fi";
import Image from 'next/image'
import imgCover from '../../../public/img/cover.jpg'
export const Card = ({item}: any) => {

  console.log(item)
  return (
    <S.Card>
      <Image layout="responsive" src={imgCover} alt={item.title} />
      <a href="#">
        <FiPlay size={48} />
      </a>
      <div className="legend">
        <h4>{item.title}</h4>
        <h6 className="small">{"Novelas" } | {'Gospel'}</h6>
      </div>
    </S.Card>
  );
};
