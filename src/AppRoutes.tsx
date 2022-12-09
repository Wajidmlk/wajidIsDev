import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PagesBase from './baseComponents/pagesBase/PagesBase';
import HeaderContainer from './baseComponents/headerContainer/HeaderContainer';
import FooterContainer from './baseComponents/footerContainer/FooterContainer';
import { GetPageById } from './common/staticApp/StaticAppStructure';
import NavBar from './components/navs/NavBar';
import { useAppStateContext } from './appUtils/AppState';
import ReactToast from './baseComponents/reactToast/ReactToast';
import Footer from './components/footers/Footer';

const CpRoutes = (): JSX.Element => {

  const {footer, multiPage, pages} = useAppStateContext();
  
  if(!multiPage) return (<>
      <div className='app-base-root'>
        <HeaderContainer children={
          <NavBar />
        }/>
          {pages.map((page) => <PagesBase
              key={page.pageId}
              Component={[<GetPageById page={page} />]}
            />)
          }
        <FooterContainer children={<Footer {...footer}/>}/>
      </div>
      <ReactToast />
  </>);

  return (<>
      <div className='app-base-root'>
        <Router>
          <Routes>
            {
              [...pages, {
                pageId: '',
                pageCatId: '',
                pageName: '',
                parentId: '',
                sequence: -1,
                style: {},
                },
              ].map((page, key) => <Route path={`/${page.pageId}`} element={
                <PagesBase
                  key={`${page.pageId}${key}`}
                  Component={[<GetPageById page={page} />]}
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
