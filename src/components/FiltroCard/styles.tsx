import styled from 'styled-components'
import { Props } from '.'

type PropsSemLegenda = Omit<Props, 'legenda' | 'contador'>

export const Card = styled.div<PropsSemLegenda>`
  padding: 8px;
  border: 1.5px solid ${(props) => (props.ativo ? '#003bff' : '#cecb87')};
  background-color: ${(props) => (props.ativo ? '#cecb87 ' : '#fff')};
  color: #173396;
  border-radius: 8px;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`
export const Label = styled.span`
  font-size: 14px;
`
