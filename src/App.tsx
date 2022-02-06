import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from './App.module.scss';

const Home = lazy(
  () =>
    import(
      /* webpackChunkName: "home" */
      /* webpackPrefetch: true */
      './routes/home'
    )
);

const WatchList = lazy(
  () =>
    import(
      /* webpackChunkName: "watch-list" */
      /* webpackPrefetch: true */
      './routes/watch-list'
    )
);

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>The MovieDB</header>

      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <div id="app" className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watch-list" element={<WatchList />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
