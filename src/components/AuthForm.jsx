export default function AuthForm({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-6 mb-5">
      {children}
    </form>
  );
}
