import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Ravshan' };

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
            <HeaderBox 
             type='greeting'
             title='Welcome'
             user={loggedIn?.firstName || 'Guest'}
             subtext='Easily manage your account and keep track of transactions instantly.'
            />

            <TotalBalanceBox 
             accounts={[]}
             totalBanks={1}
             totalCurrentBalance={1250.35}
            />
        </header>
      </div>
    </section>
  )
}

export default Home