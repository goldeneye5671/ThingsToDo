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
    }

    const children = (
      <>
        <div className={"test-label-container"}>
          <input value={listName} onChange={e => setListName(e.target.value)} className={"test-input-styling"} placeholder=' '/>
          <label className={"test-label-styling"}>List Title</label>  
        </div>
        <div className={"test-label-container"}>
          <input className={"test-input-styling"} placeholder=' ' value={listDescription} onChange={e => setListDescription(e.target.value)}/>
          <label className={"test-label-styling"}>List Description</label>
        </div>
        <div>
          <div>
            <label>Tags</label>
            <button>+</button>
          </div>
          <div className='list-tags-container'>
            {listTags?.map((tag) => (
              <div className='list-tag-container' key={`tag-${tag?.id}`}>
                <p className='list-tag-name'>{tag?.name}</p>
                <button className='list-tag-remove-button' onClick={e => {e.preventDefault();handleRemove(tag?.name);}}>x</button>
              </div>
            ))}
          </div>
        </div>
      </>
    )

  const form = (
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
    {visible && <Test children={form} onClose={onClose} closeContent={"Cancel"}/>}
     <button onClick={e => {e.preventDefault; setVisible(v => !v)}}>{buttonText}</button>
    </>
  )
}

export default ListForm