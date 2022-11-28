import React from 'react';
import BubbleUI from 'react-bubble-ui';
import "react-bubble-ui/dist/index.css";

const options = {
  size: 180,
  minSize: 20,
  gutter: 8,
  provideProps: true,
  numCols: 6,
  fringeWidth: 160,
  yRadius: 130,
  xRadius: 220,
  cornerRadius: 50,
  showGuides: false,
  compact: true,
  gravitation: 5
};

const Child = ({data, key, className}: {data: string, key: string, className: string}) => (
  <div  style={{
    backgroundColor: "red",
    height: 150, width: 150,
    borderRadius: "50%",
  }} key={key}>{data}</div>
)


const TechLogoHolder = ()  => {
	
	const children = ["aaaaa","abbbb","a","a","a"].map((data, i) => <Child data={data} className="child" key={i} />);

	return (<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>)
};

export default TechLogoHolder;