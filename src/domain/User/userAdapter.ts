import {User, UserApi} from './userTypes';

function toUser(userAPI: UserApi): User {
  return {
    email: userAPI.email,
    firstName: userAPI.first_name,
    fullName: userAPI.full_name,
    id: userAPI.id,
    isOnline: userAPI.is_online,
    lastName: userAPI.last_name,
    profileUrl: userAPI.profile_url,
    userName: userAPI.username,
  };
}

export const userAdapter = {
  toUser,
};
