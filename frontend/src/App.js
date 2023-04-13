import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />}/>
          <Route path='/Analytics' element={<Analytics />}/>
        </Route>
        <Route path="" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
