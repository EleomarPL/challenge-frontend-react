import PropTypes from 'prop-types'
import TablePagination from '@mui/material/TablePagination'

const Pagination = ({ page, setPage, rowsPerPage, setRowsPerPage, type, totalItems = 0 }) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TablePagination
      component="div"
      labelRowsPerPage={ `${type} per page:` }
      rowsPerPageOptions={ [5, 10, 25] }
      count={ totalItems }
      page={ page }
      onPageChange={ handleChangePage }
      rowsPerPage={ rowsPerPage }
      onRowsPerPageChange={ handleChangeRowsPerPage }
    />
  )
}

Pagination.propTypes = {
  type: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired
}

export default Pagination
