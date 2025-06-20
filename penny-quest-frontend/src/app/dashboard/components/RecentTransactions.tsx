export default function RecentTransactions() {
  return (
    <div className="ws-card">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold" style={{color: 'var(--text-primary)'}}>Recent activity</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{background: 'var(--bg-primary)'}}>
                <span className="text-lg">☕</span>
              </div>
              <div>
                <p className="font-medium text-sm" style={{color: 'var(--text-primary)'}}>Coffee Shop</p>
                <p className="text-xs" style={{color: 'var(--text-secondary)'}}>Today, 2:30 PM</p>
              </div>
            </div>
            <p className="font-semibold text-sm" style={{color: '#dc3545'}}>-$4.50</p>
          </div>
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{background: 'var(--bg-primary)'}}>
                <span className="text-lg">💰</span>
              </div>
              <div>
                <p className="font-medium text-sm" style={{color: 'var(--text-primary)'}}>Salary Deposit</p>
                <p className="text-xs" style={{color: 'var(--text-secondary)'}}>Yesterday</p>
              </div>
            </div>
            <p className="font-semibold text-sm" style={{color: '#00d4aa'}}>+$2,500.00</p>
          </div>
        </div>
      </div>
    </div>
  );
}