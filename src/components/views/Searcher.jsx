import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

import PropTypes from 'prop-types'
import { debounce } from 'lodash'
import { useEffect, useMemo } from 'react'
import { TIME_DEBOUNCER } from '../../config/TIME_DEBOUNCER'

const Searcher = ({ type = 'Character', setState = () => {} }) => {
  const handleChange = (event) => {
    setState(event.target.value)
  }
  const debounceHandleChange = useMemo(
    () => debounce(handleChange, TIME_DEBOUNCER)
    , []
  )
  useEffect(() => {
    return () => {
      debounceHandleChange.cancel()
    }
  }, [])

  return (
    <Box sx={ { display: 'flex', alignItems: 'flex-end', justifyContent: 'center' } }>
      <SearchIcon sx={ { color: 'action.active', mr: 1, my: 0.5 } } />
      <TextField id="input-with" label={ `Search ${type}` }
        sx={ { width: '80%' } }
        variant="standard"
        onChange={ debounceHandleChange } autoFocus
      />
    </Box>
  )
}
Searcher.propTypes = {
  type: PropTypes.string,
  setState: PropTypes.func
}

export default Searcher
