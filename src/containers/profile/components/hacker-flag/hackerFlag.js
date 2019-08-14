import React from "react";
import { connect } from "react-redux";

import "./hackerFlag.scss";

function Hacker({ hacker }) {
  return (
    <span>
      {hacker && (
        <div className="profile-hacker">
          <h3>
            * This player has been officially accused and confirmed hacking. #GG
          </h3>
        </div>
      )}
    </span>
  );
}

function mapStateToProps({ profile: { hacker } }) {
  return { hacker };
}

export default connect(mapStateToProps)(Hacker);
