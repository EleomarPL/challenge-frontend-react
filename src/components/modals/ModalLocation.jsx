import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import CardDetail from '@/components/cards/CardDetail'
import PropTypes from 'prop-types'

const ModalLocation = ({ open, setOpen, row }) => {
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
          <CardDetail row={ row }
            list={
              [
                { property: 'Status', value: row.status },
                { property: 'Specie', value: row.species }
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
  setOpen: PropTypes.func.isRequired,
  row: PropTypes.object.isRequired
}

export default ModalLocation
