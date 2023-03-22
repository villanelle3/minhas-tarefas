import FitroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FitroCard legenda="pendentes" contador={1} />
        <FitroCard legenda="concluidas" contador={2} />
        <FitroCard legenda="urgentes" contador={3} />
        <FitroCard legenda="importantes" contador={4} />
        <FitroCard legenda="normal" contador={5} />
        <FitroCard legenda="todas" ativo contador={6} />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
