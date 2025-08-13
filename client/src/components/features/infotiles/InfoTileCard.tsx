import { IconType } from "react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface InfoTileCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const InfoTileCard: React.FC<InfoTileCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <Card
      className="w-full 
                 max-w-[352px] sm:max-w-[300px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[352px]
                 h-auto sm:h-[280px] md:h-[260px] lg:h-[290px] xl:h-[309px]
                 flex flex-col items-center justify-center text-center px-4"
    >
      <CardHeader className="pb-2 flex flex-col items-center">
        <Icon className="text-3xl sm:text-3xl md:text-4xl text-muted-foreground mb-2" />
        <CardTitle className="text-lg sm:text-lg md:text-xl whitespace-nowrap overflow-hidden text-ellipsis">
{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default InfoTileCard;