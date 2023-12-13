import React, { useState } from 'react'
import { useGetBlissQuery } from '../../features/bliss/bliss'

const BlissList = () => {
    const dispatch = useDispatch()
  const [page, setPage] = useState(0)
  const {
    data: bliss,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBlissQuery(page);
//   const bliss = useSelector(selectAllBliss);
  let content;

  const handleAdd = (e) => {
    e.preventDefault();
    setPage(p => p + 1)
    dispatch(useGetBlissQuery(page))
  }

  if (isLoading) {
    content = <h1>Loading</h1>
  } else if (isError) {
    content = <div><h1>error</h1><p>{error}</p></div>
  } else if (isSuccess) {

    content = bliss.ids.map(blissId => <h1>{bliss.entities[blissId]?.thingName}</h1>)
  }

    return (
    <div>
        {content}
    </div>
  )
}

export default BlissList
