export const formatClockDate = (d) =>
  d.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });

export const formatClockTime = (d) =>
  d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
