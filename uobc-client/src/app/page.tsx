import ShuffleHero from '@/components/ShuffleHero'
import RegistrationHero from '@/components/RegistrationHero'
import Footer from '@/components/Footer'



export default function Home() {
  return (
    <div>
      <ShuffleHero/>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <RegistrationHero/>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Footer/>
    </div>
  )
}
