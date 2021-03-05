import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import checkProps from '@jam3/react-check-extra-props';

import styles from './MiniAnimation.module.scss';

function MiniAnimation({ className }) {
  return <div className={classnames(styles.MiniAnimation, className)}>MiniAnimation component</div>;
}

MiniAnimation.propTypes = checkProps({
  className: PropTypes.string
});

MiniAnimation.defaultProps = {};

export default memo(MiniAnimation);
