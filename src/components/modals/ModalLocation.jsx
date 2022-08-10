import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import CardDetail from '../cards/CardDetail'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ModalLocation = ({ open, setOpen }) => {
  const location = useSelector(state => state.locations.location)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={ open }
        onClose={ handleClose }
        scroll="paper"
        fullWidth={ true }
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Location</DialogTitle>
        <DialogContent dividers={ true }>
          <CardDetail row={ location || {} }
            list={
              [
                { property: 'Type', value: location?.type },
                { property: 'Dimension', value: location?.dimension }
              ]
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={ handleClose }>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
ModalLocation.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default ModalLocation
