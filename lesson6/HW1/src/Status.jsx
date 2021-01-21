import React from 'react'
import Online from './Online'
import Offline from './Offline'

const Status = ({isOnline}) => {

  return (
    isOnline
      ? <Online />
      : <Offline />
    );
}

export default Status;