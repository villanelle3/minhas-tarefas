import * as S from './styles'

export type Props = {
  ativo?: boolean
}

const FitroCard = (props: Props) => (
  <S.Card ativo={props.ativo}>
    <S.Contador>2</S.Contador>
    <S.Label>pendentes</S.Label>
  </S.Card>
)

export default FitroCard
