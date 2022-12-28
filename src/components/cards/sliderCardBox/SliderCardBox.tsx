import React from 'react';
import { tpIconCODE } from "../../../appUtils/AppUtilities";

type tpProps = {
  title?: string,
  para?: string,
  image?: {type: "icon" | "element", element: tpIconCODE|JSX.Element},
  defaultHeight?: string,
  defaultWidth?: string,
  className?: string,
  children?: JSX.Element,
}

const SliderCardBox = ({image, para, title, className, children, defaultHeight, defaultWidth}: tpProps) => {
  return (
    <div className="slider-card-box">
      <div className="products">
        <div className="product active" product-id="1" product-color="#D18B49">
          <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Stag.svg"/></div>
          <h1 className="title">The Magnificent Stag</h1>
          <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
        <div className="product" product-id="2" product-color="#542F13">
          <div className="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/Bear.svg"/></div>
          <h1 className="title">The Courageous Bear</h1>
          <p className="description">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        </div>
      </div>
      <div className="footer"><a className="btn" id="prev" href="#" ripple-color="#666666">Prev</a><a className="btn" id="next" href="#" ripple-color="#666666">Next</a></div>
    </div>
  );
};

export default SliderCardBox;
