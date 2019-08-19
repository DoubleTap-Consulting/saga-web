import React, { useState } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { updateProfileData, updateProfile } from "actions/profile";

import "./summary.scss";

function Summary({ summary = "", isOwnProfile, dispatch, userId }) {
  const [editingSummary, setEditingSummary] = useState(false);

  const submitSummary = () => {
    setEditingSummary(false);
    dispatch(updateProfile(userId, { summary }));
  };

  const editSummary = () => {
    setEditingSummary(true);
  };

  const handleChange = event => {
    let tempSummary = summary.slice();
    tempSummary = event.target.value;
    dispatch(updateProfileData({ summary: tempSummary }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">class</Icon>
        <h3>Summary</h3>
        {isOwnProfile && (
          <button
            className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingSummary &&
              "profile-playerHeader-info-button-save"}`}
            onClick={editingSummary ? submitSummary : editSummary}
          >
            {editingSummary ? "Save" : "Edit"}
          </button>
        )}
      </div>
      <div className="profile-container-card-body">
        {editingSummary ? (
          <span>
            <textarea
              name="summary"
              value={summary}
              onChange={handleChange}
              placeholder="Summary"
              className="brand-text-area-dark"
              rows="5"
              maxLength="255"
            />
            <p
              className={`profile-container-card-body-lengthAlert ${
                summary.length > 240 ? "warning" : ""
              }`}
            >
              {summary.length} / 255
            </p>
          </span>
        ) : (
          <h3 className="profile-container-card-body-text profile-container-card-body-summary">
            {summary}
          </h3>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({
  profile: {
    data: { summary, id }
  }
}) {
  return { summary, userId: id };
}

export default connect(mapStateToProps)(Summary);
