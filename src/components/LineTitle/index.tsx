import { LineTitleContainer } from './styles';

interface LineTitleProps {
  title: string;
}

export function LineTitle(props: LineTitleProps) {
  return (
    <LineTitleContainer>
      <div></div>
      <h2>{props.title}</h2>
    </LineTitleContainer>
  )
}