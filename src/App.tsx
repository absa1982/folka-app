import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MarketingPage } from './pages/marketing/MarketingPage';
import { MobilePage } from './pages/mobile/MobilePage';
import { AppLayout } from './pages/app/AppLayout';
import { DashboardScreen } from './pages/app/screens/DashboardScreen';
import { TimeApprovalScreen } from './pages/app/screens/TimeApprovalScreen';
import { EmployeesScreen } from './pages/app/screens/EmployeesScreen';
import { OnboardingScreen } from './pages/app/screens/OnboardingScreen';
import { RecruitmentScreen } from './pages/app/screens/RecruitmentScreen';
import { EquipmentScreen } from './pages/app/screens/EquipmentScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketingPage />} />
      <Route path="/mobile" element={<MobilePage />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardScreen />} />
        <Route path="time" element={<TimeApprovalScreen />} />
        <Route path="employees" element={<EmployeesScreen />} />
        <Route path="onboarding" element={<OnboardingScreen />} />
        <Route path="recruitment" element={<RecruitmentScreen />} />
        <Route path="equipment" element={<EquipmentScreen />} />
      </Route>
    </Routes>
  );
}
