import React from 'react'
import Row from '../Row/Row'
import request from '../../../utils/request'


const RowList = () => {
  return (
    <div>
   
   <Row title="NETFLIX ORIGINALS"
   fetchUrl={request.fetchNetflixOriginals}/>
   isLargeRow={true}
    </div>
  )
}

export default RowList