import React, { PropTypes } from 'react'

const ItemForm = (props) => {
  const { fields: {name, value}, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...name} />
      <input type="text" {...value} />
      <input type="submit" value="Submit" />
    </form>
  )
}

ItemForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default ItemForm
