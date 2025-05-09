import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/FormContext';
import Layout from './components/Layout';
import StudentsMasters from './components/StudentsMasters';
import StateManagementPage from './pages/StateManagementPage';
import CityManagementPage from './pages/CityManagementPage';
import CampusManagementPage from './pages/CampusManagementPage';
import FeePaymentYearPage from './pages/FeePaymentYearPage';
import FeeHeadsPage from './pages/FeeHeadsPage';
import OrganisationManagementPage from './pages/OrganisationManagementPage';
import CardTypePage from './pages/CardTypePage';
import StreamManagementPage from './pages/StreamManagementPage';
import ProgramNamePage from './pages/ProgramNamePage';
import ExamProgramPage from './pages/ExamProgramPage';
import CourseTrackPage from './pages/CourseTrackPage';
import './App.css';

function App() {
  return (
    <FormProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<div></div>} /> {/* Empty div for default route */}
            <Route path="/students" element={<StudentsMasters />}>
              <Route path="state" element={<StateManagementPage />} />
              <Route path="city" element={<CityManagementPage />} />
              <Route path="campus" element={<CampusManagementPage />} />
              <Route path="fee-payment-year" element={<FeePaymentYearPage />} />
              <Route path="fee-heads" element={<FeeHeadsPage />} />
              <Route path="organisation" element={<OrganisationManagementPage />} />
              <Route path="card-type" element={<CardTypePage />} />
              <Route path="stream" element={<StreamManagementPage />} />
              <Route path="program-name" element={<ProgramNamePage />} />
              <Route path="exam-program" element={<ExamProgramPage />} />
              <Route path="course-track" element={<CourseTrackPage />} />
            </Route>
            <Route path="/application" element={<div></div>} />
            <Route path="/employee" element={<div></div>} />
            <Route path="/fleet" element={<div></div>} />
            <Route path="/warehouse" element={<div></div>} />
            <Route path="/sms" element={<div></div>} />
            <Route path="/question-bank" element={<div></div>} />
            <Route path="/assets" element={<div></div>} />
            <Route path="/payment" element={<div></div>} />
            <Route path="/cctv" element={<div></div>} />
            <Route path="/hrms" element={<div></div>} />
          </Routes>
        </Layout>
      </Router>
    </FormProvider> 
  );
}

export default App;