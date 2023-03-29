import * as S from "./styles";
import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <S.Header>
      <div className="container">
        <S.Logo>DailyFlix</S.Logo>

        <div>
          {!session && <S.Link onClick={() => signIn()}>Acessar Conta</S.Link>}
          {session && (
            <>
              <span>{`${
                session?.user.name ? "Entrou como " + session?.user.name : ""
              }`}</span>
              <S.Link onClick={() => signOut()}>Sair</S.Link>
            </>
          )}
        </div>
      </div>
    </S.Header>
  );
};
