import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathname = new URL(request.URL).pathname;
  const isLoggedIn = localStorage.getItem("loggedin");
  // const isLoggedIn = true;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }
  return null;
}
