//API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, Please Wait",
  },
  success: {
    title: "Success!",
    message: "Data has been loaded successfully",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error while fetching response from the server. please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message:
      "Unable to connect with the server. please check internet connectivity and try again",
  },
};

//service call
export const SERVICE_URL = {
  userSignup: { url: "/signup", method: "POST" },
};
