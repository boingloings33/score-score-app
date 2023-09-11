import { ScoreScoreIconProps } from '@/assets/icons/ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function MinusIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <path
        d="M10.7507 35.551H82.7113C88.6462 35.551 93.462 39.0968 93.462 43.46V63.792C93.462 68.1552 88.6462 71.701 82.7113 71.701H10.7507C4.81581 71.701 0 68.1552 0 63.792V43.46C0 39.0968 4.81581 35.551 10.7507 35.551Z"
        fill={colorDark}
      />
      <path
        d="M17.2887 29H89.2493C95.1842 29 100 32.5458 100 36.909V57.241C100 61.6042 95.1842 65.15 89.2493 65.15H17.2887C11.3538 65.15 6.53804 61.6042 6.53804 57.241V36.909C6.53804 32.5458 11.3538 29 17.2887 29Z"
        fill={colorLight}
      />
    </svg>
  )
}

export { MinusIcon }
