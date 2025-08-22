export default function MusicCard({ song }) {
  return (
    <div className="card">
      <img
        src={song.cover || "/default-cover.png"}
        alt={song.title}
        className="cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/default-cover.png";
        }}
      />
      <div className="card-info">
        <h3>{song.title}</h3>
        <p>{song.artist}</p>
      </div>
    </div>
  );
}