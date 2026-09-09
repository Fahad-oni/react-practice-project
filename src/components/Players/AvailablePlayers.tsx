import type { Dispatch, SetStateAction } from 'react';
import type { IPlayer } from '../../Types/type';
import PlayerCard from './PlayerCard';

export interface AvailablePlayersProps {
  players: IPlayer[];
  coin: number;
  setCoin: Dispatch<SetStateAction<number>>;
  selectedPlayers: IPlayer[];
  setSelectedPlayers:Dispatch<SetStateAction<IPlayer[]>>
}

export default function AvailablePlayers({
  players,
  coin,
  setCoin,
  selectedPlayers,
  setSelectedPlayers,
}: AvailablePlayersProps) {
  return (
    <>
      <div className="grid grid-cols-3 gap-5 my-8 container mx-auto justify-items-center">
        {players.map((player: IPlayer, index: number) => (
          <PlayerCard
            player={player}
            key={index}
            coin={coin}
            setCoin={setCoin}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          />
        ))}
      </div>
    </>
  );
}
