export default function FinancialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="ws-card p-6">
        <h3 className="text-sm font-medium mb-3" style={{color: 'var(--text-secondary)'}}>Total Balance</h3>
        <p className="text-3xl font-semibold" style={{color: 'var(--text-primary)'}}>$2,450.00</p>
        <p className="text-sm mt-2" style={{color: '#00d4aa'}}>+2.5% from last month</p>
      </div>
      
      <div className="ws-card p-6">
        <h3 className="text-sm font-medium mb-3" style={{color: 'var(--text-secondary)'}}>This Month</h3>
        <p className="text-3xl font-semibold" style={{color: 'var(--text-primary)'}}>$1,230.50</p>
        <p className="text-sm mt-2" style={{color: '#dc3545'}}>+12% from last month</p>
      </div>
      
      <div className="ws-card p-6">
        <h3 className="text-sm font-medium mb-3" style={{color: 'var(--text-secondary)'}}>Savings Goal</h3>
        <p className="text-3xl font-semibold mb-3" style={{color: 'var(--text-primary)'}}>75%</p>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="h-2 rounded-full" style={{width: '75%', background: '#00d4aa'}}></div>
        </div>
        <p className="text-sm mt-2" style={{color: 'var(--text-secondary)'}}>$750 of $1,000 goal</p>
      </div>
    </div>
  );
}