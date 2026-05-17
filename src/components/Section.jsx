export default function Section({ id, className = "", children }) {
  return (
    <section
      className={`relative flex min-h-screen items-center py-24 md:py-32 ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}
