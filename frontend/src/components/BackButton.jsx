import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        // padding: "8px 12px",
        // fontSize: "16px",
        // borderRadius: "6px",
        // background: "#ccc",
        // border: "1px solid #999",
        // cursor: "pointer",
        // marginBottom: "20px"
        
        padding: "10px 20px",
        fontSize: "15px",
        fontWeight: "500",
        borderRadius: "8px",
        background: "transparent",
        border: "2px solid #3a3a3a",
        color: "#3a3a3a",
        cursor: "pointer",
        marginBottom: "20px",
        transition: "all 0.2s ease",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      ← Back
    </button>
  );
}
