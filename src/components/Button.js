import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, type = 'button', className = '', disabled = false, icon: Icon, iconPosition = 'left' }) => {
  return (
    <button 
      type={type}
      className={`button ${className}`} 
      onClick={onClick} 
      disabled={disabled}
    >
      {Icon && iconPosition === 'left' && <Icon className="button-icon left" />} {/* Icon on the left */}
      <span>{label}</span> {/* Button text */}
      {Icon && iconPosition === 'right' && <Icon className="button-icon right" />} {/* Icon on the right */}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired, 
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']), 
  className: PropTypes.string, 
  disabled: PropTypes.bool, 
  icon: PropTypes.elementType, 
  iconPosition: PropTypes.oneOf(['left', 'right']) 
};

export default Button;
