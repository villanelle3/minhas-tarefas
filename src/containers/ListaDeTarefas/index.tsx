import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const ListaDeTarefas = () => (
  <S.ContainerS>
    <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
    <ul>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
      <li>
        <Tarefa />
      </li>
    </ul>
  </S.ContainerS>
)

export default ListaDeTarefas
