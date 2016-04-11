import React, { PropTypes } from 'react'
import MyItem from './MyItem.jsx'

const ListMyItem = (props) => {
  console.log('list log', props);
  return (
    <div>
      <h3>List My Items</h3>
      <ul>
        {props.data.map((item) => (
           <li key={item.name}
               onClick={() => props.handleSelected(item.name)}>
             <MyItem {...item} />
           </li>
         ))}
      </ul>
    </div>
  )
}

ListMyItem.propTypes = {
  data: PropTypes.array.isRequired,
}

export default ListMyItem
