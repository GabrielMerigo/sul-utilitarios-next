import BoxText from '../../assets/box-text.png';
import { CardBoardContainer } from './styles'
import Image from 'next/image';

interface CardBoardProps {
  width: number;
  top: number;
  content: string;
}

export function CardBoard(props: CardBoardProps) {
  return (
    <>
      <CardBoardContainer top={props.top} width={props.width} content={props.content}>
        <Image src={BoxText} className="single" alt="boxText" />
        <h1>{props.content}</h1>
      </CardBoardContainer>
    </>
  )
}