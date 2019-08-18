import ReactGA from "react-ga";
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

export function trackClick(event) {
  ReactGA.event({
    category: event.target.name,
    action: event.target.id
  });
}

export function trackAction(category, action) {
  ReactGA.event({
    category: category,
    action: action
  });
}
