import React, { useEffect, useState } from 'react'
import BaseForm from '../../shared/Forms/BaseForm'
import Test from '../../shared/Modals/test'

const ListEditForm = ({list, buttonText}) => {

  const [visible, setVisible] = useState(false)

  const [listName, setListName] = useState(list?.listName ?? "");
  const [listDescription, setListDescription] = useState(list?.listDescription ?? "");
  const [listTags, setListTags] = useState(list?.ThingsToDoListTags ?? []);
  const [errors, setErrors] = useState([])

    const onClose= (e) => {
        e.preventDefault();
        setVisible(v => !v);
    }

    const onSubmit = (e) => {
      e.preventDefault();

    }

    const handleRemove = (name) => {
      const updatedList = listTags.filter(tag => {
        return tag?.name !== name
      });
      setListTags(updatedList);
      console.log(updatedList)
    }

    const children = (
      <>
        <label>List Title</label>
        <input value={listName} onChange={e => setListName(e.target.value)} placeholder='title'/>
        <br></br>
        <label>List Description</label>
        <input value={listDescription} onChange={e => setListDescription(e.target.value)} placeholder="description"/>
        <br></br>
        <div>
          <label>Tags</label>
          <button>+</button>
          {listTags?.map((tag, i) => (
            <div>
              <p>{tag?.name}</p>
              <button onClick={e => {
                e.preventDefault()
                handleRemove(tag?.name)
              }}>Delete tag</button>
            </div>
          ))}
        </div>
      </>
    )

  const editForm = (
    <BaseForm 
      title={"Edit"}
      desc={"Edit the thing"}
      children={children}
      onCloseText={"Cancel"}
      onClose={onClose}
      onSumbitText={"Complete Edit"}
      onSubmit={onSubmit}
    />
  )

  return (
    <>
     {visible && <Test children={editForm} onClose={onClose} closeContent={"Cancel"}/>}
     <button onClick={e => {e.preventDefault; setVisible(v => !v)}}>{buttonText}</button>
    </>
  )
}

export default ListEditForm