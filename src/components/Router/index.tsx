import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Landing from "../../pages/Landing";
import Header from "../Header";
import Footer from "../Footer";
import Project from "../Project";


function AppRouter () : JSX.Element {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/project/:projectId" element={<Project />} />
            </Routes>
            <Footer />
        </Router>
    );
}


export default AppRouter;
