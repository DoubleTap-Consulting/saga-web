import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Experiences from "./components/experiences/experiences";
import Personal from "./components/personal/personal";
import Endorsements from "./components/endorsements/endorsements";
import Peripherals from "./components/peripherals/peripherals";
import Schedule from "./components/schedule/schedule";
import Settings from "./components/settings/settings";
import Summary from "./components/summary/summary";
import Stats from "./components/stats/stats";
import ProfileHeader from "./components/profile-header/profileHeader";
import HackerFlag from "./components/hacker-flag/hackerFlag";

import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { getLifetimeStats, getSeasonStats } from "utils/pubgApi";
import { loadUserProfile } from "utils/api";
import { deleteAccount } from "utils/profile";
import { getProfile, updateProfileData } from "actions/profile";

import "./profile.css";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      pubgSeasons: [
        {
          id: "division.bro.official.pc-2018-02",
          name: ""
        },
        {
          id: "division.bro.official.pc-2018-01",
          name: ""
        },
        {
          id: "division.bro.official.2018-09",
          name: "2018 Season 9"
        },
        {
          id: "division.bro.official.2018-09",
          name: "2018 Season 8"
        },
        {
          id: "division.bro.official.2018-07",
          name: "2018 Season 7"
        },
        {
          id: "division.bro.official.2018-06",
          name: "2018 Season 6"
        },
        {
          id: "division.bro.official.2018-05",
          name: "2018 Season 5"
        },
        {
          id: "division.bro.official.2018-04",
          name: "2018 Season 4"
        },
        {
          id: "division.bro.official.2018-03",
          name: "2018 Season 3"
        },
        {
          id: "division.bro.official.2018-02",
          name: "2018 Season 2"
        },
        {
          id: "division.bro.official.2018-01",
          name: "2018 Season 1"
        }
      ],
      editingPersonal: false,
      editingHeader: false,
      editingPeripherals: false,
      editingSchedule: false,
      editingSummary: false,
      pubgLifetimeStats: [],
      pubgLifetimeStatsOrder: [],
      pubgLast10Games: [],
      pubgSeasonStats: [],
      pubgSeasonStatsOrder: []
    };
  }

  componentWillMount() {
    this.props.dispatch(getProfile(this.props.location.pathname.slice(1)));
  }

  editHeader = () => {
    this.setState({
      editingHeader: true
    });
  };

  editPersonal = () => {
    this.setState({
      editingPersonal: true
    });
  };

  editPeripherals = () => {
    this.setState({
      editingPeripherals: true
    });
  };

  editSchedule = () => {
    this.setState({
      editingSchedule: true
    });
  };

  editSummary = () => {
    this.setState({
      editingSummary: true
    });
  };

  submitHeader = () => {
    // TODO: Save user info: gamerTag, tagline
    this.setState({
      editingHeader: false
    });
  };

  submitPersonal = () => {
    // TODO: Save user info: firstName, lastName, birthday, lcoation, summary
    this.setState({
      editingPersonal: false
    });
  };

  submitPeripherals = () => {
    this.setState({
      editingPeripherals: false
    });
  };

  submitSchedule = () => {
    this.setState({
      editingSchedule: false
    });
  };

  submitSummary = () => {
    this.setState({
      editingSummary: false
    });
  };

  deleteAccount = () => {
    this.props.dispatch(deleteAccount());
  };

  handleChange = event => {
    //
  };

  handleExperienceChange = event => {
    //
  };

  handlePlayerChange = event => {
    if (event.target.name === "summary" && event.target.value.length > 255) {
      return;
    }

    let playerSnapshot = Object.assign({}, this.props.profile);
    playerSnapshot[event.target.name] = event.target.value;
    this.setState({
      player: playerSnapshot
    });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleTabChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    let currentUser = loadUserProfile();
    let isOwnProfile = false;
    if (this.props.profile.id) {
      isOwnProfile = this.props.profile.id === currentUser.user_id;
    }
    let profileTabs = [
      {
        label: "Professional"
      },
      {
        label: "Stats & Highlights"
      },
      {
        label: "Personal"
      }
    ];
    if (isOwnProfile && profileTabs.length === 3) {
      profileTabs.push({ label: "Settings" });
    }

    return (
      <div className="profile">
        <div className="profile-header brand-background-header">
          <h1>Profile</h1>
        </div>
        <ProfileHeader isOwnProfile={isOwnProfile} />
        <HackerFlag />
        <div className="profile-tabs brand-background-dark">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              {profileTabs.map(tab => (
                <Tab label={tab.label} key={`profile--tabs-${tab.label}`} />
              ))}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={"x"}
            index={this.state.value}
            onChangeIndex={this.handleChangeIndex}
          >
            <div>
              <div className="profile-stream">
                <iframe
                  src={`https://player.twitch.tv/?channel=${
                    this.props.profile.twitch_username
                  }&muted=true`}
                  title="ProfileTwitchLiveStream"
                  id="ProfileTwitchLiveStream"
                  width="100%"
                  height="500px"
                  theme="dark"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
              <Experiences isOwnProfile={isOwnProfile} />
            </div>
            <div>
              <div className="profile-stream">
                <iframe
                  src={`https://player.twitch.tv/?video=v176854397&autoplay=false&muted=true`}
                  height="520"
                  width="100%"
                  title="ProfileTwitchStream"
                  theme="dark"
                  frameBorder="0"
                  layout="video"
                  allowFullScreen={true}
                />
              </div>
              <Stats
                stats={this.state.pubgLifetimeStats}
                order={this.state.pubgLifetimeStatsOrder}
                title="Lifetime Stats"
                game={this.props.profile.game}
              />
              <Stats
                stats={this.state.pubgSeasonStats}
                order={this.state.pubgLifetimeStatsOrder}
                title="Season Stats"
                game={this.props.profile.game}
              />
            </div>
            <div>
              <Summary
                isOwnProfile={isOwnProfile}
                handlePlayerChange={this.handlePlayerChange}
                editingSummary={this.state.editingSummary}
                editSummary={this.editSummary}
                submitSummary={this.submitSummary}
              />
              <Personal
                player={this.props.profile}
                isOwnProfile={isOwnProfile}
                handlePlayerChange={this.handlePlayerChange}
                editingPersonal={this.state.editingPersonal}
                editPersonal={this.editPersonal}
                submitPersonal={this.submitPersonal}
              />
              <Peripherals isOwnProfile={isOwnProfile} />
              <Schedule
                editingSchedule={this.state.editingSchedule}
                editSchedule={this.editSchedule}
                submitSchedule={this.submitSchedule}
                handlePlayerChange={this.handlePlayerChange}
                isOwnProfile={isOwnProfile}
              />
              <Endorsements endorsements={this.props.profile.endorsements} />
            </div>
            <Settings
              handleChange={this.handlePlayerChange}
              deleteAccount={this.deleteAccount}
            />
          </SwipeableViews>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps({ auth, profile: { data: profile } }) {
  console.log("profile", profile);
  return { auth, profile };
}

export default connect(mapStateToProps)(Profile);
