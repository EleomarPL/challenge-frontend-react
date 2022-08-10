import { useEffect, useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SkeletonLoadingTable from '../components/common/SkeletonLoadingTable'
import Pagination from '../components/views/Pagination'
import Searcher from '../components/views/Searcher'
import TablePaginate from '../components/views/TablePaginate'
import useControlRequest from '../hooks/useControlRequest'

import { resetState, selectLocation } from '../features/locationsSlice'
import { columnsLocations } from '../const/columnsTableLocations'
import useGetLocation from '../hooks/useGetLocations'

const ModalLocation = lazy(() => import('../components/modals/ModalLocation'))

const Locations = () => {
  const [searcher, setSearcher] = useState('')
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const locations = useSelector(state => state.locations.locations)
  const status = useSelector(state => state.locations.status)
  const totalItems = useSelector(state => state.locations.info?.count)

  const { searchLocationByName } = useGetLocation()
  const { willNewRequestLocation } = useControlRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    setPage(0)
    searchLocationByName(searcher)
    dispatch(resetState())
  }, [searcher])

  const handleCaculculateRequest = (newPage, rpp) => {
    if (rpp) willNewRequestLocation(newPage, rpp, searcher)
    else willNewRequestLocation(newPage, rowsPerPage, searcher)
  }
  const handleSelectLocation = (location) => {
    setOpen(true)
    dispatch(selectLocation(location))
  }

  return (
    <div>
      <Searcher type="Location" setState={ setSearcher } />
      <TablePaginate columns={ columnsLocations } rows={ locations }
        page={ page } rowsPerPage={ rowsPerPage }
        callback={ handleSelectLocation }
      />
      { status === 'error' && <div>Error</div> }
      { status === 'loading' && <SkeletonLoadingTable /> }
      <Pagination page={ page } setPage={ setPage }
        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
        type="Location" totalItems={ totalItems || 0 }
        calculateFunction={ handleCaculculateRequest }
      />
      <Suspense fallback={ <span>Loading Modal</span> }>
        <ModalLocation open={ open } setOpen={ setOpen } />
      </Suspense>
    </div>
  )
}

export default Locations
