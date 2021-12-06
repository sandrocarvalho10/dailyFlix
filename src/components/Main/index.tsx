import { Card } from '../Card'
import * as S from './styles'
export const Main = () => {
    return(
        <S.Main className="container">
            <S.ListCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </S.ListCards>
        </S.Main>
    )
}