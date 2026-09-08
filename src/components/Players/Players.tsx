import { use, useState } from 'react';
import type { IPlayer } from '../../Types/type';
import AvailablePlayers from './AvailablePlayers';

export interface PlayersProps {
  PlayerPromise: Promise<IPlayer[]>;
}

export default function Players({ PlayerPromise }: PlayersProps) {
  const players = use(PlayerPromise);

  const [selectedBtn, setSlectedBtn] = useState('available');
  const handleBtn = (type: 'available' | 'selected') => {
    setSlectedBtn(type);
  };
  return (
    <>
      <div className="flex justify-between container mx-auto my-12">
        <h2 className="text-2xl font-bold">Available Players</h2>

        <div>
          <button
            onClick={() => handleBtn('available')}
            className={`btn ${selectedBtn === 'available' ? 'btn-success' : ''}  rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => handleBtn('selected')}
            className={`btn rounded-l-none ${selectedBtn === 'selected' ? 'btn-success' : ''}`}
          >
            Selected
          </button>
        </div>
      </div>
      <AvailablePlayers players={players} />
    </>
  );
}
