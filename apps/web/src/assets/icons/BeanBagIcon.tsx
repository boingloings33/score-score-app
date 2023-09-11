import { ScoreScoreIconProps } from '@/assets/icons/ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function BeanBagIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <path
        d="M83.6126 55.6376C83.7072 40.236 85.9581 30.73 85.9581 30.73C88.2878 20.893 91.9165 12.8287 88.5192 8.92414C87.499 7.75173 85.9108 6.98244 83.5565 6.80289C79.6964 6.84161 56.3078 11.0155 45.0798 10.8095C35.2647 10.63 18.6445 7.04582 8.86101 6.07937C5.08329 5.70617 0.772656 9.04737 1.14079 13.0734C2.52215 32.6294 8.10372 29.2477 6.41558 48.8355C5.91948 56.053 1.3529 82.9974 0.530745 85.6926C-0.80855 92.125 3.6581 94.4628 10.9155 93.6565C14.2988 93.1601 34.5723 89.5073 44.2384 89.8523C72.5862 90.8646 83.5845 99.9499 88.7033 92.7587C93.226 86.402 83.4671 79.0383 83.6108 55.6394L83.6126 55.6376Z"
        fill={colorDark}
      />
      <path
        d="M89.0014 50.0924C89.0961 34.6908 91.3469 25.1847 91.3469 25.1847C93.6767 15.3477 97.3054 7.28343 93.9081 3.3789C92.8878 2.20649 91.2996 1.43721 88.9453 1.25765C85.0852 1.29638 61.6966 5.47024 50.4687 5.26428C40.6536 5.08472 24.0334 1.50058 14.2499 0.534134C10.4722 0.160934 6.16151 3.50213 6.52964 7.52812C7.91101 27.0842 13.4926 23.7025 11.8044 43.2902C11.3083 50.5078 6.74176 77.4522 5.9196 80.1473C4.58031 86.5798 9.04696 88.9175 16.3044 88.1113C19.6877 87.6149 39.9612 83.9621 49.6272 84.3071C77.975 85.3193 88.9734 94.4047 94.0921 87.2135C98.6149 80.8568 88.8559 73.4931 88.9997 50.0941L89.0014 50.0924Z"
        fill={colorLight}
      />
    </svg>
  )
}

export { BeanBagIcon }
