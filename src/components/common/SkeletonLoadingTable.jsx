import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

import PropTypes from 'prop-types'

const SkeletonLoadingTable = () => {
  return (
    <Stack spacing={ 1 } style={ { marginTop: '1rem' } }>
      <TypeSkeleton variant='rounded' />
      <TypeSkeleton variant='rounded' />
      <TypeSkeleton variant='rounded' />
      <TypeSkeleton variant='rounded' />
      <TypeSkeleton variant='rounded' />
    </Stack>
  )
}

const TypeSkeleton = ({ variant = 'rounded' }) => {
  return <Skeleton variant={ variant }
    height={ 40 }
  />
}
TypeSkeleton.propTypes = {
  variant: PropTypes.string
}

export default SkeletonLoadingTable
