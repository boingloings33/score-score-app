import { ScoreScoreIconProps } from '@/assets/icons/ScoreScoreIconProps'
import { useTheme } from '@mui/material'

function CupIcon({ size = 'large' }: ScoreScoreIconProps) {
  const theme = useTheme()
  const colorLight = theme.palette.primary.light
  const colorDark = theme.palette.primary.darker

  const width = size === 'small' ? 30 : size === 'large' ? 150 : 100

  return (
    <svg width={width} height={width} viewBox="0 0 100 100">
      <g fill={colorDark}>
        <path d="M70.7532 43.2272C72.3444 43.2272 73.0246 43.7027 72.6458 45.6369C71.8005 49.7194 69.694 69.9061 68.8117 76.4406C68.4564 78.6479 67.6752 79.3427 65.3869 79.2735C56.3044 79.0004 32.9448 79.282 30.3298 79.2988C28.4625 79.3106 27.1171 78.2786 27.011 76.476C26.7686 72.3563 23.608 46.7752 23.47 45.2963C23.4952 43.5897 24.6301 43.2626 25.9822 43.2626C33.3304 43.2457 62.9268 43.2626 70.7532 43.2272Z" />
        <path d="M66.3128 83.4151C67.345 83.4286 67.7272 83.6832 67.5824 84.7152C67.2877 86.818 66.4677 95.8785 66.035 98.2815C65.7437 99.9004 65.0651 100.165 63.9134 100.165C53.3862 100.163 42.8589 100.16 32.3317 100.155C31.0992 100.155 30.4172 99.7182 30.0047 97.8667C29.7353 94.828 28.7991 85.9917 28.6155 84.1351C28.5229 83.2026 29.188 83.4505 29.6528 83.4505C35.7852 83.4539 60.2224 83.3375 66.3128 83.4168V83.4151Z" />
        <path d="M74.72 32.7012C74.8396 32.6911 75.4575 32.6169 75.7909 32.9778C75.9711 33.1734 76.0267 33.4904 75.9863 33.9879C75.9038 35.025 75.8633 36.062 75.7219 37.0991C75.6428 37.6826 75.471 38.089 75.1713 38.3503C74.6864 38.7736 74.0196 38.7331 73.8445 38.7264C72.5715 38.6775 51.5659 38.6977 22.5925 38.7348C21.658 38.804 21.1478 38.5122 20.9104 38.3369C20.1695 37.7871 20.22 36.3892 20.22 33.595C20.22 32.6844 21.1444 32.6641 21.3801 32.6911C51.8471 32.767 73.6256 32.7923 74.72 32.6996V32.7012Z" />
        <path d="M47.838 19.4908C44.403 19.4908 40.9663 19.4806 37.5314 19.4992C36.8696 19.5026 36.2702 19.4756 36.2045 18.6459C35.9991 16.0153 35.7499 13.4285 36.9622 10.8755C39.4711 5.05771 46.3242 2.23822 52.1991 4.4692C57.6125 6.24487 61.3607 12.8872 59.7224 18.4284C59.4664 19.2581 59.1027 19.5127 58.2726 19.5043C54.7938 19.4655 51.3151 19.4874 47.8363 19.4874V19.4908H47.838Z" />
        <path d="M47.8786 28.4383C38.6142 28.4383 29.3516 28.4417 20.0872 28.4349C18.3765 28.4349 17.5126 27.7503 17.4706 26.4181C17.4217 24.8988 18.2569 24.005 19.8212 23.9831C38.4341 23.9898 57.0503 23.9898 75.6632 23.9932C76.2188 23.9932 76.7762 23.9207 77.3184 24.2091C78.2445 24.7032 78.8793 25.435 78.7227 26.4788C78.5627 27.5429 77.8269 28.2494 76.7105 28.4181C67.1077 28.4872 57.4864 28.4181 47.8769 28.4383H47.8786Z" />
        <path d="M78.3335 6.92784C80.9721 7.21619 83.6645 7.45733 85.6312 9.54666C87.2494 11.265 86.271 14.3476 84.1242 15.017C81.3493 15.8804 78.6754 15.3846 76.0469 14.3054C74.8295 13.8063 73.6829 13.1705 72.4284 12.7253C69.7545 11.7743 67.3265 12.3257 64.9658 13.5533C64.336 13.8805 63.654 13.9445 63.0327 14.2363C62.6252 14.4268 62.2211 14.2987 62.0511 13.8788C61.9079 13.5246 62.1083 13.2093 62.4282 12.9951C65.6005 10.8653 68.9311 8.99861 72.5985 7.92613C74.4355 7.38988 76.3382 6.82497 78.3352 6.92784H78.3335Z" />
        <path d="M16.7414 14.0002C21.4729 14.3509 25.5056 16.3694 29.4222 18.9006C29.8095 19.1282 30.0603 19.4571 29.833 19.8533C29.6327 20.2007 29.2201 20.0827 28.8884 19.9511C28.0936 19.6358 27.2602 19.3896 26.5159 18.9815C21.8012 16.3812 18.0379 21.8499 13.3098 21.0371C10.6022 20.6442 9.77543 19.4773 10.0499 17.1738C10.1829 16.0608 11.0484 15.6308 11.7708 15.2902C13.3182 14.56 14.9296 13.8484 16.7414 14.0019V14.0002Z" />
      </g>
      <g fill={colorLight}>
        <path d="M73.4237 39.6859C75.0149 39.6859 75.6952 40.1614 75.3163 42.0956C74.471 46.1782 72.3646 66.3649 71.4823 72.8993C71.127 75.1066 70.3457 75.8014 68.0574 75.7323C58.9749 75.4591 35.6153 75.7407 33.0004 75.7576C31.133 75.7694 29.7877 74.7373 29.6816 72.9347C29.4391 68.8151 26.2786 43.2339 26.1405 41.755C26.1658 40.0485 27.3007 39.7213 28.6528 39.7213C36.0009 39.7044 65.5973 39.7213 73.4237 39.6859Z" />
        <path d="M68.9833 79.8739C70.0155 79.8873 70.3977 80.142 70.2529 81.174C69.9583 83.2768 69.1382 92.3373 68.7055 94.7403C68.4142 96.3591 67.7356 96.6239 66.5839 96.6239C56.0567 96.6222 45.5295 96.6188 35.0023 96.6138C33.7697 96.6138 33.0878 96.177 32.6752 94.3255C32.4058 91.2867 31.4696 82.4505 31.2861 80.5939C31.1935 79.6614 31.8586 79.9093 32.3233 79.9093C38.4558 79.9126 62.893 79.7963 68.9833 79.8755V79.8739Z" />
        <path d="M77.3908 29.16C77.5104 29.1499 78.1283 29.0757 78.4617 29.4366C78.6419 29.6322 78.6974 29.9492 78.657 30.4467C78.5745 31.4837 78.5341 32.5208 78.3927 33.5579C78.3135 34.1414 78.1418 34.5477 77.8421 34.8091C77.3571 35.2324 76.6903 35.1919 76.5152 35.1852C75.2423 35.1363 54.2367 35.1565 25.2633 35.1936C24.3287 35.2627 23.8186 34.971 23.5811 34.7956C22.8403 34.2459 22.8908 32.848 22.8908 30.0538C22.8908 29.1432 23.8152 29.1229 24.0509 29.1499C54.5179 29.2258 76.2963 29.2511 77.3908 29.1583V29.16Z" />
        <path d="M50.5085 15.9495C47.0735 15.9495 43.6369 15.9394 40.2019 15.958C39.5402 15.9613 38.9407 15.9344 38.875 15.1047C38.6696 12.4741 38.4204 9.88729 39.6328 7.33423C42.1417 1.5165 48.9948 -1.303 54.8696 0.927977C60.2831 2.70365 64.0313 9.34599 62.3929 14.8872C62.137 15.7168 61.7733 15.9715 60.9431 15.963C57.4644 15.9243 53.9856 15.9462 50.5068 15.9462V15.9495H50.5085Z" />
        <path d="M50.5489 24.897C41.2845 24.897 32.0219 24.9004 22.7575 24.8937C21.0468 24.8937 20.183 24.209 20.1409 22.8768C20.092 21.3575 20.9272 20.4637 22.4915 20.4418C41.1044 20.4486 59.7206 20.4486 78.3335 20.4519C78.8892 20.4519 79.4465 20.3794 79.9887 20.6678C80.9148 21.1619 81.5496 21.8937 81.393 22.9376C81.233 24.0016 80.4972 24.7082 79.3809 24.8768C69.7781 24.9459 60.1567 24.8768 50.5472 24.897H50.5489Z" />
        <path d="M81.0041 3.38662C83.6426 3.67497 86.3351 3.91611 88.3018 6.00544C89.9199 7.72378 88.9416 10.8063 86.7947 11.4758C84.0198 12.3392 81.3459 11.8434 78.7175 10.7642C77.5001 10.265 76.3534 9.6293 75.099 9.18412C72.4251 8.23304 69.997 8.78446 67.6363 10.0121C67.0065 10.3392 66.3246 10.4033 65.7033 10.695C65.2958 10.8856 64.8917 10.7574 64.7216 10.3375C64.5785 9.98343 64.7789 9.66809 65.0988 9.45393C68.2711 7.32413 71.6017 5.45739 75.269 4.38491C77.1061 3.84866 79.0088 3.28375 81.0058 3.38662H81.0041Z" />
        <path d="M19.4135 10.459C24.145 10.8097 28.1778 12.8282 32.0943 15.3594C32.4816 15.587 32.7325 15.9158 32.5052 16.3121C32.3048 16.6595 31.8922 16.5415 31.5605 16.4099C30.7658 16.0946 29.9323 15.8484 29.188 15.4403C24.4734 12.84 20.71 18.3087 15.9819 17.4959C13.2743 17.103 12.4475 15.9361 12.722 13.6326C12.855 12.5196 13.7205 12.0896 14.4429 11.749C15.9903 11.0188 17.6017 10.3072 19.4135 10.4607V10.459Z" />
      </g>
    </svg>
  )
}

export { CupIcon }