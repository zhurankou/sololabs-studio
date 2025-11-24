interface StickyNoteProps {
  title: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'purple';
  rotation?: number;
}

export function StickyNote({ title, color = 'yellow', rotation = 0 }: StickyNoteProps) {
  const colors = {
    yellow: 'bg-[#FFF59D]',
    pink: 'bg-[#F48FB1]',
    blue: 'bg-[#81D4FA]',
    green: 'bg-[#A5D6A7]',
    purple: 'bg-[#CE93D8]'
  };

  return (
    <div
      className={`${colors[color]} p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 flex items-center justify-center w-80 h-80`}
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <h3 
        className="text-gray-800 text-center break-words"
        style={{ fontFamily: 'Rock Salt, cursive', fontSize: '32px' }}
      >
        {title}
      </h3>
    </div>
  );
}