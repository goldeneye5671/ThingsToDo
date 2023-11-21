import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../shared/Section/headers/Header';
import { getCurrentUser } from '../../store/userSlice';
import { refreshUser } from '../../store/sessionSlice';
import Card from '../shared/Section/listContainer/card/card';
import ListContainer from '../shared/Section/listContainer/ListContainer';
import ListEditForm from './forms/ListEditForm';

function UserPage() {
  const params = useParams(); 
  const sessionState = useSelector(state => state?.session?.user)
  const userState = useSelector(state => state?.user)
  const dispatch = useDispatch();
  const [isSession, setIsSession] = useState(false);
  
  const [showDescription, setShowDescription] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showLists, setShowLists] = useState(false);


  const onShowDescriptionClick = (e) => {
    e.preventDefault();
    setShowDescription(true)
    setShowExperience(false)
    setShowLists(false)
  }

  const onShowExperienceClick = (e) => {
    e.preventDefault();
    setShowDescription(false)
    setShowExperience(true)
    setShowLists(false)
  }
  const onShowListClick = (e) => {
    e.preventDefault();
    setShowDescription(false)
    setShowExperience(false)
    setShowLists(true)
  }



  useEffect(() => {
    //get the user
    dispatch(getCurrentUser(parseInt(params?.id)))
    //get updated session
    dispatch(refreshUser())
    //set a var based on if the user being viewed is the session user, so I can display certain things
    const value = parseInt(sessionState?.user?.id) === parseInt(userState?.user?.id)
    setIsSession(value);
  }, [params])

  const title = (
    <>
      <h1>{`${userState?.user?.username}`}</h1>
    </>
  )




  const description = (
    <>
      <p>{userState?.user?.firstName} {userState?.user?.lastName}</p>
    </>
  )

  const descriptions = userState?.user?.CustomDescriptions?.map(desc => (
    <Card 
      key={`desc-${desc?.id}`}
      title={desc?.headline}
      content={desc?.description}
    />
  ))

  const experiences = userState?.user?.Experiences?.map(exp => (
    <Card
      key={`desc-${exp?.id}`}
      title={exp?.title}
      content={exp?.description}
      // model={<ListEditForm />}
    />
  ))

  const lists = userState?.user?.ThingsToDoLists?.map(list => (
    <>
      <Card
        key={`desc-${list?.id}`}
        title={list?.listName}
        content={
          (
            <>
              <p>{list?.listDescription}</p>
              <ListEditForm list={list} buttonText={"edit"}/>
            </>
          )
        }
        to={`/lists/${list?.id}`}
      />
    </>  
  ))
  



  const actionButtons = (
    <>
      {isSession && <button>Sign Out</button>}
      <button className={showExperience ? "active-button": null} onClick={onShowExperienceClick}>experiences</button>
      <button className={showDescription ? "active-button": null} onClick={onShowDescriptionClick}>descriptions</button>
      <button className={showLists ? "active-button": null} onClick={onShowListClick}>lists</button>
    </>
  )

  return (
    <div className="content">
      <Header 
        title={title}
        description={description}
        actionButtons={actionButtons}
      />
      {showDescription && <ListContainer content={descriptions}/>}
      {showExperience && <ListContainer content={experiences}/>}
      {showLists && <ListContainer content={lists}/>}
    </div>
  )
}

export default UserPage
