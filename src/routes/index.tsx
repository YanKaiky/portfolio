import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Browse } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Browse />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
