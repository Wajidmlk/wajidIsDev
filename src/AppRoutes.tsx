import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagesBase from './baseComponents/pagesBase/PagesBase';
import HeaderContainer from './baseComponents/headerContainer/HeaderContainer';
import FooterContainer from './baseComponents/footerContainer/FooterContainer';
import { GetAppStructure, GetPageById } from './common/staticApp/StaticAppStructure';
import NavBar from './components/navs/NavBar';
import { useAppStateContext } from './appUtils/AppState';

const CpRoutes = (): JSX.Element => {
  const appStructure = GetAppStructure();

  const {nav, userData} = useAppStateContext();
  
  if(!appStructure.multipage) return (<>
      <div className='app-base-root'>
        <HeaderContainer children={
          <NavBar id={nav.id} />
        }/>
          {appStructure.pages.map((page) => <PagesBase
              key={page.id}
              appStructure={appStructure}
              multipage={false}
              Component={[<GetPageById page={page} userData={userData} />]}
            />)
          }
        <FooterContainer children={<>footer  </>}/>
      </div>
  </>);

  return (<>
      <div className='app-base-root'>
        <Router>
          <Routes>
            {
              [...appStructure.pages, {
                id: "",
                sequence: -1,
                style: {},
                },
              ].map((page, key) => <Route path={`/${page.id}`} element={
                <PagesBase
                  multipage
                  key={`${page.id}${key}`}
                  appStructure={appStructure}
                  Component={[<GetPageById page={page} userData={appStructure.userData}/>]}
                />
              } />)
            }
          </Routes>
        </Router>
      </div>
  </>);
}
export default CpRoutes;
