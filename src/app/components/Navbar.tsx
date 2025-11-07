'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const router = useRouter()
  const { user, signOut } = useAuthStore()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // 🔸 Efek blur berubah saat scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    router.push('/')
  }

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        fixed top-4 left-1/2 -translate-x-1/2 z-50
        flex items-center justify-between
        w-[92%] sm:w-[90%] max-w-6xl
        px-6 sm:px-8 py-2
        rounded-full backdrop-blur-md border
        ${isScrolled ? 'bg-[#1C1815]/90 border-[#CBB89D]/30 shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-[#1C1815]/70 border-[#CBB89D]/20'}
      `}
    >
      {/* === LEFT: BRAND === */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/736x/a7/b8/19/a7b819a336f31b815b4e1ead0f5be9cb.jpg"
          alt="Warlok Logo"
          className="w-9 h-9 rounded-md border border-[#CBB89D]/30"
        />
        <div className="leading-tight hidden xs:block">
          <h1 className="font-semibold text-[#F5F1E7] text-base">Warlok</h1>
          <p className="text-xs text-[#CBB89D]/70 -mt-1">Dari Barista Lokal</p>
        </div>
      </div>

      {/* === CENTER: DESKTOP NAV LINKS === */}
      <div className="hidden lg:flex items-center gap-8 text-sm text-[#F5F1E7] font-medium">
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About Us' },
          { href: '/menu', label: 'Menu' },
          { href: '/blogs', label: 'Blogs' },
          { href: '/teams', label: 'Team' },
        ].map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className="hover:text-[#CBB89D] transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* === RIGHT: SIGN IN BUTTON (DESKTOP) === */}
      <div className="hidden sm:flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm font-medium text-[#EAE4D9] hidden md:inline">
              {user.name || user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="bg-[#CBB89D] text-[#1C1815] px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-[#E5D8BF] transition-all duration-300"
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            onClick={() => router.push('/login')}
            className="border border-[#CBB89D]/50 text-[#CBB89D] px-5 py-1.5 rounded-full text-sm font-semibold hover:bg-[#CBB89D]/10 transition-all duration-300 whitespace-nowrap"
          >
            Sign In
          </button>
        )}
      </div>

      {/* === HAMBURGER MENU (MOBILE/TABLET) === */}
      <button
        className="block lg:hidden text-[#CBB89D] hover:text-[#E5D8BF] transition"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* === MOBILE MENU DROPDOWN === */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-14 left-0 w-full bg-[#1C1815]/95 border-t border-[#CBB89D]/30 rounded-2xl shadow-lg backdrop-blur-xl p-6 flex flex-col gap-5 text-[#F5F1E7] font-medium text-sm"
          >
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
              { href: '/menu', label: 'Menu' },
              { href: '/blogs', label: 'Blogs' },
              { href: '/teams', label: 'Team' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="hover:text-[#CBB89D] transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Sign In / Out */}
            {user ? (
              <button
                onClick={handleSignOut}
                className="mt-2 bg-[#CBB89D] text-[#1C1815] px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#E5D8BF] transition-all"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenuOpen(false)
                  router.push('/login')
                }}
                className="mt-2 border border-[#CBB89D]/50 text-[#CBB89D] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#CBB89D]/10 transition-all"
              >
                Sign In
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
