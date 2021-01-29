import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    window.addEventListener('online', () => setStatus('online'));
    window.addEventListener('offline', () => setStatus('offline'));
    return () => {
      window.removeEventListener('online', () => setStatus('online'));
      window.removeEventListener('offline', () => setStatus('offline'));
    };
  }, []);
  const statusClass = status === 'offline' ? 'status_offline' : '';
  return <div className={`status ${statusClass}`}>{status}</div>;
};

export default ConnectionStatus;
