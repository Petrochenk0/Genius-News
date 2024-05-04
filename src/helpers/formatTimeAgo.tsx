export const formatTimeAgo = (dateFromProps: string) => {
  const timeNow = new Date();
  const dateFromPropsTime = new Date(dateFromProps);
  const timeDifference = (timeNow.getTime() - dateFromPropsTime.getTime()) / 1000;

  if (timeDifference < 60) {
    return `${Math.floor(timeDifference)} seconds ago`;
  }
  if (timeDifference < 3600) {
    return `${Math.floor(timeDifference / 60)} minutes ago`;
  }
  if (timeDifference <= 86400) {
    return `${Math.floor(timeDifference / 3600)} hours ago`;
  }
  if (timeDifference > 86400) {
    return `${Math.floor(timeDifference / 86400)} days ago`;
  }
};
