import { useState, useEffect } from "react";
import { useBackground } from "./BackgroundContext";

export default function APIColours() {
  const { setBgColor, setTextColor} = useBackground();
  // Estado que controla o cenário (genérico = claro, otimizado = escuro)
  const [scenario, setScenario] = useState("nao-otimizado");
  
  // Estado para guardar a cor que o usuário clicou na paleta (prévia)
  const [previewColor, setPreviewColor] = useState("#FFFFFF");

  // Estado para guardar a cor que realmente foi aplicada no fundo
  const [appliedColor, setAppliedColor] = useState("#F5F5F5");

  // Paleta para o Cenário Genérico (modo claro - sem otimização de consumo)
  const paletaGenerica = [
    "#FFFFFF", // branco (alto consumo em telas OLED)
    "#FFFF00", // amarelo vivo
    "#00FFFF", // ciano brilhante
    "#FF00FF", // rosa choque
    "#FFA500", // laranja intenso
  ];

  // Paleta para o Cenário otimizado (modo escuro - otimizada para consumo)
  const paletaOtimizada = [
    "#000000", // preto (baixo consumo em OLED)
    "#121212", // cinza escuro
    "#228B22", // verde escuro suave
    "#1E90FF", // azul escuro
    "#800020", // vinho profundo
  ];

  // Define qual paleta deve ser exibida conforme o cenário
  const paleta = scenario === "nao-otimizado" ? paletaGenerica : paletaOtimizada;

  // Define cores conforme cenário
  useEffect(() => {
    if (scenario === "nao-otimizado") {
      setBgColor("#FFFFFF"); // fundo branco
      setTextColor("#000000"); // texto preto
    } else {
      setBgColor("#000000"); // fundo preto
      setTextColor("#FFFFFF"); // texto branco
    }
  }, [scenario, setBgColor, setTextColor]);

  return (
    <div
      // O fundo da tela usa a cor aplicada, não a prévia
      style={{
        backgroundColor: appliedColor,
        color: scenario === "nao-otimizado" ? "#000000" : "#FFFFFF",
        maxWidth: "1200px", // limite máximo de largura
        width: "90%",       // usa 90% da tela (mas respeita o limite acima)
        margin: "0 auto",   // centraliza horizontalmente
        minHeight: "100vh",
        padding: "20px",
        transition: "background-color 0.3s ease", // transição suave
      }}
    >
      <h1>
        Vamos mudar a cor da página 
        {/* {scenario === "nao-otimizado" */}
        {/*   ? "Cenário 1" */}
        {/*   : "Cenário 2"} */}
      </h1>

      {/* Botões para alternar entre os cenários */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setScenario("nao-otimizado")} style={{ marginRight: "10px" }}>
          Cenário 1
        </button>
        <button onClick={() => setScenario("otimizado")}>
          Cenário 2
        </button>
      </div>

      {/* Paleta de cores */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "20px" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {paleta.map((color) => (
            <button
              key={color}
              onClick={() => setPreviewColor(color)} // muda apenas a prévia
              style={{
                backgroundColor: color,
                border: previewColor === color ? "3px solid #333" : "1px solid #ccc",
                width: "50px",
                height: "50px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Botão para aplicar a cor da prévia ao fundo */}
        <button
          onClick={() => setAppliedColor(previewColor)}
          style={{
            padding: "10px 20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Mudar para cor selecionada
        </button>
      </div>

      {/* Prévia do componente */}
      <div
        style={{
          backgroundColor: previewColor,
          width: "200px",
          height: "200px",
          maxWidth: "1200px", // limite máximo de largura
          // width: "90%",       // usa 90% da tela (mas respeita o limite acima)
          margin: "0 auto",   // centraliza horizontalmente
          borderRadius: "10px",
          border: "2px solid #ccc",
        }}
      >
        <p style={{ padding: "10px", color: scenario === "nao-otimizado" ? "#000" : "#FFF" }}>
          Prévia do Componente
        </p>
      </div>
    </div>
  );
}
