export const getPersonalHabit = () => `/habits/personal/`;
export const getOneHabit = (habitID) => `/habits/${habitID}/`;
export const postCreateHabit = () => `/habits/`;
export const patchUpdateHabit = (habitID) => `/habits/${habitID}/`;
export const deleteHabit = (userID) => `/habits/${userID}/`;
