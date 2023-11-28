import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import BaseForm from '../../shared/Forms/BaseForm'
import Test from '../../shared/Modals/test'
import { addTagToUserList, addUserList, removeTagFromUserList, updateUserList } from '../../../store/userSlice'
import axiosInstance from '../../../utils/axiosInstance'
import SearchBox from './SearchBox'

const ListForm = ({list, buttonText, edit}) => {

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false)
  const [listName, setListName] = useState(list?.listName ?? "");
  const [listDescription, setListDescription] = useState(list?.listDescription ?? "");
  const [listTags, setListTags] = useState(list?.ThingsToDoListTags ?? []);
  const [listTagsRemove, setListTagsRemove] = useState([])
  const [errors, setErrors] = useState([])

    const onClose= (e) => {
        e.preventDefault();
        setVisible(v => !v);
        setListName(list?.listName ?? "");
        setListDescription(list?.listDescription ?? "");
        setListTags(list?.ThingsToDoListTags ?? []);
        setListTagsRemove([])
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const myList = {
        id: list?.id,
        listName,
        listDescription,
      }
      if (edit) {
        if (listTagsRemove) {
          //dispatch the items that need to be removed
        }
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

    const handleAdd = async (t) => {
      const res = await dispatch(addTagToUserList({
        listId: list?.id,
        id: t?.id
      }))
      setListTags(tags => [...res.payload.ThingsToDoListTags]);
    }

    const handleRemove = async (t) => {
      // Dispatch some action here that handles the removal of the tag
      await dispatch(removeTagFromUserList({
        listId: list?.id,
        id: t?.id
      }))
      // need to send the list id along with the tag id
      const updatedList = listTags.filter(tag => {
        return tag?.id !== t?.id
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
          <div className={"test-label-container"}>
          </div>
          <div className='list-tags-container'>
            <SearchBox url={"/api/thingtodolisttag"} handleSelect={handleAdd}/>
            <div className="list-tags">
              {listTags?.map((tag) => (
                <div className='list-tag-container' key={`tag-${tag?.id}`}>
                  <p className='list-tag-name'>{tag?.name}</p>
                  <button className='list-tag-remove-button' onClick={e => {e.preventDefault();handleRemove(tag);}}>x</button>
                </div>
              ))}
            </div>
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
  // return null
}

export default ListForm