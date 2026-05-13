import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './controls/views/login/Login';
import PublicRoute from './routes/PublicRoute';
import ProtectedRoute from './routes/ProtectedRoute';
import Main from './controls/layout/Main';

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
          />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
