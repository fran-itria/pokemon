
export default function Landing({ init, setInit }) {

    const startApp = () => setInit(!init)

    return (
        <div>
            <h1>LANDING PAGE</h1>
            <button onClick={() => startApp()}>Iniciar</button>
        </div>
    )
}