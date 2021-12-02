import Image from "next/image";
import * as S from "./styles";
import { FiPlay } from "react-icons/fi";
export const Card = () => {
  return (
    <S.Card>
      <Image src="/img/cover.jpg" width={200} height={270} alt="Capa Joker" />
      <a href="#">
        <FiPlay size={48} />
      </a>
      <div className="legend">
        <h4>Joken - Mudando de paradigma</h4>
        <h6 className="small">Capitulo 1 | Temp. 2</h6>
      </div>
    </S.Card>
  );
};
