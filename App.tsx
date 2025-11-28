import React, { useState, useEffect } from 'react';
import { Dashboard } from './components/Dashboard';
import { ClientForm } from './components/ClientForm';

const App: React.FC = () => {
  const [brokerId, setBrokerId] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    // Simple router based on query params
    const params = new URLSearchParams(window.location.search);
    const bId = params.get('brokerId');
    const cId = params.get('companyId');
    if (bId) {
      setBrokerId(bId);
    }
    if (cId) {
      setCompanyId(cId);
    }
  }, []);

  // If there is a brokerId in the URL, show the client form for that broker
  if (brokerId) {
    return <ClientForm brokerId={brokerId} companyId={companyId} />;
  }

  // Otherwise, show the CRM dashboard
  return <Dashboard />;
};

export default App;
