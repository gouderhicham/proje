import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentPage from "./pages/StudentPage";
import NotesPage from "./pages/NotesPage";
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
            <Route
              path="/student/:id/notes"
              element={
                <Suspense fallback={<div>loading</div>}>
                  <NotesPage />
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
