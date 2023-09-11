import {
  BaseballIcon,
  BasketballIcon,
  BeanBagIcon,
  BowlingBallIcon,
  CircleIcon,
  CrownIcon,
  CupIcon,
  EightBallIcon,
  EqualIcon,
  GolfBallIcon,
  HockeyPuckIcon,
  MinusIcon,
  PaddleIcon,
  PlusIcon,
  SoccerBallIcon,
} from '@/assets/icons'
import { ScoreScoreIconProps } from '@/assets/icons/ScoreScoreIconProps'
import { Icon } from 'shared/types/models'

interface PlayableGameIconProps extends ScoreScoreIconProps {
  icon: Icon
}

function PlayableGameIcon({ icon, size }: PlayableGameIconProps) {
  if (!Icon) {
    return <CircleIcon size="small" />
  }

  const iconMap = {
    [Icon.BASKETBALL]: <BasketballIcon size={size} />,
    [Icon.BAT]: <BaseballIcon size={size} />,
    [Icon.BEAN_BAG]: <BeanBagIcon size={size} />,
    [Icon.BOWLING_BALL]: <BowlingBallIcon size={size} />,
    [Icon.CIRCLE]: <CircleIcon size={size} />,
    [Icon.CROWN]: <CrownIcon size={size} />,
    [Icon.CUP]: <CupIcon size={size} />,
    [Icon.EIGHT_BALL]: <EightBallIcon size={size} />,
    [Icon.EQUAL]: <EqualIcon size={size} />,
    [Icon.GOLF_BALL]: <GolfBallIcon size={size} />,
    [Icon.HOCKEY_PUCK]: <HockeyPuckIcon size={size} />,
    [Icon.MINUS]: <MinusIcon size={size} />,
    [Icon.PADDLE]: <PaddleIcon size={size} />,
    [Icon.PLUS]: <PlusIcon size={size} />,
    [Icon.SOCCER_BALL]: <SoccerBallIcon size={size} />,
  }

  return iconMap[icon]
}

export default PlayableGameIcon
