import { Routes, Route } from 'react-router-dom'
import { GlobalLayout } from '@/components/layouts/GlobalLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <GlobalLayout /> }>
          <Route index
            element={
              <h2>Characters</h2>
            }
          />
          <Route path="/episodes"
            element={
              <h2>Episodes</h2>
            }
          />
          <Route path="/locations"
            element={
              <h2>Locations</h2>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
