import { FaUserAlt } from "react-icons/fa";
import type { IPlayer } from "../../Types/type"

export interface PlayerCardProps {
  player: IPlayer
}

export default function PlayerCard({ player }: PlayerCardProps) {
  
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Player Image */}
      <div className="h-64 w-full overflow-hidden bg-gray-100">
        <img
          src={player.playerimage}
          alt={player.playername}
          className="h-50% w-full bg-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Player Information */}
      <div className="p-5">
        {/* Name & Type */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex gap-2 items-center">
              
              <FaUserAlt />
              {player.playername}
            </h2>

            <p className="text-sm text-gray-500">{player.origin}</p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {player.playertype}
          </span>
        </div>

        {/* Playing Style */}
        <div className="mb-4 space-y-2 rounded-xl bg-gray-50 p-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Batting Style</span>

            <span className="text-sm font-semibold text-gray-800">
              {player.battingstyle}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Bowling Style</span>

            <span className="text-sm font-semibold text-gray-800">
              {player.bollingstyle}
            </span>
          </div>
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Price</p>

            <p className="text-2xl font-bold text-green-600">${player.price}</p>
          </div>

          <button className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700 active:scale-95">
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
}