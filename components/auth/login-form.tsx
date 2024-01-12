import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButttonLabel="Don't have and account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form!
    </CardWrapper>
  );
};
  