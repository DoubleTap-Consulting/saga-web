import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Icon from "@material-ui/core/Icon";

import "./peripherals.css";

class Peripherals extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      peripherals: []
    };
  }

  render() {
    return (
      <div className="profile-container-card brand-background-dark">
        <div className="profile-container-card-header">
          <Icon className="profile-container-card-header-icon">computer</Icon>
          <h3>Peripherals</h3>
          {this.props.isOwnProfile && (
            <button
              className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                .props.editingPeripherals &&
                "profile-playerHeader-info-button-save"}`}
              onClick={
                this.props.editingPeripherals
                  ? this.props.submitPeripherals
                  : this.props.editPeripherals
              }
            >
              {this.props.editingPeripherals ? "Save" : "Edit"}
            </button>
          )}
        </div>
        {/* TODO: have to make adding and updating working correctly */}
        {this.props.editingPeripherals ? (
          <div className="profile-container-card-body">
            <input
              name="peripheral"
              value="Logitech G933"
              onChange={this.props.handlePlayerChange}
              placeholder="Peripheral"
              className="brand-input-dark"
            />
          </div>
        ) : (
          <div className="profile-container-card-body">
            <h3 className="profile-container-card-body-text">Logitech G933</h3>
          </div>
        )}
      </div>
    );
  }
}

Peripherals.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  return { auth, profile };
}

export default connect(mapStateToProps)(Peripherals);
