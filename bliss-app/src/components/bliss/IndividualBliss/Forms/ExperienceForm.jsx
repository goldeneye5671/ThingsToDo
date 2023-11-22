import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addExperienceInBliss } from '../../../../store/blissSlice';

import Test from '../../../shared/Modals/test';
import BaseForm from '../../../shared/Forms/BaseForm';

const ExperiencesForm = ({blissId, CustomExperience, buttonText, edit}) => {

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

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
            thingToDoId,
            title,
            description
        }
        if (edit) {
            // dispatch(updateDescriptionInBliss(myCustomExperience))
            console.log("Update action fired...or not. need it here")
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
          <label>title</label>
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder='title'/>
          <br></br>
          <label>Description</label>
          <input value={description} onChange={e => setDescription(e.target.value)} placeholder="description"/>
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
