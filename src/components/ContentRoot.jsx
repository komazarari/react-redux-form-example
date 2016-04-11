import React, { PropTypes } from 'react'
import ListMyItem from './ListMyItem.jsx'

const ContentRoot = (props) => {
  let list = '';
  if (props.app.myItems.isFetching) {
    list = 'loading...';
  } else {
    list = <ListMyItem {...props.app.myItems} />;
  }
  
  return (
    <div>
      <h2>Content Root</h2>
      {list}
    </div>
  )
}

ListMyItem.propTypes = {
  app: PropTypes.object
}

export default ContentRoot
