import instance from ".";

const fetchLeaderboard = async () => {
  const response = await axios.get("/api/leaderboard");
  return response.data;
};

export { fetchLeaderboard };
