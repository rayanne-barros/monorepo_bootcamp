import styled from 'styled-components'
import Button from '@rayanne-barros/modulo-comum/components/Button'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <div>
      <Button />
      <Title>My page</Title>
    </div>
    
  )
}
