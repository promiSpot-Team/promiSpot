import react from 'react';
import './whiteHeader.scss';
import { useNavigate } from 'react-router-dom';

const WhiteHeader = (props) => {
  const navigate = useNavigate();
  const { text } = props;

  return (
    <div className="white-header-wrapper">
      <div className="white-header-vector-wrapper" onClick={() => navigate(-1)}>
        <img src={ require('../../images/vector.png') } />
      </div>
      <div className="white-header-text-wrapper">
        {text}
      </div>
    </div>
    // <div className='header-wrapper'>
    //   {/* <PreButton /> */}
    //   <div className='header-vector-wrapper' onClick={() => { console.log('asdfasdf')}} style={{
    //     border: '1px solid black'
    //   }}>

    //       <img
    //       src={ require('../../images/vector.png') }/>
    //   </div>
    //   <div className='header-text-wrapper'>
    //       {text}
    //   </div>
    // </div>
  )
  }
  
  export default WhiteHeader;