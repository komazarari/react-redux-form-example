import React, { PropTypes } from 'react'

const MyItem = (props) => {
  return (
    <div>Item name: {props.name}</div>
  )
}

MyItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default MyItem
