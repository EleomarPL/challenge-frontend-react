import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

import { GlobalLayout } from './components/layouts/GlobalLayout'
import SpinnerLoadingPage from './components/common/SpinnerLoadingPage'

const Characters = lazy(() => import('./pages/Characters'))
const Episodes = lazy(() => import('./pages/Episodes'))
const Locations = lazy(() => import('./pages/Locations'))

const App = () => {
  return (
    <>
      <Routes>
        <Route element={ <GlobalLayout /> }>
          <Route index
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Characters />
                </Suspense>
              </>
            }
          />
          <Route path="/episodes"
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Episodes />
                </Suspense>
              </>
            }
          />
          <Route path="/locations"
            element={
              <>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Locations />
                </Suspense>
              </>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default App
