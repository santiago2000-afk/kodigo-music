export default function About() {
    return (
        <main className="about">
            <section className="about-header">
                <h1>ℹ️ Acerca de Kodigo Music</h1>
                <p>
                    Kodigo Music es una <strong>Single Page Application (SPA)</strong> inspirada en <strong>Spotify</strong>. Permite explorar música, crear listas y disfrutar de una experiencia moderna usando JavaScript Vanilla.
                </p>
            </section>

            <section className="about-features">
                <div className="feature">
                    <span className="icon">🎵</span>
                    <h3>Explora Canciones</h3>
                    <p>Busca y descubre música de diferentes géneros y artistas.</p>
                </div>
                <div className="feature">
                    <span className="icon">📑</span>
                    <h3>Listas Personalizadas</h3>
                    <p>Crea y administra tus propias playlists, similar a Spotify.</p>
                </div>
            </section>

            <section className="about-footer">
                <p>
                    Kodigo Music toma como referencia la experiencia de usuario de <strong>Spotify</strong> para mostrar cómo construir aplicaciones musicales modernas con JavaScript Vanilla.
                </p>
            </section>
        </main>
    );
}
