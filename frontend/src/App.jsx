import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import { RoleProvider } from './context/RoleContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import RegisterBuilderPage from './pages/RegisterBuilderPage';
import RegisterInvestorPage from './pages/RegisterInvestorPage';
import RegisterOwnerPage from './pages/RegisterOwnerPage';
import MarketplacePage from './pages/MarketplacePage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <WalletProvider>
      <RoleProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/marketplace/:id" element={<PropertyDetailsPage />} />
            <Route 
              path="/select-role" 
              element={
                <ProtectedRoute>
                  <RoleSelectionPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/register/builder" 
              element={
                <ProtectedRoute>
                  <RegisterBuilderPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/register/investor" 
              element={
                <ProtectedRoute>
                  <RegisterInvestorPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/register/owner" 
              element={
                <ProtectedRoute>
                  <RegisterOwnerPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </Router>
      </RoleProvider>
    </WalletProvider>
  );
}

export default App;
