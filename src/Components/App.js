import { BrowserRouter as  Routes, Route } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    );
}


export default App;
