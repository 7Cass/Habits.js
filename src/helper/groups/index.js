export const getGroups = (page) => `/groups/?page=${page}`;
export const getOneGroup = (groupID) => `/groups/${groupID}/`;
export const postCreateGroup = () => `/groups/`;
export const postSubscribeGroup = (groupID) => `/groups/${groupID}/subscribe/`;
export const patchUpdateGroup = (groupID) => `/groups/${groupID}/`;
