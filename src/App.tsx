import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import EmployeeLayout from './components/EmployeeLayout/EmployeeLayout';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import EmployeeCard from './components/EmployeeCard/EmployeeCard';


function App() {



  return (
    <BrowserRouter>
      <GlobalStyles />
      <EmployeeLayout>
        <Routes>
          <Route path='/' element={<EmployeeForm />} />
          <Route path='/employeeCard' element={<EmployeeCard />} />
          <Route path='*' element='Page not found' />
        </Routes>
      </EmployeeLayout>
    </BrowserRouter>
  );
}

export default App;
