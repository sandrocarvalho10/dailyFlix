import * as S from "./styles";
import { FiPlay } from "react-icons/fi";
export const Card = ({url, img, name, cap, temp}: any) => {
  return (
    <S.Card>
      <img src={img} alt={name} />
      <a href={url}>
        <FiPlay size={48} />
      </a>
      <div className="legend">
        <h4>{name}</h4>
        <h6 className="small">{cap } | {temp}</h6>
      </div>
    </S.Card>
  );
};
