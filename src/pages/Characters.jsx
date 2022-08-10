import { useState } from 'react'

import Pagination from '../components/views/Pagination'
import Searcher from '../components/views/Searcher'
import TablePaginate from '../components/views/TablePaginate'

import { columnsCharacters } from '../const/columnsTableCharacter'

const Characters = () => {
  const [searcher, setSearcher] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [totalItems, setTotalItems] = useState(0)

  return (
    <div>
      <Searcher type="Character" setState={ setSearcher } />
      <TablePaginate columns={ columnsCharacters } rows={ [] } />
      <Pagination page={ page } setPage={ setPage }
        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
        type="Character" totalItems={ totalItems }
      />
    </div>
  )
}

export default Characters
