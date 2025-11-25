import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollManager from './components/animations/core/ScrollManager';
import PageTransition from './components/animations/PageTransition';
import Loader from './components/ui/Loader';

const Home = lazy(() => import('./pages/Home'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <Suspense fallback={null}>
            <PageTransition>
              <Home />
            </PageTransition>
          </Suspense>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router basename="/akshatprofile.github.io">
      <AnimatePresence mode="wait">
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <ScrollManager>
          <div className="bg-cream min-h-screen text-black font-sans selection:bg-lime-primary selection:text-black">
            <Navbar />
            <AnimatedRoutes />
          </div>
        </ScrollManager>
      )}
    </Router>
  );
}

export default App;
