import { FiArrowRight } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {useGithubUser} from '../Api/UserDetailApi.jsx';
function HeroSection() {
    const {user,loading,error}= useGithubUser();
        if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}
  return (

    <section
      id="home"
      className="mx-auto grid min-h-[calc(100vh-5rem)] w-[min(1120px,calc(100%-1.5rem))] items-center gap-10 py-14 md:grid-cols-[1.05fr_0.95fr] md:py-20"
    >

      <div>
        <span className="mb-5 inline-flex rounded-full border border-borderSoft bg-surface/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-soft">
          MERN Stack Developer
        </span>

        <h1 className="max-w-[11ch] font-display text-5xl font-semibold leading-[0.98] text-textMain sm:text-6xl lg:text-7xl">
          Modern web experiences built with clean code and thoughtful UI.
        </h1>

        <p className="mt-6 max-w-2xl text-base text-textSoft md:text-lg">
          Im <span>{user?.username}</span>. {user?.bio}
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-deep"
          >
            View Projects <FiArrowRight />
          </a>

          <a
            href="#about"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-borderSoft bg-surface px-6 py-3 text-sm font-semibold text-textMain shadow-soft"
          >
            About Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          {[
            { icon: <FaGithub />, href: 'https://github.com' },
            { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
            { icon: <HiOutlineMail />, href: 'mailto:suhail@example.com' },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={
                item.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-borderSoft bg-surface text-lg text-textMain shadow-soft"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden rounded-[2rem] border border-borderSoft bg-surface p-4 shadow-deep">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />

          <img
            src={user.avatarUrl}
            alt="Suhail profile"
            className="relative aspect-[4/4.7] w-full rounded-[1.4rem] object-cover"
          />

          <div className="absolute bottom-8 left-8 rounded-full border border-white/15 bg-[#181311]/75 px-4 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white backdrop-blur-md">
            React • AWS • WordPress
          </div>

          <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-white/15 bg-white/10 shadow-soft backdrop-blur-md" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection