import React from 'react'
import styled from 'styled-components'

const ScreenContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const FillContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const Component: React.FC = () => {
  return <ScreenContainer>TEST TEXT hi hi hi</ScreenContainer>
}

export const App: React.FC = () => <Component />
