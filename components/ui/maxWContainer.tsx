export default function MaxWContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-xl p-4 border-l border-r border-dashed">
        <main>{children}</main>
      </div>
    </div>
  );
}
