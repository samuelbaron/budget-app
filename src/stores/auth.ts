import { defineStore } from "pinia";
import { ref } from "vue";
import { signIn, signUp, signOut, confirmSignUp, fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isAuthenticated = ref(false);
  const loading = ref(false);

  async function fetchCurrentUser() {
    try {
      loading.value = true;
      const userData = await getCurrentUser();
      const attributes = await fetchUserAttributes();
      user.value = { ...userData, attributes };
      isAuthenticated.value = true;
      return user.value;
    } catch (error) {
      user.value = null;
      isAuthenticated.value = false;
      return null;
    } finally {
      loading.value = false;
    }
  }

  async function login(username: string, password: string) {
    try {
      loading.value = true;
      const { isSignedIn, nextStep } = await signIn({ username, password });
      if (isSignedIn) {
        await fetchCurrentUser();
      }
      return { isSignedIn, nextStep };
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function register(username: string, password: string, email: string) {
    try {
      loading.value = true;
      return await signUp({
        username,
        password,
        options: {
          userAttributes: {
            email,
          },
        },
      });
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function confirmRegistration(username: string, code: string) {
    try {
      loading.value = true;
      return await confirmSignUp({ username, confirmationCode: code });
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    try {
      loading.value = true;
      await signOut();
      user.value = null;
      isAuthenticated.value = false;
    } catch (error) {
      throw error;
    } finally {
      loading.value = false;
    }
  }

  return {
    user,
    isAuthenticated,
    loading,
    fetchCurrentUser,
    login,
    register,
    confirmRegistration,
    logout,
  };
});

// TODO configure and sync with aws amplify cognito