import React, { useCallback } from 'react';

import { Container, Content } from './styles';
import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const handleLogout = useCallback(() => {
    const keysToRemove = ['@GoBarber:token', '@GoBarber:user'];

    keysToRemove.forEach(key => {
      localStorage.removeItem(key);
    });

    document.location.reload();
  }, []);

  return (
    <Container>
      <Content>
        <h1>Dashboard</h1>
        <Button onClick={handleLogout}>Sair</Button>
      </Content>
    </Container>
  );
};

export default Dashboard;
