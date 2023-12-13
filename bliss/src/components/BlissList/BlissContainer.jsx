import React from 'react'
import { useSelector } from 'react-redux'
import { selectBlissById } from '../../features/bliss/bliss'

const BlissContainer = ({id}) => {
  const bliss = useSelector(state => selectBlissById(state, id))
  
    return (
    <div>
      {bliss?.thingName}
    </div>
  )
}

export default BlissContainer
