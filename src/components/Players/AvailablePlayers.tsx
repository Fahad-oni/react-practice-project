import type { IPlayer } from "../../Types/type";
import PlayerCard from "./PlayerCard";

export interface AvailablePlayersProps {
  players: IPlayer[];
}

export default function AvailablePlayers({ players }: AvailablePlayersProps) {
  
  return (
    <>
      <div className="grid grid-cols-3 gap-5 my-8 container mx-auto justify-items-center">
        {players.map((player: IPlayer, index: number) => (
          <PlayerCard player={player} key={index} />
        ))}
      </div>
    </>
  );
}