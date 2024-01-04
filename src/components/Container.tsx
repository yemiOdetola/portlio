export default function Container({ className, ...props }: any) {
  return (
    <div
      className={`w-full mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
