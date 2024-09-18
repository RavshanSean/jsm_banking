import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Ravshan', lastName: 'Zakirov', email: 'ravshan1995@gmail.com' };

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

        RECENT TRANSACTIONS
      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.50 }, { currentBalance: 144.20 }]}
      />
    </section>
  )
}

export default Home