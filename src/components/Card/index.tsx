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
    </S.Card>
  );
};
