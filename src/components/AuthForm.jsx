export default function AuthForm({ children, onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6 mb-5">
      {children}
    </form>
  );
}
