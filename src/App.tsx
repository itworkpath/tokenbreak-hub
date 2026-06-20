import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Hero } from '../components/Hero/Hero'
import { Team } from '../components/Team/Team'
import { Projects } from '../components/Projects/Projects'
import { Blog } from '../components/Blog/Blog'

function Home() {
  return (
    <>
      <Hero />
      <Team />
      <Projects />
      <Blog />
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
