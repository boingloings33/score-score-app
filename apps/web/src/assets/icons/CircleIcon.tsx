import { ScoreScoreIconProps } from './ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function CircleIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <path
        d="M47.2506 5.48872C21.1504 5.48872 0 26.6413 0 52.7444C0 78.8474 21.1504 100 47.2506 100C73.3509 100 94.5013 78.8474 94.5013 52.7444C94.5013 26.6413 73.3509 5.48872 47.2506 5.48872ZM47.2506 73.6225C35.715 73.6225 26.3747 64.2706 26.3747 52.7444C26.3747 41.2181 35.7256 31.8662 47.2506 31.8662C58.7757 31.8662 68.1266 41.2181 68.1266 52.7444C68.1266 64.2706 58.7757 73.6225 47.2506 73.6225Z"
        fill={colorDark}
      />
      <path
        d="M52.7494 0C26.6491 0 5.49873 21.1526 5.49873 47.2556C5.49873 73.3586 26.6491 94.5113 52.7494 94.5113C78.8496 94.5113 100 73.3586 100 47.2556C100 21.1526 78.8496 0 52.7494 0ZM52.7494 68.1338C41.2137 68.1338 31.8734 58.7819 31.8734 47.2556C31.8734 35.7294 41.2243 26.3774 52.7494 26.3774C64.2744 26.3774 73.6253 35.7294 73.6253 47.2556C73.6253 58.7819 64.2744 68.1338 52.7494 68.1338Z"
        fill={colorLight}
      />
    </svg>
  )
}

export { CircleIcon }
