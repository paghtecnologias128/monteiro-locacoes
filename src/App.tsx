
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import GalleryModal from './components/GalleryModal';
import ServicesModal from './components/ServicesModal';
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    })
    
    // Refresh AOS on route change
    AOS.refresh()
    
    // Handle URL hash on page load
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            })
          }
        }, 100)
      }
    }
    
    // Handle hash on page load
    handleHashChange()
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <Hero />
      <About />
      <Services />
      <ServicesModal />
      <GalleryModal />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--white)',
            color: 'var(--dark-blue)',
            border: '1px solid var(--primary-blue)',
            borderRadius: '12px',
            fontFamily: "'Open Sans', sans-serif",
          },
          success: {
            iconTheme: {
              primary: 'var(--primary-blue)',
              secondary: 'var(--white)',
            },
          },
          error: {
            iconTheme: {
              primary: 'var(--red)',
              secondary: 'var(--white)',
            },
          },
        }}
      />
    </>
  )
}

export default App
