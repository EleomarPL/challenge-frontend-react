import { Routes, Route } from 'react-router-dom'
import { GlobalLayout } from '@/components/layouts/GlobalLayout'

import Characters from '@/pages/Characters'
import Episodes from '@/pages/Episodes'
import Locations from '@/pages/Locations'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <GlobalLayout /> }>
          <Route index
            element={
              <Characters />
            }
          />
          <Route path="/episodes"
            element={
              <Episodes />
            }
          />
          <Route path="/locations"
            element={
              <Locations />
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
