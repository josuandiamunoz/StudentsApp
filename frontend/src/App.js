import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './controls/views/login/Login';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import Main from './controls/layout/Main';
import Students from './controls/views/students/Students';
import Dashboard from './controls/views/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={
              <PublicRoute>
                  <Login />
              </PublicRoute>
            }
          />
          <Route path="/main" element={
                <ProtectedRoute>
                    <Main />
                </ProtectedRoute>
            }
          >
            <Route path="students" element={<Students />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
