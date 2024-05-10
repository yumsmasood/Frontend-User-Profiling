import { NotificationContainer } from "react-notifications";
import AuthPage from "./components/auth";
import { useSelector } from "react-redux";
import Login from "./components/login";

function App() {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <div className="App">
      {loggedIn ? <Login /> : <AuthPage />}
      <NotificationContainer />

      <userProfilePage/>
    </div>
  );
}

export default App;
