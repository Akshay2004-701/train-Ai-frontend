import { Star, User, Coins } from "lucide-react";

export default function Page() {
  const dummyRankings = [
    { rank: 1, username: "Vansh", contributions: 150, earnings: 2.5, reputation: 98 },
    { rank: 2, username: "Akshay", contributions: 120, earnings: 2.0, reputation: 95 },
    { rank: 3, username: "Kevin", contributions: 100, earnings: 1.8, reputation: 92 },
    { rank: 4, username: "Mukul", contributions: 90, earnings: 1.5, reputation: 88 },
    { rank: 5, username: "Anonymous", contributions: 80, earnings: 1.2, reputation: 85 },
  ];

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600">
        🏆 Rankings Leaderboard
      </h1>

      <div className="overflow-hidden rounded-lg shadow-lg bg-white">
        <table className="w-full text-left">
          <thead className="bg-gradient-to-r from-red-600 to-rose-500 text-white">
            <tr>
              <th className="p-4 text-center">🏅 Rank</th>
              <th className="p-4">👤 Username</th>
              <th className="p-4">📊 Contributions</th>
              <th className="p-4">💰 Earnings & Reputation</th>
            </tr>
          </thead>
          <tbody>
            {dummyRankings.map((user, index) => (
              <tr
                key={user.rank}
                className={`text-center ${
                  index % 2 === 0 ? "bg-red-50" : "bg-white"
                } hover:bg-rose-100 transition duration-200`}
              >
                <td className="p-4 font-semibold text-lg">{user.rank}</td>
                <td className="p-4 flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="font-semibold">{user.username}</span>
                </td>
                <td className="p-4">{user.contributions}</td>
                <td className="p-4 flex items-center justify-center">
                  <Coins className="w-5 h-5 text-yellow-500 mr-1" />
                  {user.earnings} BNB 
                  <Star className="w-5 h-5 text-rose-500 mr-2 ml-3" />
                  <span>{user.reputation} / 100</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
