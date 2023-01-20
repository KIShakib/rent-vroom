import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './components/Routes/Routes';

function App() {
  return (
    <div className='lg:w-[80%] mx-auto max-w-[1440px]'>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;


// style={{ fontFamily: "'Bellefair', sans-serif" }}
// style={{ fontFamily: "'Barlow Condensed', sans-serif" }}