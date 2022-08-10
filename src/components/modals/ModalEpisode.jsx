import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import CardDetail from '@/components/cards/CardDetail'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ModalEpisode = ({ open, setOpen }) => {
  const episode = useSelector(state => state.episodes.episode)

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
        <DialogTitle id="scroll-dialog-title">Episode</DialogTitle>
        <DialogContent dividers={ true }>
          <CardDetail row={ episode || {} }
            list={
              [
                { property: 'Episode', value: episode?.episode },
                { property: 'Air Date', value: episode?.air_date }
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
ModalEpisode.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default ModalEpisode
