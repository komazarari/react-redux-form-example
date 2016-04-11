import React, { PropTypes } from 'react'

const MyItem = (props) => {
  return (
    <span>{props.name} : {props.value}</span>
  )
}

MyItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default MyItem
