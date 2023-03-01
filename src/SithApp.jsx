import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";

export const SithApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
