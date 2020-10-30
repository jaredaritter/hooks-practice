import { useState, useEffect } from 'react';

const FriendStatusFunction = () => {
  const [isOnline, setIsOnline] = useState(null);
  const FriendStatus = 'online';

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }
    let status;
    if (FriendStatus === 'online') {
      status = true;
    } else {
      status = false;
    }
    handleStatusChange(status);
    return function cleanUp() {
      const status = false;
      handleStatusChange(status);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
};

export default FriendStatusFunction;
