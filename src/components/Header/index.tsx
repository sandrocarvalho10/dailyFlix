import * as S from './styles'

export const Header = () => {

    return (
        <S.Header>
            <S.Logo>DailyFlix</S.Logo>
            <S.List>
                <S.Link href="#">Acessar Conta</S.Link>
                <S.Link href="#">Sair</S.Link>
            </S.List>
        </S.Header>
    )
}