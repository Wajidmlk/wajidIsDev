import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpPageStructure } from '../../../common/commonTypes';
import InformationStripe from '../../../components/informationStripe/InformationStripe';

const FooterPageZero = ({page}: {page: tpPageStructure}) => {
  const { style, pageId } = page;
  const {footer} = useAppStateContext();

  return (
    <div id={pageId} className='footerPage-000'>
      <div className="footer-header">
      <InformationStripe data={footer.data} direction="horizontal" />
      </div>
      <div className="footer-body">
        <div className="inner">
            <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src="logo.png" alt="stackfindover" />
                    </div>
                    <div className="logo-info">
                        <div className="text">Malik Wajid</div>
                        <span className="copyright">© 2022. All rights reserved.</span>
                    </div>
                </a>
            </div>
            <div className="column is-nav">
                <div className="column-title">Blog</div>
                <ul>
                    <li><a href="#">What is jQuery</a></li>
                    <li><a href="#">What is JavaScript</a></li>
                    <li><a href="#">How to make money with a blog</a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPageZero;
