interface ITweetButton {
  children: string;
  className: string;
}

export default function TweetButton(
  {
    children,
    className,
  }: ITweetButton,
) {
  return (
    <button
      className={`border-0 rounded-full bg-blue-400
      text-white font-bold ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}
