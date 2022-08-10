import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const SpinnerLoadingPage = () => {
  return (
    <Box sx={ { display: 'flex', justifyContent: 'center' } }>
      <CircularProgress size={ 50 } />
    </Box>
  )
}

export default SpinnerLoadingPage
