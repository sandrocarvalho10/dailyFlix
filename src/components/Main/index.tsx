import api from "../../services/api";
import { Card } from "../Card";
import * as S from "./styles";
import { useEffect, useState } from "react";
import { List } from "../List";
import { AxiosResponse } from "axios";

export interface ListProps {
  slug: string,
  title: string,
  src: string,
  items: AxiosResponse<any, any> | never

}
export const Main: React.FC = () => {
  const playlists = ["x6hnrv"];
  const [lista, setLista] = useState<any>([]);
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
        lista.map((movie: any,key: any) => (
          <S.ContainedTitle key={key}>
            <S.Title>{movie.title}</S.Title>
            <List items={movie.items} />
          </S.ContainedTitle>

        ))


      }
    </S.Main>
  );
};
