export const getTeamHoldings = (): Record<string, any> => {
  const data = sessionStorage.getItem('teamHoldings');
  return data ? JSON.parse(data) : {};
};

export const setTeamHoldings = (data: Record<string, any>) => {
  sessionStorage.setItem('teamHoldings', JSON.stringify(data));
};

export const updateTeamHoldings = (teamName: string, data: any) => {
  const all = getTeamHoldings();
  all[teamName] = { ...(all[teamName] || {}), ...data };
  setTeamHoldings(all);
};
