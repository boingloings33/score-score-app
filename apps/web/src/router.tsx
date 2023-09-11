import { Navigate, Route, Routes } from 'react-router-dom'

import HomePage from '@/pages/HomePage'
import Login from '@/pages/Login'

import { useAuthContext } from '@/contexts/Auth'
import AppLayout from './layouts/AppLayout'
import StartGamePage from '@/pages/StartGamePage'
import StatisticsPage from '@/pages/StatisticsPage'
import SquadsPage from '@/pages/SquadsPage'
import InboxPage from '@/pages/InboxPage'
import Signup from '@/pages/Signup'
import GamePage from '@/pages/GamePage'
import UserProfilePage from '@/pages/UserProfilePage'

const AppRouter = () => {
  const { authenticated } = useAuthContext()

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="inbox" element={<InboxPage />} />

        <Route path="myaccount" element={<UserProfilePage />} />
        <Route path="user/:userId" element={<UserProfilePage />} />

        <Route path="squads" element={<SquadsPage />} />
        <Route path="start" element={<StartGamePage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="/game/:gameId" element={<GamePage />} />

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  )
}
export default AppRouter
