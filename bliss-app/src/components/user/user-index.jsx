import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../shared/Section/headers/Header";
import { deleteUserList, deleteUserExperience, deleteUserDescription, getCurrentUser } from "../../store/userSlice";
import { cleanSession, refreshUser, signOutUser } from "../../store/sessionSlice";
import Card from "../shared/Section/listContainer/card/card";
import ListContainer from "../shared/Section/listContainer/ListContainer";
import ListForm from "./forms/ListForm";
import DescriptionForm from "../bliss/IndividualBliss/Forms/DescriptionForm"
import ExperienceForm from "../bliss/IndividualBliss/Forms/ExperienceForm"

function UserPage() {
  const navigate = useNavigate();
  const params = useParams();
  const sessionState = useSelector((state) => state?.session?.user);
  const userState = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const [isSession, setIsSession] = useState(false);

  const [showDescription, setShowDescription] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showLists, setShowLists] = useState(false);

  const [showListAddForm, setShowListAddForm] = useState(false);

  const onSignOutClick = async () => {
    // e.preventDefault();

    //dispatch logOutUser to take rft out of cookies and set login to
    //false on backend
    await dispatch(signOutUser());
    //dispatch cleanSession to remove all data from the session state
    await dispatch(cleanSession());
    //redirect the user to home
    navigate("/")
  }

  const onShowDescriptionClick = (e) => {
    e.preventDefault();
    setShowDescription(true);
    setShowExperience(false);
    setShowLists(false);
  };

  const onShowExperienceClick = (e) => {
    e.preventDefault();
    setShowDescription(false);
    setShowExperience(true);
    setShowLists(false);
  };
  const onShowListClick = (e) => {
    e.preventDefault();
    setShowDescription(false);
    setShowExperience(false);
    setShowLists(true);
  };

  useEffect(() => {
    //get the user
    dispatch(getCurrentUser(parseInt(params?.id)));
    //set a var based on if the user being viewed is the session user, so I can display certain things
    const value =
      parseInt(sessionState?.user?.id) === parseInt(userState?.user?.id);
    setIsSession(value);
  }, [params, isSession, dispatch, sessionState?.user?.id, userState?.user?.id]);

  const title = (
    <>
      <h1>{`${userState?.user?.username}`}</h1>
    </>
  );

  const description = (
    <>
      <p>
        {userState?.user?.firstName} {userState?.user?.lastName}
      </p>
    </>
  );

  const descriptions = userState?.user?.CustomDescriptions?.map((desc) => (
    <Card
      key={`desc-${desc?.id}`}
      title={desc?.headline}
      content={
      <>
        <p>{desc?.description}</p>
        {parseInt(sessionState?.user?.id) ===
              parseInt(userState?.user?.id) && (
              <>
                <DescriptionForm buttonText={"Edit"} CustomDescription={desc} edit={true}/>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteUserDescription(desc));
                  }}
                >
                  Delete
                </button>
              </>
            )}
      </>
      }
    />
  ));

  const experiences = userState?.user?.Experiences?.map((exp) => (
    <Card
      key={`desc-${exp?.id}`}
      title={exp?.title}
      content={<>
        <p>{exp?.description}</p>
        {parseInt(sessionState?.user?.id) ===
              parseInt(userState?.user?.id) && (
              <>
                <ExperienceForm buttonText={"Edit"} CustomExperience={exp} edit={true}/>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteUserExperience(exp));
                  }}
                >
                  Delete
                </button>
              </>
            )}
        
      </>}
      // model={<ListEditForm />}
    />
  ));

  const lists = userState?.user?.ThingsToDoLists?.map((list) => (
    <>
      <Card
        key={`desc-${list?.id}`}
        title={list?.listName}
        content={
          <>
            <p>{list?.listDescription}</p>
            {parseInt(sessionState?.user?.id) ===
              parseInt(userState?.user?.id) && (
              <>
                <ListForm list={list} buttonText={"edit"} edit={true} />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(deleteUserList(list));
                  }}
                >
                  Delete
                </button>
              </>
            )}
          </>
        }
        to={`/lists/${list?.id}`}
        showLink={true}
      />
    </>
  ));

  const actionButtons = (
    <>
      {isSession && <button onClick={onSignOutClick}>Sign Out</button>}
      <button
        className={showExperience ? "active-button" : null}
        onClick={onShowExperienceClick}
      >
        experiences
      </button>
      <button
        className={showDescription ? "active-button" : null}
        onClick={onShowDescriptionClick}
      >
        descriptions
      </button>
      <button
        className={showLists ? "active-button" : null}
        onClick={onShowListClick}
      >
        lists
      </button>
    </>
  );

  return (
    <div className="content">
      <Header
        title={title}
        description={description}
        actionButtons={actionButtons}
      />
      {showDescription && (
        <>
          {/* <ListForm buttonText={"Create List"} edit={false}/> */}
          <ListContainer content={descriptions} />
        </>
      )}
      {showExperience && (
        <>
          {/* <ListForm buttonText={"Create List"} edit={false}/> */}
          <ListContainer content={experiences} />
        </>
      )}
      {showLists && (
        <>
          <ListForm buttonText={"Create List"} edit={false} />
          <ListContainer content={lists} />
        </>
      )}
    </div>
  );
}

export default UserPage;
