import styled from 'styled-components'

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.SecondaryColor};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const SearchBtn = styled.button`
  background-color: ${(props) => props.theme.MainColor};
  border: 1px solid ${(props) => props.theme.MainColor};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.SecondaryColor};
  margin-left: 8px;
  cursor: pointer;
`

export const Field = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.MainColor};
`
