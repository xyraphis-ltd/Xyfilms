import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ROUTES } from './data/navigation';
import CareersPage from './pages/CareersPage';
import FanCornerPage from './pages/FanCornerPage';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import TokensPage from './pages/TokensPage';

/** Keeps old `/?page=careers` deep links (from the prototype) working. */
function Home() {
  const [params] = useSearchParams();
  const legacy = params.get('page');
  if (legacy && legacy !== 'home' && ROUTES[legacy]) return <Navigate to={ROUTES[legacy]} replace />;
  return <HomePage />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.work} element={<InfoPage pageKey="work" />} />
        <Route path={ROUTES.services} element={<InfoPage pageKey="services" />} />
        <Route path={ROUTES.about} element={<InfoPage pageKey="about" />} />
        <Route path={ROUTES.contact} element={<InfoPage pageKey="contact" showContact />} />
        <Route path={ROUTES.careers} element={<CareersPage />} />
        <Route path={ROUTES.fan} element={<FanCornerPage />} />
        <Route path={ROUTES.tokens} element={<TokensPage />} />
        <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
      </Route>
    </Routes>
  );
}
