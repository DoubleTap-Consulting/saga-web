import React, { useState } from "react";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { updateProfileData, updateProfile } from "actions/profile";

import "./peripherals.scss";

function Peripherals({ peripherals = [], isOwnProfile, dispatch, userId }) {
  const [editingPeripherals, setEditingPeripherals] = useState(false);

  const submitPeripherals = () => {
    setEditingPeripherals(false);
    dispatch(updateProfile(userId, { peripherals }));
  };

  const editPeripherals = event => {
    setEditingPeripherals(true);
  };

  const handleChange = event => {
    let tempPeripherals = peripherals.slice();
    tempPeripherals[event.target.id].name = event.target.value;
    dispatch(updateProfileData({ peripherals: tempPeripherals }));
  };

  return (
    <div className="profile-container-card brand-background-dark">
      <div className="profile-container-card-header">
        <Icon className="profile-container-card-header-icon">computer</Icon>
        <h3>Peripherals</h3>
        {isOwnProfile && (
          <button
            className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${editingPeripherals &&
              "profile-playerHeader-info-button-save"}`}
            onClick={editingPeripherals ? submitPeripherals : editPeripherals}
          >
            {editingPeripherals ? "Save" : "Edit"}
          </button>
        )}
      </div>
      {editingPeripherals ? (
        <div className="profile-container-card-body">
          {peripherals.map((peripheral, index) => (
            <div className="peripherals">
              <h5 className="peripherals-title">{peripheral.type}</h5>
              <input
                name="peripheral"
                value={peripheral.name}
                id={index}
                onChange={handleChange}
                placeholder="Peripheral"
                className="brand-input-dark"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="profile-container-card-body">
          {peripherals
            .filter(peripheral => peripheral.name)
            .map(peripheral => (
              <h3 className="profile-container-card-body-text">
                {`${peripheral.type}: ${peripheral.name}`}
              </h3>
            ))}
        </div>
      )}
    </div>
  );
}

function mapStateToProps({
  profile: {
    data: { peripherals, id }
  }
}) {
  return { peripherals, userId: id };
}

export default connect(mapStateToProps)(Peripherals);
