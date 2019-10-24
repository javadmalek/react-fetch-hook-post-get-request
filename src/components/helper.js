// export const BASE_API_URL = 'https://private-5fb3f-surveysmock.apiary-mock.com/api';
export const BASE_API_URL =
  "https://private-anon-dcbb05fed0-surveysmock.apiary-mock.com/api";
export const ROUTES = {
  FETCH_SURVEYS: `${BASE_API_URL}/surveys`,
  FETCH_SURVEY_QUESTIONS: surveyId => `${BASE_API_URL}/surveys/${surveyId}`,
  POST_SURVEY_REPONSE: surveyId =>
    `${BASE_API_URL}/surveys/${surveyId}/completions`
};
