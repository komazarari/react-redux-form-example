import React, { PropTypes } from 'react'
import ListMyItem from './ListMyItem.jsx'
import AddItemForm from '../containers/AddItemForm.jsx'
import SelectedDisplay from './SelectedDisplay.jsx'

const ContentRoot = (props) => {
  let list = '';
  if (props.app.myItems.isFetching) {
    list = 'loading...';
  } else {
    list = <ListMyItem handleSelected={props.selectMyItem} {...props.app.myItems}/>;
  }
  const form = props.form.addItem;
  
  return (
    <div>
      <h2>Content Root</h2>
      <AddItemForm
          onSubmit={() =>
            props.addMyItem(form.name.value, form.value.value)}
      />
      <SelectedDisplay {...props.app.myItems}/>
      {list}
    </div>
  )
}

ListMyItem.propTypes = {
  app: PropTypes.object
}

export default ContentRoot
