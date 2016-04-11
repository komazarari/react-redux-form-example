import React, { PropTypes } from 'react'

const SelectedDisplay = (props) => {
  const item = props.data.find((i) => i.isSelected);

  return (
    <div>
      <h3>Selected Item (click an item)</h3>
      <i>{item ? item.name : 'not selected'}</i>
    </div>
  )
}

SelectedDisplay.propTypes = {
  data: PropTypes.array.isRequired
}

export default SelectedDisplay
