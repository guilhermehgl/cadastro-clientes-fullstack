import { useEffect } from "react";
import "./modal.css";

// Componente de modal genérico
export default function Modal({ isOpen, onClose, children }) {
  // 📌 Fechar modal ao pressionar a tecla "Escape"
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    // Adiciona listener somente quando o modal está aberto
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    // Limpeza do listener quando o modal fecha ou componente desmonta
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Evita que cliques dentro do conteúdo fechem o modal */}
      <div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        role="dialog"       // Para acessibilidade
        aria-modal="true"    // Indica modal ativo
      >
        {/* Botão de fechar */}
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✖
        </button>

        {/* Conteúdo passado como children */}
        {children}
      </div>
    </div>
  );
}
