import { useState } from 'react'

import Searcher from '../components/views/Searcher'
import Pagination from '../components/views/Pagination'
import TablePaginate from '../components/views/TablePaginate'

import { columnsEpisodes } from '../const/columnsTableEpisodes'

const Episodes = () => {
  const [searcher, setSearcher] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [totalItems, setTotalItems] = useState(0)

  return (
    <div>
      <Searcher type="Episode" setState={ setSearcher } />
      <TablePaginate columns={ columnsEpisodes } rows={ [] } />
      <Pagination page={ page } setPage={ setPage }
        rowsPerPage={ rowsPerPage } setRowsPerPage={ setRowsPerPage }
        type="Character" totalItems={ totalItems }
      />
    </div>
  )
}

export default Episodes
