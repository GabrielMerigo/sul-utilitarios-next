import BoxText from '../../assets/box-text.png';

import { CardBoardContainer, Img } from './styles'

interface CardBoardProps {
  width: number;
  top: number;
  content: string;
}

export function CardBoard(props: CardBoardProps) {
  return (
    <>
      <CardBoardContainer top={props.top} width={props.width} content={props.content}>
        <Img src={BoxText} className="single" />
        <h1>{props.content}</h1>
      </CardBoardContainer>
    </>
  )
}