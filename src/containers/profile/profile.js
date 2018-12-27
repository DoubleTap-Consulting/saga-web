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

import ProfileImage from "images/profile-image.jpeg";
import TwitterIcon from "images/twitter.png";
import InstagramIcon from "images/instagram.png";
import DiscordIcon from "images/discord.png";
import TwitchIcon from "images/twitch.png";
import EyeIcon from "images/eye.svg";

import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  getLifetimeStats,
  getSeasonStats,
  getLastTenGames
} from "utils/pubgApi";
import { getPlayer } from "utils/fortniteApi";
import { getUserProfile } from "utils/profile";

import "./profile.css";

class Profile extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: 0,
      editingPersonal: false,
      editingHeader: false,
      editingExperience: false,
      editingPeripherals: false,
      editingSchedule: false,
      editingSummary: false,
      pubgLifetimeStats: [],
      pubgLifetimeStatsOrder: [],
      pubgLast10Games: [],
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
      pubgSeasonStats: [],
      pubgSeasonStatsOrder: [],
      player: {
        firstName: "Michael",
        lastName: "Mitrakos",
        location: "Austin, Texas",
        birthday: "02/19/1990",
        tagline: "Fragger for Saga.GG",
        summary:
          "I've been involved with esports broadcasting for years. Having started out as a Counter-Strike caster he has grown to become perhaps the most recognizable eSports personality out there, in any game or genre. Get in touch with inquires please :)",
        gamerTag: "Saga_Sultyn",
        pubgId: "account.b03956cdb3274db086d49cb423ef057d",
        game: "PUBG",
        perspectivePreference: "FPP",
        views: "52345",
        teamName: "Saga.GG",
        twitchUsername: "Sultyn",
        twitchHighlightVideo: "176854397",
        role: "Fragger",
        level: "Casual",
        twitchUrl: "http://www.twitch.tv/sultyn",
        twitterUrl: "http://www.twitter.com/mike_mitrakos",
        discordUrl: "",
        instagramUrl: "http://www.instagram.com/michael_mitrakos",
        hacker: false,
        schedule: {
          monday: "5pm - 11pm CST",
          tuesday: "",
          wednesday: "5pm - 11pm CST",
          thursday: "",
          friday: "5pm - 11pm CST",
          saturday: "5pm - 11pm CST",
          sunday: ""
        }
      },
      dateFrom: "",
      dateTo: "",
      description: ""
    };
  }

  componentDidMount() {
    // TODO: have to make sure state is structured correctly above for this
    // getUserProfile(this.props.location.pathname.slice(1)).then(player => {
    // this.setState({
    //   player
    // });
    // });

    // TODO: Move this to after getting user profile so we know what game to pull info for
    if (this.state.player.game === "PUBG") {
      getSeasonStats(
        this.state.player.pubgId,
        "division.bro.official.pc-2018-01"
      ).then(data => {
        console.log("data", data);
        const pubgSeasonStats = [];
        const pubgSeasonStatsOrder = [];
        for (const key in data) {
          if (
            key.includes(this.state.player.perspectivePreference.toLowerCase())
          ) {
            pubgSeasonStatsOrder.push(key);
            pubgSeasonStats.push(data[key]);
          }
        }
        this.setState({
          pubgSeasonStats,
          pubgSeasonStatsOrder
        });
      });
      // TODO: Finish last 10 games endpoint
      // getLastTenGames(this.state.player.pubgId).then(pubgLast10Games => {
      //   this.setState({
      //     pubgLast10Games
      //   });
      // });
      getLifetimeStats(this.state.player.pubgId).then(data => {
        // TODO: need to be caching this
        const pubgLifetimeStats = [];
        const pubgLifetimeStatsOrder = [];
        for (const key in data) {
          if (
            key.includes(this.state.player.perspectivePreference.toLowerCase())
          ) {
            pubgLifetimeStatsOrder.push(key);
            pubgLifetimeStats.push(data[key]);
          }
        }
        this.setState({
          pubgLifetimeStats,
          pubgLifetimeStatsOrder
        });
      });
    } else if (this.state.player.game === "FORTNITE") {
      getPlayer("Sultyn").then(data => {
        console.log("fortnite stats", data);
      });
    }
  }

  // TODO: remove all these useless functions below by combining by function

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

  editExperience = event => {
    this.setState({
      editingExperience: event.target.name
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

  submitExperience = () => {
    this.setState({
      editingExperience: false
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

  // END STUPID FUNCTION CHAIN

  deleteAccount = () => {
    // TODO: delete account functionality
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePlayerChange = event => {
    if (event.target.name === "summary" && event.target.value.length > 255) {
      return;
    }

    let playerSnapshot = Object.assign({}, this.state.player);
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
    let isOwnProfile =
      this.props.auth.user.gamerTag === this.props.location.pathname.slice(1);
    return (
      <div className="profile">
        <div className="profile-header brand-background-header">
          <h1>Profile</h1>
        </div>
        <div className="profile-playerHeader brand-background-dark">
          <img
            className="profile-playerHeader-profileImage"
            src={ProfileImage}
            alt="Profile"
          />
          <div className="profile-playerHeader-info">
            {isOwnProfile && (
              <button
                className={`profile-playerHeader-info-button profile-playerHeader-info-edit-main ${this
                  .state.editingHeader &&
                  "profile-playerHeader-info-button-save"}`}
                onClick={
                  this.state.editingHeader ? this.submitHeader : this.editHeader
                }
              >
                {this.state.editingHeader ? "Save" : "Edit"}
              </button>
            )}
            <div className="column">
              {this.state.editingHeader ? (
                <input
                  value={this.state.player.gamerTag}
                  onChange={this.handlePlayerChange}
                  name="gamerTag"
                  placeholder="Gamer Tag"
                  className="brand-input-dark"
                />
              ) : (
                <h1 className="profile-playerHeader-info-gamerTag">
                  {isOwnProfile
                    ? this.props.auth.user.gamerTag
                    : this.state.player.gamerTag}
                </h1>
              )}
              {this.state.editingHeader ? (
                <input
                  value={this.state.player.tagline}
                  onChange={this.handlePlayerChange}
                  maxLength="100"
                  name="tagline"
                  placeholder="Tagline"
                  className="brand-input-dark"
                />
              ) : (
                <h4 className="profile-playerHeader-info-tagline">
                  {this.state.player.tagline}
                </h4>
              )}
            </div>
            <div className="row profile-playerHeader-info-socials">
              {this.state.player.twitterUrl && (
                <a
                  href={this.state.player.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={TwitterIcon}
                    className="social-icon"
                    alt="twitter"
                  />
                </a>
              )}
              {this.state.player.instagramUrl && (
                <a
                  href={this.state.player.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={InstagramIcon}
                    className="social-icon"
                    alt="instgram"
                  />
                </a>
              )}
              {this.state.player.discordUrl && (
                <a
                  href={this.state.player.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={DiscordIcon}
                    className="social-icon"
                    alt="discord"
                  />
                </a>
              )}
              {this.state.player.twitchUrl && (
                <a
                  href={this.state.player.twitchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitchIcon} className="social-icon" alt="twitch" />
                </a>
              )}
            </div>
          </div>
          <div className="profile-playerHeader-views">
            <img src={EyeIcon} alt="Views" />
            <p>{this.state.player.views}</p>
          </div>
        </div>
        {isOwnProfile && (
          <button className="profile-container-editAvatar">Edit Avatar</button>
        )}
        {this.state.player.hacker && (
          <div className="profile-hacker">
            <h3>
              * This player has been officially accused and confirmed hacking.
              #GG
            </h3>
          </div>
        )}
        <div className="profile-tabs brand-background-dark">
          <AppBar position="static" color="default">
            <Tabs
              value={this.state.value}
              onChange={this.handleTabChange}
              indicatorColor="primary"
              textColor="primary"
            >
              <Tab label="Professional" />
              <Tab label="Stats & Highlights" />
              <Tab label="Personal" />
              {isOwnProfile && <Tab label="Settings" />}
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
                    this.state.player.twitchUsername
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
              <Experiences
                isOwnProfile={isOwnProfile}
                editingExperience={this.state.editingExperience}
                player={this.state.player}
                dateFrom={this.state.dateFrom}
                dateTo={this.state.dateTo}
                description={this.state.description}
                editExperience={this.editExperience}
                submitExperience={this.submitExperience}
                handleChange={this.handleChange}
              />
            </div>
            <div>
              <div className="profile-stream">
                <iframe
                  src={`https://player.twitch.tv/?video=v${
                    this.state.player.twitchHighlightVideo
                  }&autoplay=false&muted=true`}
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
                game={this.state.player.game}
              />
              <Stats
                stats={this.state.pubgSeasonStats}
                order={this.state.pubgLifetimeStatsOrder}
                title="Season Stats"
                game={this.state.player.game}
              />
            </div>
            <div>
              <Summary
                player={this.state.player}
                isOwnProfile={isOwnProfile}
                handlePlayerChange={this.handlePlayerChange}
                editingSummary={this.state.editingSummary}
                editSummary={this.editSummary}
                submitSummary={this.submitSummary}
              />
              <Personal
                player={this.state.player}
                isOwnProfile={isOwnProfile}
                handlePlayerChange={this.handlePlayerChange}
                editingPersonal={this.state.editingPersonal}
                editPersonal={this.editPersonal}
                submitPersonal={this.submitPersonal}
              />
              <Peripherals
                editingPeripherals={this.state.editingPeripherals}
                editPeripherals={this.editPeripherals}
                submitPeripherals={this.submitPeripherals}
                player={this.state.player}
                handlePlayerChange={this.handlePlayerChange}
                isOwnProfile={isOwnProfile}
              />
              <Schedule
                editingSchedule={this.state.editingSchedule}
                editSchedule={this.editSchedule}
                submitSchedule={this.submitSchedule}
                player={this.state.player}
                handlePlayerChange={this.handlePlayerChange}
                isOwnProfile={isOwnProfile}
              />
              <Endorsements endorsements={this.state.player.endorsements} />
            </div>
            {isOwnProfile && (
              <div>
                <Settings
                  player={this.state.player}
                  handleChange={this.handlePlayerChange}
                  deleteAccount={this.deleteAccount}
                />
              </div>
            )}
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

Profile.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
