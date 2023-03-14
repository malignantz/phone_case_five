import { withAuthenticationRequired } from "@auth0/auth0-react";
//import { PageLoader } from "./page-loader";

export const AuthenticationGuardComponent = ({ component, ...props }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>,
  });

  return <Component {...props} />;
};
