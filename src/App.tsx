import React from 'react';
import Layout from './components/Layout';
import { AuthProvider } from './context/AuthProvider';
import PrincipaleDashboard from './pages/PrincipaleDashboard';

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <PrincipaleDashboard />
      </Layout>
    </AuthProvider>
  );
}