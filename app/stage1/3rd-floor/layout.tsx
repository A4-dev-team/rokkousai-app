export default function Layout({ children }: { children: React.ReactNode }) {
	return (
    <div className="h-full rounded-xl relative bg-cover bg-center">
      {children}
    </div>
  );
}
