import React, { useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import StudentPage from "./StudentPage";
function App() {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Suspense fallback={<div>loading</div>}></Suspense>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <LoginPage />
                </Suspense>
              }
            />
            <Route
              path="/student/:id"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <StudentPage />
                </Suspense>
              }
            />
            {/* <Route
              path="/news"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <News />
                </Suspense>
              }
            >
              <Route
                path=":id"
                element={
                  <Suspense fallback={<div>loading</div>}>
                    <NewsDetails />
                  </Suspense>
                }
              />
            </Route> */}
          </Routes>
        </div>
      </Suspense>
    </>
  );
}

export default App;
