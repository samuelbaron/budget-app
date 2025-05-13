import { Amplify } from 'aws-amplify'

export const configureCognito = () => {
  Amplify.configure({
    Auth: {
      Cognito: {
        region: import.meta.env.VITE_AWS_REGION,
        userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
        userPoolClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID
      }
    }
  })
}

// TODO configure AWS