// Ilustração fictícia (placeholder) até chegarem as fotos reais dos produtos.
export default function Peca({ tipo, cor, forma = 1, curta = false }) {
  const stroke = "rgba(0,0,0,.18)";
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label={`Ilustração de ${tipo}`} className="peca">
      <g transform={`translate(50 50) scale(${forma} 1) translate(-50 -50)`}>
        {tipo === "tee" && (
          <path d="M35 12 L18 22 L6 40 L20 48 L26 40 L26 88 L74 88 L74 40 L80 48 L94 40 L82 22 L65 12 Q50 22 35 12Z" fill={cor} stroke={stroke} />
        )}
        {tipo === "hoodie" && (
          <>
            <path d="M30 20 L12 32 L6 76 L20 78 L26 52 L26 90 L74 90 L74 52 L80 78 L94 76 L88 32 L70 20 Q50 34 30 20Z" fill={cor} stroke={stroke} />
            <path d="M36 14 Q50 2 64 14 L64 28 Q50 40 36 28Z" fill="rgba(0,0,0,.14)" stroke={stroke} />
          </>
        )}
        {tipo === "shirt" && (
          <>
            <path d={curta
              ? "M35 12 L18 22 L6 40 L20 48 L26 40 L26 88 L74 88 L74 40 L80 48 L94 40 L82 22 L65 12 Q50 22 35 12Z"
              : "M35 12 L16 22 L6 80 L18 82 L26 44 L26 88 L74 88 L74 44 L82 82 L94 80 L84 22 L65 12 Q50 22 35 12Z"} fill={cor} stroke={stroke} />
            <path d="M35 12 L50 30 L65 12 M50 30 V88" fill="none" stroke={stroke} />
          </>
        )}
        {tipo === "bag" && (
          <>
            <path d="M36 36 V22 Q36 8 50 8 Q64 8 64 22 V36" fill="none" stroke={cor} strokeWidth="3" />
            <path d="M22 34 H78 V92 H22Z" fill={cor} stroke={stroke} />
          </>
        )}
      </g>
    </svg>
  );
}
