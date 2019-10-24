import React from "react";
import { ROUTES } from "./components/helper";
import HookFetch from "./components/hook_fetch.js";
import ContainerSurveys from "./components/containers_surveys.js";

function App() {
  const fetchedSurveys = HookFetch(ROUTES.FETCH_SURVEYS);
  return (
    <ContainerSurveys
      fetchedSurveys={fetchedSurveys ? fetchedSurveys.surveys : []}
    />
  );
}
export default App;
