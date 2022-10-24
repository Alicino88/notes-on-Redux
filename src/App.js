import Counter from "./Components/Counter";
import Auth from "./Components/Auth";
import UserProfile from "./Components/UserProfile";
import Header from "./Components/Header";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
