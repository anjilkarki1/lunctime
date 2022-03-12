import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useEffect, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginPending,
  loginSuccess,
} from "./redux/reducers/authSlice";
import NotFound from "./pages/NotFound";
import routesConfig from "./routes/routesConfig";
import Sidebar from "./components/Sidebar";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.authState);

  const routes = useMemo(() => {
    if (user) {
      return routesConfig.filter((i) =>
        i.roles.some(
          (it) =>
            it === user?.role || (it === "all" && user?.role === "customer")
        )
      );
    }

    return routesConfig.filter(
      (i) => i.roles.length === 0 || i.roles.includes("all")
    );
  }, [user]);

  useEffect(() => {
    dispatch(loginPending());
    const token = localStorage.getItem("_t");
    if (token) {
      axios
        .get(`${process.env.REACT_APP_API_BASE_URL}/ums/self`, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => dispatch(loginSuccess(res.data.user)))
        .catch((err) => dispatch(loginFailure()));
    } else {
      dispatch(loginFailure());
    }
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : !user || user?.role === "customer" ? (
    <main className="h-screen flex flex-col">
      <Router>
        <Header />
        <Routes>
          {routes.map((i) => {
            const Page = i.component;
            return (
              <Route
                path={i.path}
                element={<Page />}
                key={`app-route-${i.path}`}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  ) : (
    <main className="h-screen w-full flex">
      <Router>
        <Sidebar />
        <Routes>
          {routes.map((i) => {
            const Page = i.component;
            return (
              <Route
                path={i.path}
                element={<Page />}
                key={`app-route-${i.path}`}
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
