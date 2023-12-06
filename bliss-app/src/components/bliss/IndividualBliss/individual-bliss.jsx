import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import {
//   cleanBliss,
//   fetchOneBliss,
//   selectBlissById,
// } from "../../../store/blissSlice";
import { useGetBlissQuery, useGetOneBlissQuery } from "../../../features/api/apiSlice";
import Business from "../../business/business-card";
import ExperienceCard from "../../experience/experience-card";
import CustomDescription from "../../custom-description/custom-description";
import Header from "../../shared/Section/headers/Header";
import DescriptionForm from "./Forms/DescriptionForm";
import ExperiencesForm from "./Forms/ExperienceForm";
import Loading from "../../shared/Status/Loading";

function IndividualBliss() {
  // const dispatch = useDispatch();
  const params = useParams();
  const {
    data: bliss,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetOneBlissQuery(parseInt(params.id));

  const [showDescriptions, setShowDescriptions] = useState(true);
  const [showExperiences, setShowExperiences] = useState(false);
  const [showBusinesses, setShowBusinesses] = useState(false);

  const onDescriptionsClick = (e) => {
    e.preventDefault();
    setShowDescriptions(true);
    setShowExperiences(false);
    setShowBusinesses(false);
  };

  const onExperienceClick = (e) => {
    e.preventDefault();
    setShowDescriptions(false);
    setShowExperiences(true);
    setShowBusinesses(false);
  };

  const onBusinessClick = (e) => {
    e.preventDefault();
    setShowDescriptions(false);
    setShowExperiences(false);
    setShowBusinesses(true);
  };

  // const bliss = useSelector((state) =>
  //   selectBlissById(state, parseInt(params.id))
  // );

  const title = <h1>{bliss?.thingName}</h1>;

  const description = (
    <p className="bliss-description">{bliss?.thingDescription}</p>
  );

  const actionButtons = (
    <div className="control-buttons">
      <button
        className={showExperiences ? "active-button": null}
        onClick={onExperienceClick}
      >
        Experiences
      </button>
      <button
        className={showDescriptions ? "active-button": null}
        onClick={onDescriptionsClick}
      >
        Descriptions
      </button>
      <button
        className={showBusinesses ? "active-button": null}
        onClick={onBusinessClick}
      >
        Businesses
      </button>
    </div>
  );

  // useEffect(() => {
  //   if (!bliss) {
  //     dispatch(fetchOneBliss(parseInt(params.id)));
  //   }
  //   () => {
  //     dispatch(cleanBliss());
  //   };
  // }, [dispatch]);

  let customDescriptionContent = bliss?.CustomDescriptions?.map((desc) => (
    <CustomDescription key={desc?.id} CustomDescription={desc} />
  ));

  let experiencesContent =  bliss?.Experiences?.map((exp) => (
    <ExperienceCard key={bliss?.id} experience={exp} />
  ));

  let businessesContent = isSuccess && bliss?.Businesses?.map((business) => (
    <Business key={business?.id} business={business} />
  ));

  return isSuccess ? (
    <div className="content">
      <Header
        title={title}
        description={description}
        actionButtons={actionButtons}
      />

      {showDescriptions && (
        <>
          <DescriptionForm 
            blissId={bliss?.id}
            buttonText={"Add Description"}
            edit={false}
          />
          <div className="main-card-container">
            {customDescriptionContent?.length ? (
              customDescriptionContent
            ) : (
              <h2>No Descriptions</h2>
            )}
          </div>
        </>
      )}
      {showExperiences && (
        <>
          <ExperiencesForm
            blissId={bliss?.id}
            buttonText={"Add Experience"}
            edit={false}
          />
          <div className="main-card-container">
            {experiencesContent?.length ? (
              experiencesContent
            ) : (
              <h2>No Experiences</h2>
            )}
          </div>
        </>
      )}
      {showBusinesses && (
        <div className="main-card-container">
          {businessesContent?.length ? (
            businessesContent
          ) : (
            <h2>No Businesses</h2>
          )}
        </div>
      )}
    </div>
  ) : (<Loading />);
}

export default IndividualBliss;
