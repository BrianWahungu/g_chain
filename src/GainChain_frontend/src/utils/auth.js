import { AuthClient } from "@dfinity/auth-client";

let authClient = null;

export const initAuth = async () => {
  authClient = await AuthClient.create();
};

export const login = async () => {
  await authClient.login({
    identityProvider: "https://identity.ic0.app/#authorize",
    onSuccess: () => {
      window.location.reload();
    },
  });
};

export const logout = async () => {
  authClient.logout();
  window.location.reload();
};

export const getPrincipal = () => {
  return authClient.getIdentity().getPrincipal().toText();
};
export const isAuthenticated = () => {
  return authClient && authClient.isAuthenticated();
};

export const checkAuth = async () => {
  if (!authClient) {
    await initAuth();
  }
  return authClient.isAuthenticated();
};

export const getAuthClient = () => {
  return authClient;
};
