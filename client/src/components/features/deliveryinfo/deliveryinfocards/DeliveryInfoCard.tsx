interface BulletItem {
  heading: string;
  text: string;
}

interface DeliveryInfoCardProps {
  title: string;
  bullets: BulletItem[];
  boxColor?: string; 
}

const DeliveryInfoCard: React.FC<DeliveryInfoCardProps> = ({
  title,
  bullets,
  boxColor = "#8C1C32", // default color
}) => {
  return (
    <div
      className="
        w-full
        max-w-[362px]
        h-auto md:h-[191px]
        rounded-[10px]
        p-[21px] pt-[26px] pb-[26px]
        flex flex-col gap-[10px]
        bg-white shadow-md
      "
    >
    
      {/* Title with square box */}
<div className="flex items-center gap-3">
  <div
    className="w-5 h-5 rounded-sm"
    style={{ backgroundColor: boxColor }}
  ></div>
  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
</div>

{/* Bullets */}
<ul className="list-disc list-inside text-gray-600 text-sm mt-1 space-y-1">
  {bullets.map(({ heading, text }, idx) => (
    <li key={idx}>
      <span className="font-bold text-gray-800">{heading}:</span> {text}
    </li>
  ))}
</ul>

    </div>
  );
};

export default DeliveryInfoCard;
