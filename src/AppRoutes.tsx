import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagesBase from './baseComponents/pagesBase/PagesBase';
import HeaderContainer from './baseComponents/headerContainer/HeaderContainer';
import FooterContainer from './baseComponents/footerContainer/FooterContainer';
import { GetPageById } from './common/staticApp/StaticAppStructure';
import NavBar from './components/navs/NavBar';
import { useAppStateContext } from './appUtils/AppState';
import ReactToast from './baseComponents/reactToast/ReactToast';

const CpRoutes = (): JSX.Element => {

  const {nav, userData, multipage, pages} = useAppStateContext();
  
  if(!multipage) return (<>
      <div className='app-base-root'>
        <HeaderContainer children={
          <NavBar id={nav.id} />
        }/>
          {pages.map((page) => <PagesBase
              key={page.id}
              Component={[<GetPageById page={page} userData={userData} />]}
            />)
          }
        <FooterContainer children={<>footer  </>}/>
      </div>
      <ReactToast />
  </>);

  return (<>
      <div className='app-base-root'>
        <Router>
          <Routes>
            {
              [...pages, {
                id: "",
                sequence: -1,
                style: {},
                },
              ].map((page, key) => <Route path={`/${page.id}`} element={
                <PagesBase
                  key={`${page.id}${key}`}
                  Component={[<GetPageById page={page} userData={userData}/>]}
                />
              } />)
            }
          </Routes>
        </Router>
      </div>
      <ReactToast />
  </>);
}
export default CpRoutes;
