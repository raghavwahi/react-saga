export const calculatePreprationTime = (preprationTime) => {
  const hour_count = (preprationTime - (preprationTime % 60)) / 60;

  const hour_message = hour_count
    ? `${hour_count} ${hour_count === 1 ? "hour" : "hours"}`
    : "";

  const minute_count = preprationTime % 60;
  let minute_message = "";

  if (minute_count) {
    minute_message = `${minute_count} ${
      minute_count === 1 ? "minute" : "minutes"
    }`;

    minute_message = (hour_count ? ` and ` : "") + minute_message;
  }

  return `${hour_message}${minute_message}`;
};
