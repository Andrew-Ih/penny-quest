export default function GridFields() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input type="text" placeholder="First Name" className="ws-input w-full" required />
      <input type="text" placeholder="Last Name" className="ws-input w-full" required />
    </div>
  );
}