import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardDetail = ({ row, list }) => {
  return (
    <Card sx={ { width: '100%' } }>
      <CardActionArea>
        { row?.image &&
          <CustomCardMedia
            component="img"
            image={ row.image }
            alt={ row.name }
          />
        }
        <CardContent>
          <Typography gutterBottom variant="h5"
            component="div"
          >
            { row.name }
          </Typography>
          <Grid item xs={ 12 }
            md={ 1 }
          >
            <List dense={ true }>
              { list &&
                list.map(item =>
                  <Item key={ item.property } { ...item } />
                )
              }
            </List>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
CardDetail.propTypes = {
  row: PropTypes.object.isRequired,
  list: PropTypes.array.isRequired
}

const Item = ({ property, value }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <DragHandleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={ property }
        secondary={ value }
      />
    </ListItem>
  )
}
Item.propTypes = {
  property: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

const CustomCardMedia = styled(CardMedia)`
  height: 300px !important;
  object-fit: cover !important; 
  border-radius: 5px !important;
`

export default CardDetail
