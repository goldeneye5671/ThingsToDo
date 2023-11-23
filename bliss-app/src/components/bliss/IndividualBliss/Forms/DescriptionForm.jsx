import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addDescriptionToBliss } from '../../../../store/blissSlice';
import { updateUserDescription } from '../../../../store/userSlice';

import Test from '../../../shared/Modals/test';
import BaseForm from '../../../shared/Forms/BaseForm';

const DescriptionForm = ({blissId, CustomDescription, buttonText, edit}) => {

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(CustomDescription?.id ?? "");
    const [thingToDoId, setThingToDoId] = useState(blissId ?? "");
    const [headline, setHeadline] = useState(CustomDescription?.headline ?? "");
    const [description, setDescription] = useState(CustomDescription?.description ?? "");

    useEffect(() => {
        setThingToDoId(blissId)
    }, [blissId])

    const onClose = (e) => {
        e.preventDefault();
        setVisible(v => !v);
        setHeadline(CustomDescription?.headline ?? "");
        setDescription(CustomDescription?.description ?? "");
        setThingToDoId(blissId ?? "");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const myCustomDescription = {
            id,
            thingToDoId,
            headline,
            description
        }
        if (edit) {
            dispatch(updateUserDescription(myCustomDescription)).then(() => {
                setVisible(v => !v);
                // setHeadline(CustomDescription?.headline ?? "");
                // setDescription(CustomDescription?.description ?? "");
                // setThingToDoId(blissId ?? ""); 
            });
        } else {
            dispatch(addDescriptionToBliss(myCustomDescription)).then(() => {
                setVisible(v => !v);
                setHeadline(CustomDescription?.headline ?? "");
                setDescription(CustomDescription?.description ?? "");
                setThingToDoId(blissId ?? ""); 
            })
        }
    }

  
    const children = (
        <>
        <div className='test-label-container'>
          <input className='test-input-styling' value={headline} onChange={e => setHeadline(e.target.value)} placeholder=' '/>
          <label className='test-label-styling'>Headline</label>
        </div>
        <div className='test-label-container'>
          <input className='test-input-styling' value={description} onChange={e => setDescription(e.target.value)} placeholder=" "/>
          <label className='test-label-styling'>Description</label>
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
    <button onClick={e => {e.preventDefault(); setVisible(v => !v)}}>{buttonText}</button>
   </>
  )
}

export default DescriptionForm
