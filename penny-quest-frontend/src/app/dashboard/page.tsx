import DashboardHeader from './components/DashboardHeader';
import FinancialCards from './components/FinancialCards';
import RecentTransactions from './components/RecentTransactions';

export default function DashboardPage() {
  return (
    <div className="p-6" style={{background: 'var(--bg-primary)', minHeight: '100vh'}}>
      <DashboardHeader />
      <FinancialCards />
      <RecentTransactions />
    </div>
  );
}