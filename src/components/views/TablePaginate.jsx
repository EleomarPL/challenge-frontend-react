import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'

import PropTypes from 'prop-types'

const TablePaginate = ({ columns, rows, page, rowsPerPage, callback }) => {
  const handleOpenModal = (row) => callback(row)

  return (
    <Paper sx={ { width: '100%', overflow: 'hidden' } }>
      <TableContainer sx={ { maxHeight: 440 } }>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              { columns &&
                columns.map((column) => (
                  <TableCell
                    key={ column.id }
                    align={ column.align }
                    style={ { minWidth: column.minWidth, fontWeight: 'bold' } }
                  >
                    { column.label }
                  </TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            { rows &&
              rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => ((
                  <TableRow hover role="checkbox"
                  tabIndex={ -1 } key={ row.id }
                >
                    { columns &&
                    columns.map((column) => {
                      const value = row[column.id]
                      if (value) {
                        return (
                          <TableCell key={ column.id } align={ column.align }
                            style={ { minWidth: column.minWidth } }
                          >
                            { value }
                          </TableCell>
                        )
                      } else return null
                    })
                  }
                    <TableCell align="center"
                    style={ { minWidth: 40 } }
                  >
                      <Button variant="contained" color="primary"
                      onClick={ () => handleOpenModal(row) }
                    >
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                )))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}

TablePaginate.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  rows: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  callback: PropTypes.func
}

export default TablePaginate
