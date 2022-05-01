import * as S from './styles';
import React from 'react';

// import { Container } from './styles';

const WatchScreen: React.FC = () => {
  return (
      <S.WrapperWatch>
        <S.IframeWatch></S.IframeWatch>
        <S.NameEpisode>Episode 01 - Novela Jesus</S.NameEpisode>
        <S.DescriptionEpisode>Lorem ipsum dolor sit amet amot evit</S.DescriptionEpisode>
        <S.ButtonNext>Próximo episódio</S.ButtonNext>
      </S.WrapperWatch>
    );
}

export default WatchScreen;
