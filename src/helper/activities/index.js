export const getGroupActivities = () => `/activities/`;
export const getOneActivity = (activityID) => `/activities/${activityID}/`;
export const postCreateActivity = () => `/activities/`;
export const patchUpdateActivity = (activityID) => `/activities/${activityID}/`;
export const deleteActivity = (activityID) => `/activities/${activityID}/`;

export const formatDate = (date) => {
  let rawDate = new Date(date);

  let day = rawDate.getDate();
  let month = rawDate.getMonth();
  let year = rawDate.getFullYear();

  let hours = rawDate.getHours();
  let minutes = rawDate.getMinutes();

  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let strTime = hours + ":" + minutes + " " + ampm;

  return `${day}/${month}/${year} ${strTime}`;
};
