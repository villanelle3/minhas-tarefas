import FitroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FitroCard />
        <FitroCard />
        <FitroCard />
        <FitroCard />
        <FitroCard ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
