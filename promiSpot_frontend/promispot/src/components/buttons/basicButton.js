import react from 'react';
import './BasicButton.scss';

const BasicButton = (props) => {
    const { text, onClick } = props;
  
    return (
      <button className='basicButton-wrapper'
      onClick={onClick}>{text}</button>
    )
  }
  
  export default BasicButton;