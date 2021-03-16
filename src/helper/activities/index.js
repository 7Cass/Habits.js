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

  let hours = rawDate.getHours() + 3;
  let minutes = rawDate.getMinutes();

  let ampm = hours <= 12 ? "AM" : "PM";

  hours = hours % 12; // Relógio 12h
  hours = hours ? hours : 12; // Meia noite deve ser 12h;

  console.log(hours);

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
};
