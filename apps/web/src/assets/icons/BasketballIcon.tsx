import { ScoreScoreIconProps } from './ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function BasketballIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <path
        d="M19.1101 17.9792L29.7514 28.5803C31.3093 30.1323 33.9241 29.8355 35.0721 27.9603C37.8691 23.3951 39.4687 18.0246 39.4687 12.2873C39.4687 10.8148 39.3624 9.36863 39.1575 7.95275C38.8615 5.90549 36.8064 4.59168 34.8178 5.17958C29.2296 6.82798 24.0569 9.44612 19.4972 12.8355C17.8235 14.0794 17.6338 16.5066 19.1101 17.9773V17.9792ZM9.66034 22.637C6.25617 27.1796 3.62998 32.3327 1.97533 37.8998C1.3852 39.8828 2.70588 41.9282 4.75901 42.2231C6.17837 42.4272 7.62998 42.5331 9.11006 42.5331C14.8653 42.5331 20.2543 40.9414 24.8444 38.1664C26.7324 37.0265 27.0342 34.4159 25.4725 32.862L14.8216 22.2514C13.3454 20.7807 10.9089 20.9697 9.66034 22.637ZM48.5769 3.21362C48.5598 3.21362 48.5408 3.21362 48.5237 3.21362C46.4459 3.21551 44.8843 5.07373 45.1765 7.12288C45.4175 8.81286 45.5408 10.5388 45.5408 12.2873C45.5408 20.2042 42.9962 27.5123 38.6869 33.4802C37.7154 34.8261 37.8805 36.6787 39.0569 37.8507L46.1632 44.9301C47.4972 46.259 49.6584 46.259 50.9905 44.9301L78.0436 17.9792C79.5142 16.5142 79.3397 14.0907 77.6736 12.8488C69.5541 6.80151 59.482 3.21362 48.575 3.21362H48.5769ZM9.10816 48.5822C7.35104 48.5822 5.62049 48.4594 3.9241 48.2193C1.86717 47.9282 0.00189753 49.4839 0 51.5539C0 51.5709 0 51.5898 0 51.6068C0 62.4726 3.60152 72.5066 9.67173 80.5955C10.9165 82.2552 13.351 82.4291 14.8216 80.9641L41.8748 54.0133C43.2087 52.6843 43.2087 50.5312 41.8748 49.2042L34.7685 42.1248C33.592 40.9528 31.7324 40.7883 30.3814 41.7561C24.3928 46.051 17.055 48.5841 9.10816 48.5841V48.5822ZM93.2296 54.9943C95.2865 55.2854 97.1499 53.7278 97.1537 51.6597C97.1537 51.6427 97.1537 51.6238 97.1537 51.6068C97.1537 40.741 93.5522 30.707 87.482 22.6181C86.2372 20.9584 83.8027 20.7845 82.3321 22.2495L55.2789 49.2004C53.945 50.5293 53.945 52.6824 55.2789 54.0095L62.3833 61.087C63.5598 62.259 65.4213 62.4235 66.7723 61.4537C72.7514 57.1626 80.1006 54.6295 88.0455 54.6295C89.8027 54.6295 91.5332 54.7524 93.2296 54.9924V54.9943ZM88.0455 60.6805C82.2903 60.6805 76.9013 62.2722 72.3112 65.0473C70.4231 66.1872 70.1214 68.7977 71.6831 70.3516L82.3378 80.966C83.814 82.4367 86.2467 82.2476 87.4971 80.5841C90.8842 76.0775 93.5085 70.9584 95.1594 65.4197C95.7457 63.4518 94.4421 61.4159 92.4042 61.1059C90.9051 60.879 89.2486 60.6786 88.0493 60.6786L88.0455 60.6805ZM64.5351 71.7769C60.2467 76.9943 57.685 83.6673 57.685 90.9263C57.685 92.3989 57.7913 93.845 57.9962 95.2609C58.2922 97.3081 60.3473 98.6219 62.3359 98.034C67.9241 96.3857 73.0968 93.7675 77.6565 90.3781C79.3302 89.1342 79.5199 86.707 78.0436 85.2363L64.5351 71.7788V71.7769ZM58.0968 65.363L50.9905 58.2836C49.6565 56.9546 47.4953 56.9546 46.1632 58.2836L19.1063 85.2382C17.6357 86.7032 17.8102 89.1248 19.4744 90.3667C27.5806 96.4121 37.6546 100 48.5769 100C48.5939 100 48.6129 100 48.63 100C50.7078 99.9981 52.2695 98.1399 51.9772 96.0908C51.7362 94.4008 51.6129 92.6749 51.6129 90.9263C51.6129 83.0095 54.1575 75.7013 58.4668 69.7335C59.4383 68.3875 59.2732 66.535 58.0968 65.363Z"
        fill={colorDark}
      />
      <path
        d="M21.9564 14.7656L32.5977 25.3667C34.1556 26.9187 36.7704 26.6219 37.9184 24.7467C40.7154 20.1815 42.315 14.811 42.315 9.07372C42.315 7.60113 42.2087 6.15501 42.0038 4.73913C41.7078 2.69187 39.6528 1.37806 37.6641 1.96597C32.0759 3.61436 26.9032 6.23251 22.3435 9.62192C20.6698 10.8658 20.4801 13.293 21.9564 14.7637V14.7656ZM12.5066 19.4234C9.10247 23.966 6.47628 29.1191 4.82163 34.6862C4.2315 36.6692 5.55218 38.7146 7.60531 39.0095C9.02467 39.2136 10.4763 39.3195 11.9564 39.3195C17.7116 39.3195 23.1006 37.7278 27.6907 34.9527C29.5787 33.8129 29.8805 31.2023 28.3188 29.6484L17.6679 19.0378C16.1917 17.5671 13.7552 17.7561 12.5066 19.4234ZM51.4231 0C51.4061 0 51.3871 0 51.37 0C49.2922 0.00189036 47.7305 1.86011 48.0228 3.90926C48.2638 5.59924 48.3871 7.32514 48.3871 9.07372C48.3871 16.9905 45.8425 24.2987 41.5332 30.2666C40.5617 31.6125 40.7268 33.465 41.9032 34.6371L49.0095 41.7164C50.3435 43.0454 52.5047 43.0454 53.8368 41.7164L80.8899 14.7656C82.3605 13.3006 82.186 10.8771 80.5199 9.63516C72.4004 3.5879 62.3283 0 51.4212 0H51.4231ZM11.9545 45.3686C10.1973 45.3686 8.46679 45.2458 6.7704 45.0057C4.71347 44.7146 2.8501 46.2722 2.8463 48.3403C2.8463 48.3573 2.8463 48.3762 2.8463 48.3932C2.8463 59.259 6.44782 69.293 12.518 77.3819C13.7628 79.0416 16.1973 79.2155 17.6679 77.7505L44.7211 50.7996C46.055 49.4707 46.055 47.3176 44.7211 45.9905L37.6148 38.9112C36.4383 37.7391 34.5787 37.5747 33.2277 38.5425C27.2391 42.8374 19.9013 45.3705 11.9545 45.3705V45.3686ZM96.0759 51.7807C98.1328 52.0718 99.9962 50.5142 100 48.4461C100 48.4291 100 48.4102 100 48.3932C100 37.5274 96.3985 27.4934 90.3283 19.4045C89.0835 17.7448 86.649 17.5709 85.1784 19.0359L58.1252 45.9868C56.7913 47.3157 56.7913 49.4688 58.1252 50.7959L65.2296 57.8733C66.4061 59.0454 68.2676 59.2098 69.6186 58.2401C75.5977 53.949 82.9469 51.4159 90.8918 51.4159C92.649 51.4159 94.3795 51.5387 96.0759 51.7788V51.7807ZM90.8918 57.4669C85.1366 57.4669 79.7476 59.0586 75.1575 61.8337C73.2694 62.9735 72.9677 65.5841 74.5294 67.138L85.1841 77.7524C86.6603 79.2231 89.093 79.034 90.3434 77.3705C93.7305 72.8639 96.3548 67.7448 98.0057 62.2061C98.592 60.2382 97.2884 58.2023 95.2505 57.8922C93.7514 57.6654 92.0949 57.465 90.8956 57.465L90.8918 57.4669ZM67.3814 68.5633C63.093 73.7807 60.5313 80.4537 60.5313 87.7127C60.5313 89.1852 60.6376 90.6314 60.8425 92.0473C61.1385 94.0945 63.1935 95.4083 65.1822 94.8204C70.7704 93.172 75.9431 90.5539 80.5028 87.1645C82.1765 85.9206 82.3662 83.4934 80.8899 82.0227L67.3814 68.5652V68.5633ZM60.9431 62.1493L53.8368 55.07C52.5028 53.741 50.3416 53.741 49.0095 55.07L21.9526 82.0246C20.482 83.4896 20.6565 85.9112 22.3207 87.1531C30.4269 93.1985 40.5009 96.7864 51.4231 96.7864C51.4402 96.7864 51.4592 96.7864 51.4763 96.7864C53.5541 96.7845 55.1157 94.9263 54.8235 92.8771C54.5825 91.1871 54.4592 89.4612 54.4592 87.7127C54.4592 79.7958 57.0038 72.4877 61.3131 66.5198C62.2846 65.1739 62.1195 63.3214 60.9431 62.1493Z"
        fill={colorLight}
      />
    </svg>
  )
}

export { BasketballIcon }
