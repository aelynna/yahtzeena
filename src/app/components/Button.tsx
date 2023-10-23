export default function Button(props: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={props.onClick}
      className="bg-primary hover:bg-primary-dark rounded-lg p-2 px-5 text-white transition"
    >
      {props.children}
    </button>
  );
}
