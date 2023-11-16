export default function Button(props: {
  children: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
}) {
  const colour = props.disabled
    ? "bg-black text-gray-500 hover:grey-950"
    : "bg-primary text-white hover:bg-primary-dark";

  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={`rounded-lg p-2 px-5 transition ${colour}`}
    >
      {props.children}
    </button>
  );
}
