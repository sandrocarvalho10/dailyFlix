import * as S from "./styles";
import { FiPlay } from "react-icons/fi";
import Image from 'next/image'
export const Card = ({item}: any) => {

  return (
    <S.Card>
      <Image loading="lazy" src={item.thumbnail_url} alt={item.title} layout="fill"/>
      <a href={`/playlist/${item.owner}/video/${item.id}`}>
        <FiPlay size={48} />
      </a>
      <div className="legend">
        <h4 title={item.title}>{item.title}</h4>
        <h6 className="small">{"Novelas" } | {'Gospel'}</h6>
      </div>
    </S.Card>
  );
};
