import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./statTabs.css";

class StatTabs extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 1
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="statTabs">
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            {this.props.order.map(tab => (
              <Tab label={tab} key={`statTabsTab${tab}`} />
            ))}
          </Tabs>
        </AppBar>
        <div className="statTabs-container">
          {this.props.stats.map(
            (statsData, index) =>
              value === index && (
                <div
                  key={`statTabsTabContainer${this.props.order[index]}`}
                  className="statTabs-container-statContainer"
                >
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Wins</h5>
                    <h5>{statsData.wins}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Kills</h5>
                    <h5>{parseInt(statsData.kills).toLocaleString()}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Assists</h5>
                    <h5>{statsData.assists}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Best Rank Points</h5>
                    <h5>
                      {parseInt(statsData.bestRankPoint).toLocaleString()}
                    </h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>dBNOs</h5>
                    <h5>{statsData.dBNOs}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Damage Dealt</h5>
                    <h5>{parseInt(statsData.damageDealt).toLocaleString()}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Headshot Kills</h5>
                    <h5>{statsData.headshotKills}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Longest Kill</h5>
                    <h5>{statsData.longestKill.toFixed(1)}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Highest Kill Game</h5>
                    <h5>{statsData.roundMostKills}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Kills</h5>
                    <h5>{statsData.kills}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Top 10s</h5>
                    <h5>{statsData.top10s}</h5>
                  </div>
                  <div className="statTabs-container-statContainer-row row-dark">
                    <h5>Days Played</h5>
                    <h5>{statsData.days}</h5>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    );
  }
}

StatTabs.propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

StatTabs.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

StatTabs.defaultProps = {};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(StatTabs);
