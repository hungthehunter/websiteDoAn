import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NVDIA_STORE_MAIN from "../Component/Page/Main/NVDIA_STORE_MAIN.js";
import Shop from '../Component/Page/Shop/index.js';
function App() {
  return (
   
    <Router>
      <div className="App">
        {/* <Routes >
          {publicRoutes.map((route, index) => {
             console.log(`Mapping route: ${route.path}`);
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                path={route.path}
                key={index}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes> */}

        <Routes>
          <Route   path="/websiteDoAn/" element={<NVDIA_STORE_MAIN/>}/>
          <Route   path="/websiteDoAn/Shop" element={<Shop/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
