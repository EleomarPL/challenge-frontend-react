import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import CardDetail from '@/components/cards/CardDetail'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ModalCharacter = ({ open, setOpen }) => {
  const character = useSelector(state => state.characters.character)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={ open }
        onClose={ handleClose }
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Character</DialogTitle>
        <DialogContent dividers={ true }>
          <CardDetail row={ character }
            list={
              [
                { property: 'Status', value: character.status },
                { property: 'Specie', value: character.species },
                { property: 'Gender', value: character.gender },
                { property: 'Origin', value: character.origin.name },
                { property: 'Location', value: character.location.name }
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
ModalCharacter.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default ModalCharacter
