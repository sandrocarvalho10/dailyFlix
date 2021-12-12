import api from "../../services/api";
import { Card } from "../Card";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { List } from "../List";


export const Main = () => {
  const playlists = ["x6hnrv"];
  const [lista, setLista] = useState([]);
  const [playlist1, setPlaylist1] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      const list = await api.getHomeList();
      setLista(list);
    }

    loadAll()

    // console.log(lista)

  }, [])


  return (
    <S.Main className="container">
      {
        lista.map((movie,key) => (
          <S.ContainedTitle key={key}>
            <S.Title>{movie.title}</S.Title>
            <List items={movie.items} />
          </S.ContainedTitle>

        ))


      }
    </S.Main>
  );
};
