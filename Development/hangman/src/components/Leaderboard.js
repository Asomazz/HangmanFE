import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLeaderboard } from "../api/leaderboardApi";

const Leaderboard = () => {
  const {
    data: leaders,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: fetchLeaderboard,
    refetchInterval: 2000,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching leaderboard: {error.message}</p>;

  return (
    <div>
      <ul>
        {leaders.map((leader, index) => (
          <li key={leader.id}>
            {index + 1}. {leader.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
