import { Navigate, Route, Routes } from 'react-router-dom'
import AuthPage from './components/AuthPage/AuthPage'
import Login from './components/AuthPage/Login'
import Signup from './components/AuthPage/Signup'
import Home from './components/HomePage/Home'
import ShowCase from './components/Showcase/ShowCase'
import StorefrontLayout from './components/HomePage/StorefrontLayout'
import AboutUs from './components/Reusable/AboutUs'
import Profile from './components/Profile/Profile'
import ProfileSection from './components/Profile/ProfileSection'
import profileSections from './components/Profile/profileSections'
import CommonQuestions from './components/HomePage/CommonQuestions'
import ContactUs from './components/HomePage/ContactUs'
import Melted from './components/HomePage/Melted'
import Articles from './components/Article/Articles.jsx'
import ArticleDetail from './components/Article/ArticleDetail'
import Cart from './components/Cart/Cart'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<StorefrontLayout />}>
        <Route index element={<Home />} />
        <Route path="showcase" element={<ShowCase />} />
        <Route path="melted" element={<Melted />} />
        <Route path="cart" element={<Cart />} />
        <Route path="articles" element={<Articles />} />
        <Route path="articles/:slug" element={<ArticleDetail />} />
        <Route path="common-questions" element={<CommonQuestions />} />
        <Route path="about" element={<AboutUs standalone />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
      <Route path="auth" element={<AuthPage />} />
      <Route path="profile" element={<Profile />}>
        {profileSections.map((section) => (
          <Route
            key={section.path}
            index={section.path === ''}
            path={section.path || undefined}
            element={<ProfileSection key={section.path} section={section} />}
          />
        ))}
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={<Navigate to="/ghizilchi/auth" replace />} />
    </Routes>
  )
}

export default function App() {
  return <AppRoutes />
}
