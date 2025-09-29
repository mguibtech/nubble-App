import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User} from './userTypes';

async function getUserById(userID: number): Promise<User> {
  const getUserApi = await userApi.getById(userID.toString());
  return userAdapter.toUser(getUserApi);
}

export const userService = {
  getUserById,
};
