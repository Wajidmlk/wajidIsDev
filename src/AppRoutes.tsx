import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppStateProvider from './appUtils/AppStateProvider';
import PagesBase from './baseComponents/pagesBase/PagesBase';
import HeaderContainer from './baseComponents/headerContainer/HeaderContainer';
import FooterContainer from './baseComponents/footerContainer/FooterContainer';
import { GetAppStructure, GetPageById } from './common/staticApp/StaticAppStructure';
import NavBar from './components/navs/NavBar';

const CpRoutes = (): JSX.Element => {
  const appStructure = GetAppStructure();
  
  if(!appStructure.multipage) return (<>
    <AppStateProvider>
      <div className='app-base-root'>
        <HeaderContainer children={
          <NavBar id={appStructure.nav.id} />
        }/>
          {appStructure.pages.map((page, key) => <PagesBase
              key={`${page.id}${key}`}
              appStructure={appStructure}
              multipage={false}
              Component={[<GetPageById page={page} userData={appStructure.userData} />]}
            />)
          }
        <FooterContainer children={<>footer  </>}/>
      </div>
    </AppStateProvider>
  </>);

  return (<>
    <AppStateProvider>
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
    </AppStateProvider>
  </>);
}
export default CpRoutes;
