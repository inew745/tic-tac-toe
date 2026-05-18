import React from 'react';
import Square from './Square';

type BoardProps = {
  squares: (string | null)[];
  onClick: (i: number) => void;
};

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = (i: number) => (
    <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
  );

  return (
    <div className="board">
      {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
    </div>
  );
};

export default Board;