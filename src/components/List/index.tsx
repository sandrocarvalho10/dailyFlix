import { Card } from '../Card'
import * as S from './styles'

export const List = ({items}: any) =>{

  const itemsProps = items.data;
  console.log(itemsProps.list)

  return(
    <S.ListCards>
      {
      itemsProps.list.map((item,key) =>(
        <Card  key={key}  item={item}/>
      ))
      }

    </S.ListCards>
  )
}
