import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet'

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
                <Helmet>
                  <title>Characters | RickAndMorty</title>
                  <meta name="description"
                    content="Website to show the characters of the rick
                      and morty series, taken from the public api of
                      rickandmortyapi.com"
                  />
                </Helmet>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Characters />
                </Suspense>
              </>
            }
          />
          <Route path="/episodes"
            element={
              <>
                <Helmet>
                  <title>Episodes | RickAndMorty</title>
                  <meta name="description"
                    content="Section of the rick and morty website
                      to show the episodes, taken from the public
                      api of rickandmortyapi.com"
                  />
                </Helmet>
                <Suspense fallback={ <SpinnerLoadingPage /> }>
                  <Episodes />
                </Suspense>
              </>
            }
          />
          <Route path="/locations"
            element={
              <>
                <Helmet>
                  <title>Locations | RickAndMorty</title>
                  <meta name="description"
                    content="Section of the rick and morty website
                    to show the locations, taken from the public
                    api of rickandmortyapi.com"
                  />
                </Helmet>
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
