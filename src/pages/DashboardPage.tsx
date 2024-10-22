import Dashboard from '../components/Dashboard';
import { SmsProvider } from '../context/SmsContext';

const DashboardPage = () => {
  return (
    <SmsProvider>
      <Dashboard />
    </SmsProvider>
  );
};

export default DashboardPage;
