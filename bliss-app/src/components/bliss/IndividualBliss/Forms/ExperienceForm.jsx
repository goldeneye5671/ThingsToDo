import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExperienceInBliss } from '../../../../store/blissSlice';
import { updateUserExperience } from "../../../../store/userSlice";

import Test from '../../../shared/Modals/test';
import BaseForm from '../../../shared/Forms/BaseForm';

const ExperiencesForm = ({blissId, CustomExperience, buttonText, edit}) => {

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(CustomExperience?.id ?? "");
    const [thingToDoId, setThingToDoId] = useState(blissId ?? "");
    const [title, setTitle] = useState(CustomExperience?.title ?? "");
    const [description, setDescription] = useState(CustomExperience?.description ?? "");

    useEffect(() => {
        setThingToDoId(blissId)
    }, [blissId])

    const onClose = (e) => {
        e.preventDefault();
        setVisible(v => !v);
        setTitle(CustomExperience?.title ?? "");
        setDescription(CustomExperience?.description ?? "");
        setThingToDoId(blissId ?? "");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const myCustomExperience = {
            id,
            thingToDoId,
            title,
            description
        }
        if (edit) {
            dispatch(updateUserExperience(myCustomExperience)).then(() => {
                setVisible(v => !v);
                setTitle(CustomExperience?.title ?? "");
                setDescription(CustomExperience?.description ?? "");
                setThingToDoId(blissId ?? ""); 
            });
        } else {
            dispatch(addExperienceInBliss(myCustomExperience)).then(() => {
                setVisible(v => !v);
                setTitle(CustomExperience?.title ?? "");
                setDescription(CustomExperience?.description ?? "");
                setThingToDoId(blissId ?? ""); 
            })
        }
    }

  
    const children = (
        <>
            <div className='test-label-container'>
                <input className='test-input-styling' value={title} onChange={e => setTitle(e.target.value)} placeholder=' '/>
                <label className='test-label-styling'>title</label>
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
    <button onClick={e => {e.preventDefault; setVisible(v => !v)}}>{buttonText}</button>
   </>
  )
}

export default ExperiencesForm
