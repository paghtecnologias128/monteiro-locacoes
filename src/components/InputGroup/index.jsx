import React from 'react';
import PropTypes from 'prop-types';
import { InputGroupContainer } from './style';

const InputGroup = ({ children }) => {
  return <InputGroupContainer>{children}</InputGroupContainer>;
};

InputGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputGroup;
