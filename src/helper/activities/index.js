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

  let hours = rawDate.getUTCHours();
  let minutes = rawDate.getUTCMinutes();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
