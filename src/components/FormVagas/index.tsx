import { FormEvent, useState } from 'react'
import { Field, SearchBtn, StyledForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <Field
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchBtn type="submit">Pesquisar</SearchBtn>
    </StyledForm>
  )
}
export default FormVagas
