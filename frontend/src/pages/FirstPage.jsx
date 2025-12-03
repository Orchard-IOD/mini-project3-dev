// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../context/UserContext"

// export function FirstPage() {
//   // get userName from context
//   const { userName, logout } = useContext(UserContext);

//   const handleLogout = () => {
//     logout();
//   }

//   return (
//     <div style={styles.container}>
//       <h1>Welcome{userName ? `, ${userName}` : ""}</h1>

//       <div style={styles.buttons}>
//         {userName ? (
//           <button style={styles.button} onClick={handleLogout}>Logout</button>
//         ) : (
//           <Link to="/login" style={styles.button}>Login</Link>
//         )}
//         <Link to="/recipe" style={styles.button}>Search Recipes</Link>
//         <Link to="/saved" style={styles.button}>My Saved Recipes</Link>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     paddingTop: "50px",
//   },
//   buttons: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "20px",
//     width: "200px",
//     margin: "30px auto",
//   },
//   button: {
//     padding: "12px",
//     background: "#4CAF50",
//     color: "white",
//     textDecoration: "none",
//     borderRadius: "8px",
//     fontSize: "18px",
//     textAlign: "center"
//   }
// };
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export function FirstPage() {
  const { userName, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={styles.container}>
      {/* Header with gradient background */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          Welcome{userName ? `, ${userName}` : ""}
          <span style={styles.wave}>👋</span>
        </h1>
        <p style={styles.subtitle}>
          Discover delicious recipes and save your favorites
        </p>
      </div>

      {/* Main content */}
      <div style={styles.content}>
       
        <div style={styles.buttonContainer}>
          {userName ? (
            <button style={styles.logoutButton} onClick={handleLogout}>
              <span style={styles.buttonIcon}>🚪</span>
              Logout
            </button>
          ) : (
            <Link to="/login" style={styles.primaryButton}>
              <span style={styles.buttonIcon}>🔐</span>
              Login / Sign Up
            </Link>
          )}

          <div style={styles.actionButtons}>
            <Link to="/recipe" style={styles.actionButton}>
              <span style={styles.buttonIcon}>🍳</span>
              Search Recipes
            </Link>

            <Link to="/saved" style={styles.actionButton}>
              <span style={styles.buttonIcon}>❤️</span>
              My Saved Recipes
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={styles.decorative}>
          <div style={styles.circle}></div>
          <div style={styles.circle2}></div>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          Made with ❤️ | Recipe Finder {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    color: "#333",
  },
  header: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "60px 20px 80px",
    textAlign: "center",
    color: "white",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "700",
    marginBottom: "12px",
    background: "linear-gradient(45deg, #ffffff, #f0f0f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  wave: {
    display: "inline-block",
    marginLeft: "15px",
    animation: "wave 2s infinite",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: "0.9",
    maxWidth: "500px",
    margin: "0 auto",
    fontWeight: "300",
  },
  content: {
    maxWidth: "1200px",
    margin: "-40px auto 0",
    padding: "0 20px",
    position: "relative",
    zIndex: "1",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "60px",
  },

  featureIcon: {
    fontSize: "3rem",
    marginBottom: "20px",
  },
  featureTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#2d3748",
  },
  featureDesc: {
    fontSize: "1rem",
    color: "#718096",
    lineHeight: "1.6",
  },
  buttonContainer: {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
    marginBottom: "40px",
    textAlign: "center",
  },
  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "18px 36px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    textDecoration: "none",
    marginBottom: "30px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
    border: "none",
    cursor: "pointer",
  },
  logoutButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    background: "linear-gradient(135deg, #f56565 0%, #ed64a6 100%)",
    color: "white",
    padding: "18px 36px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    border: "none",
    cursor: "pointer",
    marginBottom: "30px",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(245, 101, 101, 0.4)",
  },
  actionButtons: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  actionButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    background: "white",
    color: "#4a5568",
    padding: "20px 30px",
    borderRadius: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    textDecoration: "none",
    transition: "all 0.3s ease",
    border: "2px solid #e2e8f0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.04)",
  },
  buttonIcon: {
    fontSize: "1.3rem",
  },
  decorative: {
    position: "absolute",
    top: "50%",
    left: "0",
    right: "0",
    pointerEvents: "none",
  },
  circle: {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
    top: "-100px",
    left: "-100px",
  },
  circle2: {
    position: "absolute",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, rgba(245, 101, 101, 0.1) 0%, rgba(237, 100, 166, 0.1) 100%)",
    bottom: "-50px",
    right: "-50px",
  },
  footer: {
    textAlign: "center",
    padding: "30px 20px",
    color: "#718096",
    fontSize: "0.9rem",
  },
  footerText: {
    opacity: "0.8",
  },
};

// Add CSS animations
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes wave {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg); }
    75% { transform: rotate(-10deg); }
  }
`,
  styleSheet.cssRules.length
);

// Add hover effects
styleSheet.insertRule(
  `
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .action-button:hover {
    background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
    border-color: #667eea;
    color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
  .primary-button:hover, .logout-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }
`,
  styleSheet.cssRules.length
);

// Add CSS class to feature cards for hover effect
Object.assign(styles.featureCard, {
  className: "feature-card",
});

Object.assign(styles.actionButton, {
  className: "action-button",
});

Object.assign(styles.primaryButton, {
  className: "primary-button",
});

Object.assign(styles.logoutButton, {
  className: "logout-button",
});
