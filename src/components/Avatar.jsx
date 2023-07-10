export default function Avatar({ className, avatar }) {
  return (
    <div
      className={`${className} avatar rounded-circle bg-secondary`}
      role="img"
      style={!!avatar ? { backgroundImage: `url(${avatar})` } : null}
      alt="Аватар"
    ></div>
  );
}
