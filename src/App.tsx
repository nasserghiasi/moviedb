import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Spinner from './components/Spinner';
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

const Favorites = lazy(
  () =>
    import(
      /* webpackChunkName: "favorites" */
      /* webpackPrefetch: true */
      './routes/favorites'
    )
);

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />

        <Suspense fallback={<SuspenseFallback />}>
          <div id="app" className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* A support for github pages situation (for demo deployment) */}
              <Route path="/moviedb" element={<Home />} />

              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watch-list" element={<WatchList />} />
            </Routes>
          </div>
        </Suspense>
      </Router>
    </div>
  );
}

function SuspenseFallback() {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );
}

export default App;
