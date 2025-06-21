import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center px-3 py-3 rounded-lg transition-all duration-200 hover:bg-gray-50 w-full text-left"
      style={{color: 'var(--text-secondary)'}}
    >
      <span className="text-lg">🚪</span>
      <span className="ml-3 text-sm">Logout</span>
    </button>
  );
}