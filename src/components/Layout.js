import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/Firebase/Auth";
import { useAuth, useLogout } from "../context/AuthContext";

export default function Layout({ children }) {
  let navigate = useNavigate();
  const authenticated = useAuth();
  const logout = useLogout();

  const routeChange = (e) => {
    const path = e.target.value;
    navigate(path);
  };

  const navigationTab = () => {
    return !authenticated
      ? [{ text: "Employer Login", path: "login" }]
      : [
          { text: "Job Listing", path: "company/job" },
          { text: "Create Job", path: "create" },
        ];
  };

  const logoutHandler = async () => {
    logOut().then(() => {
      logout();
      sessionStorage.removeItem("user");
      navigate("/");
    });
  };

  return (
    <Box sx={{ background: "f9f9f9", width: "100%" }}>
      <AppBar component="nav" position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Pulsifi Assessment 1
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              key="home"
              sx={{ color: "#fff" }}
              onClick={routeChange}
              value="/"
            >
              Home
            </Button>

            {navigationTab().map((tabItem) => (
              <Button
                key={tabItem.text}
                sx={{ color: "#fff" }}
                onClick={routeChange}
                value={tabItem.path}
              >
                {tabItem.text}
              </Button>
            ))}

            {authenticated && (
              <Button
                key="Logout"
                sx={{ color: "#ff0000" }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Children */}
      <div style={{ marginTop: "10px" }}>{children}</div>
    </Box>
  );
}
