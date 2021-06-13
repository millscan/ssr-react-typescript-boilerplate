import React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const Component: React.FC = () => {
  return <ScreenContainer>Hello World!</ScreenContainer>
}

export const App: React.FC = () => <Component />
