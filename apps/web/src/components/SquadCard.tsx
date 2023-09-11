import { Stack, Typography, Card, CardMedia } from '@mui/material'

export default function SquadCard() {
  return (
    <Card
      sx={{
        backgroundColor: 'background.paper',
        p: 4,
        boxShadow: 'none',
        border: '2px solid',
        borderColor: 'divider',
        borderRadius: '4px',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={1} direction="row" alignItems="center">
          <CardMedia
            sx={{
              width: '40px',
            }}
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6LZWlgjk2k0R2Gt_vQUnQoLo76JKBoY2JN8OBWNi9qXIn-XL55cjIsl1ia4AZV5NInk&usqp=CAU"
          />
          <Typography variant="h4">Squad Name</Typography>
        </Stack>
        <Typography variant="caption">Owner</Typography>
      </Stack>
    </Card>
  )
}
