

import { Routes,Route } from 'react-router-dom'
import FormData from './components/FormData';
import List from './components/List';


function App() {


  return (
    <div >
<Routes>
  <Route path='/' element={<FormData/>}/>
  <Route path='/showList' element={<List/>}/>
</Routes>

    


    
   
    </div>
  );
}
export default App;
