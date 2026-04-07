import backgroundVideo from './assets/background.mp4'
import avatarImage from './assets/avatar.jpg'
import './App.css'

const featuredProjects = [
  {
    title: 'Visual Reel',
    subtitle: '动画剪辑 / 氛围包装 / 个人混剪',
    summary: '把插画、UI、动态字幕和节奏点融合成一支完整展示片，适合放在首页第一屏。',
    accent: '视频作品',
  },
  {
    title: 'Profile System',
    subtitle: '个人页设计 / 信息编排 / 交互样式',
    summary: '用偏游戏资料卡的方式组织介绍、标签、最近动态和能力信息，让页面更有“角色主页”感。',
    accent: '页面设计',
  },
]

const tags = ['C/C++', 'UE5', '游戏客户端']
const emailAddress = 'yourname@example.com'
const phoneNumber = '+61 400 000 000'
const githubUrl = 'https://github.com/chengjiubinggao'
const currentFocus = [
  '持续补强 C/C++ 基础和工程实现能力',
  '熟悉 UE5 工作流，练习从功能到表现的完整开发过程',
  '整理项目代码和个人作品，逐步完善自己的展示页',
]

function App() {
  return (
    <main className="home">
      <video
        className="stage-video"
        src={backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
      />
      <section className="content-panel">
        <div className="profile-layout">
          <section className="main-column">
            <header className="hero-card">
              <div className="avatar-shell">
                <img src={avatarImage} alt="profile avatar" className="avatar-image" />
              </div>
              <div className="hero-copy">
                <p className="eyebrow">PERSONAL SHOWCASE</p>
                <h1>橙酒冰糕</h1>
                <p className="hero-role">UNSW IT</p>
                <p className="hero-intro">
                  The sooner you start to code, the longer the program will take.
                </p>
                <div className="tag-row">
                  {tags.map((tag) => (
                    <span key={tag} className="tag-chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>

            <section className="panel projects-panel">
              <div className="section-heading">
                <p className="panel-title">我的项目</p>
                <span className="section-meta">最近更新 2 项</span>
              </div>
              <div className="project-list">
                {featuredProjects.map((project) => (
                  <article key={project.title} className="project-card">
                    <div className="project-cover">
                      <span>{project.accent}</span>
                    </div>
                    <div className="project-copy">
                      <h2>{project.title}</h2>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-summary">{project.summary}</p>
                    </div>
                  </article>
                ))}
              </div>
              <a
                className="project-footer-link"
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <span>查看我的 GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>
            </section>

            <section className="panel focus-panel">
              <div className="section-heading">
                <p className="panel-title">Working</p>
                <span className="section-meta">持续推进中</span>
              </div>
              <div className="focus-list">
                {currentFocus.map((item) => (
                  <div key={item} className="focus-item">
                    <span className="focus-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <aside className="side-column">
            <section className="side-card level-card">
              <div className="level-badge">0</div>
              <div>
                <p className="side-title">开发者等级</p>
                <p className="side-value">新手</p>
                <p className="side-note">努力学习中⋯</p>
              </div>
            </section>

            <section className="side-card">
              <p className="side-title">在线状态</p>
              <div className="sleep-status" aria-label="睡觉中">
                <span className="sleep-moon" aria-hidden="true">
                  🌙
                </span>
                <span className="status-online">睡觉中</span>
                <span className="sleep-zzz" aria-hidden="true">
                  <span>z</span>
                  <span>Z</span>
                  <span>z</span>
                </span>
              </div>
              <p className="side-note">最近一次更新：3/31/2026</p>
            </section>

            <section className="side-card">
              <p className="side-title">联系方式</p>
              <div className="contact-list">
                <a
                  className="contact-link"
                  href={`mailto:${emailAddress}`}
                >
                  <span className="contact-icon" aria-hidden="true">
                    @
                  </span>
                  <span className="contact-copy">
                    <strong>邮箱</strong>
                    <span>{emailAddress}</span>
                  </span>
                </a>
                <a
                  className="contact-link"
                  href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                >
                  <span className="contact-icon" aria-hidden="true">
                    ☎
                  </span>
                  <span className="contact-copy">
                    <strong>电话</strong>
                    <span>{phoneNumber}</span>
                  </span>
                </a>
              </div>
            </section>

          </aside>
        </div>
      </section>
    </main>
  )
}

export default App
