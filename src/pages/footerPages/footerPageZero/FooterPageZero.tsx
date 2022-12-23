import React from 'react';
import { useAppStateContext } from '../../../appUtils/AppState';
import { tpPageStructure } from '../../../common/commonTypes';
import InformationStripe from '../../../components/informationStripe/InformationStripe';
import {ToastWIP} from '../../../baseComponents/reactToast/ReactToast';
import ScrollAnimator from '../../../baseComponents/scrollAnimator/ScrollAnimator';
const LOGO = require("../../../common/images/logo.png");

const FooterPageZero = ({page}: {page: tpPageStructure}) => {
  const { style, pageId } = page;
  const {footer} = useAppStateContext();

  return (
    <div id={pageId} className='footerPage-000'>
      <div className="footer-header">
        <ScrollAnimator
          animateIn='animate__slideInUp'
          delay={500}
          animateOnce
        >
          <InformationStripe data={footer.data} direction="horizontal" />
        </ScrollAnimator>
      </div>
      <div className="footer-body">
        <div className="inner">
          <div className="column is-logo">
            <a href="#" className="main-logo">
              <div className="logo"><img src={LOGO} alt="stackfindover" /></div>
              <div className="logo-info">
                <div className="text">Malik Wajid</div>
                <span className="copyright">© 2022. All rights reserved.</span>
              </div>
            </a>
          </div>
          <div className="column is-nav">
            <div className="column-title">Blog</div>
              <ul>
                <li><a onClick={()=> ToastWIP()}>AI is eating the World</a></li>
                <li><a onClick={()=> ToastWIP()}>9 to 5 jobs are old ways</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPageZero;
