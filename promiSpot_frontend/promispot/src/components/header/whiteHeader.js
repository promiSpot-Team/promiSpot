import react from 'react';
import './whiteHeader.scss';
import {useNavigate} from 'react-router-dom';
const WhiteHeader = (props) => {
  const navigate = useNavigate();
  const { text, onClick } = props;
  
    return (
      <div className='header-wrapper'>
        <div className='header-vector-wrapper'>

            <img
            src={ require('../../images/vector.png') } />
        </div>
        <div className='header-text-wrapper'>
            {text}
        </div>
      </div>
    )
  }
  
  export default WhiteHeader;