import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppStateProvider from './appUtils/AppStateProvider';
import PagesBase from './baseComponents/pagesBase/PagesBase';
import HeaderContainer from './baseComponents/headerContainer/HeaderContainer';
import FooterContainer from './baseComponents/footerContainer/FooterContainer';
import { GetAppStructure } from './common/staticApp/StaticAppStructure';
import './appBase.scss';

const CpRoutes = (): JSX.Element => {
  const appStructure = GetAppStructure();
  
  if(!appStructure.multipage) return (<>
    <AppStateProvider>
      <div className='app-base-root'>
        <HeaderContainer children={<>header </>}/>
          {appStructure.pages.map(page => <PagesBase
              multipage={false}
              Component={[<h1>{`${JSON.stringify(page)}`}</h1>]}
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
                },
              ].map(page => <Route path={`/${page.id}`} element={
                <PagesBase
                  multipage
                  Component={[<h1>{`${JSON.stringify(page)}`}</h1>]}
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
