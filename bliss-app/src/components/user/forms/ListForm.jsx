import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import BaseForm from '../../shared/Forms/BaseForm'
import Test from '../../shared/Modals/test'
import { addUserList, updateUserList } from '../../../store/userSlice'

const ListForm = ({list, buttonText, edit}) => {

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false)

  const [listName, setListName] = useState(list?.listName ?? "");
  const [listDescription, setListDescription] = useState(list?.listDescription ?? "");
  const [listTags, setListTags] = useState(list?.ThingsToDoListTags ?? []);
  const [errors, setErrors] = useState([])

    useEffect(() => {
      
    })

    const onClose= (e) => {
        e.preventDefault();
        setVisible(v => !v);
        setListName(list?.listName ?? "");
        setListDescription(list?.listDescription ?? "");
        setListTags(list?.ThingsToDoListTags ?? []);
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const myList = {
        id: list?.id,
        listName,
        listDescription,
      }
      if (edit) {
        dispatch(updateUserList(myList)).then(data => {
          setVisible(v => !v)
          setListName(data.payload.listName);
          setListDescription(data.payload.listDescription);
          setListTags(data.payload.ThingsToDoListTags);
        });
      } else {
        dispatch(addUserList(myList)).then(data => {
          setVisible(v => !v)
          setListName("");
          setListDescription("");
          setListTags([]);
        });
      }
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
          {listTags?.map((tag) => (
            <div key={`tag-${tag?.id}`}>
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
      title={edit ? "Edit":"Add"}
      // desc={"Edit the thing"}
      children={children}
      onCloseText={"Cancel"}
      onClose={onClose}
      onSumbitText={edit ? "Complete Edit" : "Add List"}
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

export default ListForm