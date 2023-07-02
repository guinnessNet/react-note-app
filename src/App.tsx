
import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom'
import './App.css'
import { Sidebar } from './layout/index.js'
import { AllNotes, ErrorPage, TrashNotes,ArchiveNotes,TagNote } from './pages/index.js'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Sidebar/>

      <div className="app__container">
        <Routes>
          <Route path='/' element={<AllNotes/>}/>
          <Route path='/archive' element={<ArchiveNotes/>}/>
          <Route path='/trash' element={<TrashNotes/>}/>
          <Route path='/tag/:name' element={<TagNote/>}/>
          <Route path='/404' element={<ErrorPage/>}/>
          <Route path='/*' element={<Navigate to={"/404"} />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
   
  )
}

export default App
