import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

import Header from '@/components/views/Header'

export const GlobalLayout = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Main>
        <Outlet />
      </Main>
    </>
  )
}

const Main = styled.main`
  margin-top: 1rem;
  padding: 0 1rem;
`
