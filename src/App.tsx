import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <main className="min-h-screen">
      <div className="container">
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </div>
    </main>
  );
}

export default App;
