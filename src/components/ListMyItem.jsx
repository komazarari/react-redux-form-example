import React, { PropTypes } from 'react'
import MyItem from './MyItem.jsx'

const ListMyItem = (props) => {
  return (
    <div>
      <h3>List My Items</h3>
      {props.data.map((item) => (
         <MyItem
             key={item.name}
             {...item}
         />
       ))}
    </div>
  )
}

ListMyItem.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ListMyItem
