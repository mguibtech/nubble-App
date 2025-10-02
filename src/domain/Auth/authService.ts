import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const AuthCredentialsAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(AuthCredentialsAPI);
  } catch (error) {
    throw new Error('email ou senha inválido');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

function updateToken(newToken: string): void {
  api.defaults.headers.common.Authorization = `Bearer ${newToken}`;
}

function removeToken(): void {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  updateToken,
  removeToken,
};
