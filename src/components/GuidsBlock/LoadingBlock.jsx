import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
  return (
    <ContentLoader 
    className='guids-block'
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="309" rx="13" ry="13" width="261" height="38" /> 
    <rect x="0" y="352" rx="12" ry="12" width="260" height="52" /> 
    <rect x="2" y="423" rx="12" ry="12" width="111" height="33" /> 
    <rect x="143" y="422" rx="12" ry="12" width="112" height="34" /> 
    <rect x="3" y="90" rx="12" ry="12" width="262" height="208" />
    </ContentLoader>
  
);
}

export default LoadingBlock;