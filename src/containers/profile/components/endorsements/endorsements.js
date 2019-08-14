import React from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";

import "./endorsements.scss";

function Endorsements({ endorsements = [] }) {
  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">group</Icon>
        <h3>Endorsements</h3>
      </div>
      {endorsements.map((endorsement, index) => (
        <div
          className="profile-playerHeader-info-experience"
          key={`profileEndorsements${endorsement.endorser}-${index}`}
        >
          <h5>Endorsement</h5>
        </div>
      ))}
      {endorsements.length === 0 && (
        <div className="profile-playerHeader-info-experience">
          <h3 className="profile-container-card-body-text">
            No endorsements to show.
          </h3>
        </div>
      )}
    </div>
  );
}

function mapStateToProps({ profile: { endorsements } }) {
  return { endorsements };
}

export default connect(mapStateToProps)(Endorsements);
