import styled from 'styled-components'
import Typography from '@mui/material/Typography'

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Page Not Found
      </Typography>
      <Typography variant="h5" component="h2"
        style={ { marginTop: '1rem' } }
      >
        { "We can't seem to find the page you're looking for " }
      </Typography>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-content: center;
  margin-top: 2rem;
  text-align: center;
`

export default NotFound
