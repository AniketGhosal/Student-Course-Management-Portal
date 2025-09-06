// import React from 'react';
// import HeroSection from './components/HeroSection'; 
// import CoursesSection from './components/CoursesSection';
// import FeaturesSection from './components/FeaturesSection';
// import GuidelinesSection from './components/GuidelinesSection';
// import FooterSection from './components/FooterSection';

// function App() {
//   return (
//     <div> 
//       <HeroSection />
//       <CoursesSection />
//       <FeaturesSection />
//       <GuidelinesSection />
//       <FooterSection />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CourseSection from './components/CoursesSection';
import FeatureSection from './components/FeaturesSection';
import GuidelineSection from './components/GuidelinesSection';
import FooterSection from './components/FooterSection';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <CourseSection />
            <FeatureSection />
            <GuidelineSection />
            <FooterSection />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
