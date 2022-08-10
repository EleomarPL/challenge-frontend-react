import { useEffect, useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SkeletonLoadingTable from '../components/common/SkeletonLoadingTable'
import Pagination from '../components/views/Pagination'
import Searcher from '../components/views/Searcher'
import TablePaginate from '../components/views/TablePaginate'
import useControlRequest from '../hooks/useControlRequest'

import { resetState, selectEpisode } from '../features/episodesSlice'
import { columnsEpisodes } from '../const/columnsTableEpisodes'
import useGetEpisode from '../hooks/useGetEpisode'

const ModalEpisode = lazy(() => import('../components/modals/ModalEpisode'))

const Episodes = () => {
  const [searcher, setSearcher] = useState('')
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const episodes = useSelector(state => state.episodes.episodes)
  const status = useSelector(state => state.episodes.status)
  const totalItems = useSelector(state => state.episodes.info?.count)

  const { searchEpisodesByName } = useGetEpisode()
  const { willNewRequestEpisode } = useControlRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    setPage(0)
    searchEpisodesByName(searcher)
    dispatch(resetState())
  }, [searcher])

  const handleCaculculateRequest = (newPage, rpp) => {
    if (rpp) willNewRequestEpisode(newPage, rpp, searcher)
    else willNewRequestEpisode(newPage, rowsPerPage, searcher)
  }
  const handleSelectEpisode = (episode) => {
    setOpen(true)
    dispatch(selectEpisode(episode))
  }

  return (
    <div>
      <Searcher type="Episode" setState={ setSearcher } />
      <TablePaginate columns={ columnsEpisodes } rows={ episodes }
        page={ page } rowsPerPage={ rowsPerPage }
        callback={ handleSelectEpisode }
      />
      { status === 'error' && <div>Error</div> }
      { status === 'loading' && <SkeletonLoadingTable /> }
      <Pagination page={ page } setPage={ setPage }
        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
        type="Episode" totalItems={ totalItems || 0 }
        calculateFunction={ handleCaculculateRequest }
      />
      <Suspense fallback={ <span>Loading Modal</span> }>
        <ModalEpisode open={ open } setOpen={ setOpen } />
      </Suspense>
    </div>
  )
}

export default Episodes
