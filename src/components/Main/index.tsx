import { api } from "../../services/api";
import { Card } from "../Card";
import * as S from "./styles";
import { useEffect, useState } from "react";
export const Main = () => {
  const playlists = ["x6hnrv"];
  const [lista, setLista] = useState();
  const [playlist1, setPlaylist1] = useState([]);

  useEffect(() => {
    api.get(`playlist/${playlists[0]}`).then((response) => {
      setPlaylist1(response.data.id);
    });
  }, []);

  useEffect(() => {
    console.log(playlist1);
    api.get(`playlist/${playlist1}/videos`).then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <S.Main className="container">
      <S.ListCards>
        <Card
          cap="Cap. 1"
          img="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          name="Joker O cara"
          temp="2 Temp"
        />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.ListCards>
    </S.Main>
  );
};
