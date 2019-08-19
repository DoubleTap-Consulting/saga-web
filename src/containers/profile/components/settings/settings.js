import React from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { deleteAccount } from "utils/profile";

import { updateProfileData, updateProfile } from "actions/profile";

import "./settings.scss";

function Settings({
  game,
  gaming_level,
  perspective_preference,
  dispatch,
  userId
}) {
  const handleChange = event => {
    let tempSetting = [event.target.name].slice();
    tempSetting = event.target.value;
    dispatch(updateProfileData({ [event.target.name]: tempSetting }));
    dispatch(updateProfile(userId, { [event.target.name]: tempSetting }));
  };

  const deleteMyAccount = () => {
    this.props.dispatch(deleteAccount());
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">settings</Icon>
        <h3>Settings</h3>
      </div>
      <div className="profile-container-card-body">
        <h3 className="profile-container-card-body-text">
          Selected Game:
          <select
            className="brand-select"
            value={game}
            name="game"
            style={{ marginLeft: "5px" }}
            onChange={handleChange}
          >
            <option value={"PUBG"}>PUBG</option>
            <option value={"FORTNITE"}>Fortnite</option>
            <option value={"BLACKOUT"}>Blackout</option>
          </select>
        </h3>
        <h3 className="profile-container-card-body-text">
          Gaming Level:
          <select
            className="brand-select"
            value={gaming_level}
            name="gaming_level"
            style={{ marginLeft: "5px" }}
            onChange={handleChange}
          >
            <option value={"CASUAL"}>Casual</option>
            <option value={"STREAMER"}>Streamer</option>
            <option value={"ASPIRING_PRO"}>Aspiring Pro</option>
            <option value={"PRO_TIER_3"}>Pro - Tier 3</option>
            <option value={"PRO_TIER_2"}>Pro - Tier 2</option>
            <option value={"PRO_TIER_1"}>Pro - Tier 1</option>
          </select>
        </h3>
        <h3 className="profile-container-card-body-text">
          Game Perspective Preference:
          <select
            className="brand-select"
            value={perspective_preference}
            name="perspective_preference"
            style={{ marginLeft: "5px" }}
            onChange={handleChange}
          >
            <option value={"FPP"}>FPP</option>
            <option value={"TPP"}>TPP</option>
            <option value={"BOTH"}>Both</option>
          </select>
        </h3>
        <div className="divider" />
        <button
          className="brand-button-failure-dark right"
          onClick={deleteMyAccount}
        >
          Delete my Account
        </button>
      </div>
    </div>
  );
}

function mapStateToProps({
  profile: {
    data: { game, gaming_level, perspective_preference, id }
  }
}) {
  return { game, gaming_level, perspective_preference, userId: id };
}

export default connect(mapStateToProps)(Settings);
