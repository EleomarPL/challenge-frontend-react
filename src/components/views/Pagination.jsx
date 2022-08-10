import PropTypes from 'prop-types'
import TablePagination from '@mui/material/TablePagination'

const Pagination = ({
  page, setPage, rowsPerPage, setRowsPerPage, type, totalItems = 0,
  calculateFunction
}) => {
  const handleChangePage = (event, newPage) => {
    setPage(newPage)
    calculateFunction(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10)
    setRowsPerPage(newRowsPerPage)
    setPage(0)
    calculateFunction(0, newRowsPerPage)
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
  setRowsPerPage: PropTypes.func.isRequired,
  calculateFunction: PropTypes.func.isRequired
}

export default Pagination
