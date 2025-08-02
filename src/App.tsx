import { BackgroundProvider, useBackground } from "./BackgroundContext";
import APIColours from "./APIColours";
// import "./css/index.css";
// import "./css/buttons.css";

function AppContent() {
  const { bgColor, textColor } = useBackground();

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Personalização de Componente </h1>
      <APIColours />
    </div>
  );
}

export function App() {
  return (
    <BackgroundProvider>
      <AppContent />
    </BackgroundProvider>
  );
}

export default App;
// import APIColours from "./APIColours"
// import "./css/index.css";
// import "./css/buttons.css";
//
// export function App() {
//   return (
//     <div className="app">
//       <h1>Vamos mudar as cores da página</h1>
//         <APIColours />
//     </div>
//   );
// }
//
// export default App;
