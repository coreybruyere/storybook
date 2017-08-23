import React from 'react';

import PrettyPropType from './PrettyPropType';
import { TypeInfo } from './proptypes';

const OneOfType = ({ propType }) => {
  const length = propType.value.length;
  return (
    <span>
      {propType.value
        .map((value, i) => [
          <PrettyPropType propType={value} />,
          i < length - 1 ? <span> | </span> : null,
        ])
        .reduce((acc, tuple) => acc.concat(tuple), [])}
    </span>
  );
};
OneOfType.propTypes = {
  propType: TypeInfo.isRequired,
};
export default OneOfType;
