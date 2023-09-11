import { ScoreScoreIconProps } from '@/assets/icons/ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function EqualIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <path
        d="M6.26724 14.5179H87.2149C90.6744 14.5179 93.4821 18.0526 93.4821 22.4021V37.2429C93.4821 41.5924 90.6744 45.1271 87.2149 45.1271H6.26724C2.80772 45.1271 0 41.5924 0 37.2429V22.4021C0 18.0526 2.80772 14.5179 6.26724 14.5179ZM6.26724 61.3968H87.2149C90.6744 61.3968 93.4821 64.9316 93.4821 69.281V84.1219C93.4821 88.4713 90.6744 92.006 87.2149 92.006H6.26724C2.80772 92.006 0 88.4713 0 84.1219V69.281C0 64.9316 2.80772 61.3968 6.26724 61.3968Z"
        fill={colorDark}
      />
      <path
        d="M12.7851 8H93.7328C97.1923 8 100 11.5347 100 15.8842V30.725C100 35.0745 97.1923 38.6092 93.7328 38.6092H12.7851C9.32559 38.6092 6.51787 35.0745 6.51787 30.725V15.8842C6.51787 11.5347 9.32559 8 12.7851 8ZM12.7851 54.8789H93.7328C97.1923 54.8789 100 58.4137 100 62.7631V77.604C100 81.9534 97.1923 85.4881 93.7328 85.4881H12.7851C9.32559 85.4881 6.51787 81.9534 6.51787 77.604V62.7631C6.51787 58.4137 9.32559 54.8789 12.7851 54.8789Z"
        fill={colorLight}
      />
    </svg>
  )
}

export { EqualIcon }
