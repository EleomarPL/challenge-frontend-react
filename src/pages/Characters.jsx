import { useEffect, useState, Suspense, lazy } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SkeletonLoadingTable from '../components/common/SkeletonLoadingTable'
import Pagination from '../components/views/Pagination'
import Searcher from '../components/views/Searcher'
import TablePaginate from '../components/views/TablePaginate'
import useGetCharacter from '../hooks/useGetCharacter'
import useControlRequest from '../hooks/useControlRequest'

import { resetState, selectCharacter } from '../features/charactersSlice'
import { columnsCharacters } from '../const/columnsTableCharacter'

const ModalCharacter = lazy(() => import('../components/modals/ModalCharacter'))

const Characters = () => {
  const [searcher, setSearcher] = useState('')
  const [page, setPage] = useState(0)
  const [open, setOpen] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const characters = useSelector(state => state.characters.characters)
  const status = useSelector(state => state.characters.status)
  const totalItems = useSelector(state => state.characters.info?.count)

  const { searchCharactersByName } = useGetCharacter()
  const { willNewRequestCharacter } = useControlRequest()
  const dispatch = useDispatch()

  useEffect(() => {
    setPage(0)
    searchCharactersByName(searcher)
    dispatch(resetState())
  }, [searcher])

  const handleCaculculateRequest = (newPage, rpp) => {
    if (rpp) willNewRequestCharacter(newPage, rpp, searcher)
    else willNewRequestCharacter(newPage, rowsPerPage, searcher)
  }
  const handleSelectCharacter = (character) => {
    setOpen(true)
    dispatch(selectCharacter(character))
  }

  return (
    <div>
      <Searcher type="Character" setState={ setSearcher } />
      <TablePaginate columns={ columnsCharacters } rows={ characters }
        page={ page } rowsPerPage={ rowsPerPage }
        callback={ handleSelectCharacter }
      />
      { status === 'error' && <div>Error</div> }
      { status === 'loading' && <SkeletonLoadingTable /> }
      <Pagination page={ page } setPage={ setPage }
        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
        type="Character" totalItems={ totalItems || 0 }
        calculateFunction={ handleCaculculateRequest }
      />
      <Suspense fallback={ <span>Loading Modal</span> }>
        <ModalCharacter open={ open } setOpen={ setOpen } />
      </Suspense>
    </div>
  )
}

export default Characters
