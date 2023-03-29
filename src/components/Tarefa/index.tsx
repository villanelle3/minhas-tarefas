import * as S from './styles'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { useState } from 'react'

const Tarefa = () => {
  const [estaEditando, setestaEditando] = useState(false)
  return (
    <S.Card>
      <S.Titulo>Nome da tarefa</S.Titulo>
      <S.Tag>importante</S.Tag>
      <S.Tag>pendente</S.Tag>
      <br />
      <br />
      <FloatingLabel
        controlId="floatingTextarea"
        label="Descrição"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
      {estaEditando ? (
        <>
          <Button variant="dark">Salvar</Button>
          <Button
            variant="danger"
            className="marginlEFT"
            onClick={() => setestaEditando(false)}
          >
            Cancelar
          </Button>
        </>
      ) : (
        <>
          <Button variant="dark" onClick={() => setestaEditando(true)}>
            Editar
          </Button>
          <Button variant="danger" className="marginlEFT">
            Remover
          </Button>
        </>
      )}
    </S.Card>
  )
}

export default Tarefa
