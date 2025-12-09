import React, { useState, useEffect } from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Home,
  Archive,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function DrawingPortfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [brushColor, setBrushColor] = useState("#2563eb");
  const [brushSize, setBrushSize] = useState(3);
  const [scrollY, setScrollY] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const colors = [
    "#1e3a8a",
    "#2563eb",
    "#3b82f6",
    "#60a5fa",
    "#93c5fd",
    "#fbbf24",
    "#f59e0b",
    "#d97706",
  ];

  const projects = [
    {
      title: "Festival Batard",
      description:
        "Identidad visual completa para festival de performance art en Bruselas",
      tech: "React, Next.js, GSAP",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    },
    {
      title: "Tienda Vintage",
      description: "E-commerce personalizado para joyería artesanal",
      tech: "Shopify, Liquid, JavaScript",
      image:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80",
    },
    {
      title: "Portfolio Artista",
      description: "Sitio web minimalista para coreógrafa multidisciplinar",
      tech: "Webflow, GSAP, Figma",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      if (isDrawing && (currentPage === "home" || currentPage === "draw")) {
        setCurrentPath((prev) => [
          ...prev,
          { x: e.clientX, y: e.clientY + scrollY },
        ]);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawing, scrollY, currentPage]);

  const handleMouseDown = () => {
    if (currentPage === "home" || currentPage === "draw") {
      setIsDrawing(true);
      setCurrentPath([{ x: mousePos.x, y: mousePos.y + scrollY }]);
    }
  };

  const handleMouseUp = () => {
    if (isDrawing && currentPath.length > 0) {
      setPaths((prev) => [
        ...prev,
        { points: currentPath, color: brushColor, size: brushSize },
      ]);
      setCurrentPath([]);
    }
    setIsDrawing(false);
  };

  const clearDrawing = () => {
    setPaths([]);
    setCurrentPath([]);
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        backgroundColor: "#f8fafc",
        color: "#1e293b",
        minHeight: "100vh",
        cursor:
          currentPage === "home" || currentPage === "draw"
            ? "crosshair"
            : "default",
        fontFamily: "Georgia, serif",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {(currentPage === "home" || currentPage === "draw") && (
        <svg
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 9998,
          }}
        >
          {paths.map((path, idx) => (
            <path
              key={idx}
              d={path.points
                .map(
                  (p, i) =>
                    `${i === 0 ? "M" : "L"} ${p.x} ${
                      p.y - (currentPage === "draw" ? 0 : scrollY)
                    }`
                )
                .join(" ")}
              stroke={path.color}
              strokeWidth={path.size}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {currentPath.length > 0 && (
            <path
              d={currentPath
                .map(
                  (p, i) =>
                    `${i === 0 ? "M" : "L"} ${p.x} ${
                      p.y - (currentPage === "draw" ? 0 : scrollY)
                    }`
                )
                .join(" ")}
              stroke={brushColor}
              strokeWidth={brushSize}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}

      {(currentPage === "home" || currentPage === "draw") && (
        <div
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            zIndex: 10000,
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "24px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            border: "3px solid #3b82f6",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              maxWidth: "200px",
            }}
          >
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setBrushColor(color)}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: color,
                  border:
                    brushColor === color
                      ? "3px solid #1e293b"
                      : "2px solid white",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  transition: "transform 0.2s",
                  transform: brushColor === color ? "scale(1.1)" : "scale(1)",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontSize: "12px",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Grosor: {brushSize}px
            </label>
            <input
              type="range"
              min="1"
              max="20"
              value={brushSize}
              onChange={(e) => setBrushSize(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <button
            onClick={clearDrawing}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              padding: "12px 20px",
              borderRadius: "12px",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
            }}
          >
            Borrar todo
          </button>
        </div>
      )}

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: "24px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(248, 250, 252, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "2px solid #e2e8f0",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "900",
            margin: 0,
            fontFamily: "Arial, sans-serif",
            background: "linear-gradient(135deg, #2563eb, #fbbf24)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.02em",
          }}
        >
          TU NOMBRE
        </h1>

        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <button
            onClick={() => setCurrentPage("home")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: currentPage === "home" ? "700" : "500",
              color: currentPage === "home" ? "#2563eb" : "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Arial, sans-serif",
              transition: "color 0.2s",
            }}
          >
            <Home size={20} />
            Home
          </button>

          <button
            onClick={() => setCurrentPage("archive")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: currentPage === "archive" ? "700" : "500",
              color: currentPage === "archive" ? "#2563eb" : "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Arial, sans-serif",
              transition: "color 0.2s",
            }}
          >
            <Archive size={20} />
            Archive
          </button>

          <button
            onClick={() => setCurrentPage("draw")}
            style={{
              backgroundColor: "#fbbf24",
              color: "#1e293b",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "700",
              padding: "12px 24px",
              borderRadius: "12px",
              fontFamily: "Arial, sans-serif",
              boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)",
              transition: "transform 0.2s",
            }}
          >
            🎨 Dibujar
          </button>
        </div>
      </nav>

      {currentPage === "home" && (
        <div>
          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "120px 48px 80px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <h2
              style={{
                fontSize: "clamp(48px, 8vw, 120px)",
                fontWeight: "900",
                textAlign: "center",
                margin: "0 0 32px 0",
                fontFamily: "Arial, sans-serif",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                background:
                  "linear-gradient(135deg, #1e3a8a, #2563eb, #fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Dibuja tu Historia
            </h2>

            <p
              style={{
                fontSize: "24px",
                textAlign: "center",
                maxWidth: "600px",
                lineHeight: "1.6",
                color: "#475569",
                marginBottom: "48px",
              }}
            >
              Bienvenido a mi espacio creativo. Usa tu cursor como pincel y deja
              tu marca en esta página.
            </p>

            <p
              style={{
                fontSize: "16px",
                color: "#94a3b8",
                fontFamily: "Arial, sans-serif",
                fontWeight: "600",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              ↓ Scroll para ver más ↓
            </p>
          </section>

          <section
            style={{
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              padding: "120px 48px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "80px",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: "56px",
                    fontWeight: "900",
                    marginBottom: "32px",
                    fontFamily: "Arial, sans-serif",
                    letterSpacing: "-0.02em",
                    color: "#1e293b",
                  }}
                >
                  Sobre mí
                </h3>
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                    color: "#475569",
                  }}
                >
                  <p style={{ marginBottom: "24px" }}>
                    Soy diseñador y desarrollador web con más de 8 años de
                    experiencia creando experiencias digitales únicas y
                    memorables.
                  </p>
                  <p style={{ marginBottom: "24px" }}>
                    Mi enfoque combina diseño visual impactante con código
                    limpio y funcional. Creo que cada proyecto debe contar una
                    historia y conectar emocionalmente con las personas.
                  </p>
                  <p>
                    Especializado en React, Next.js, Webflow y GSAP. Trabajo con
                    marcas creativas, estudios de diseño y proyectos culturales
                    que valoran la innovación y la calidad.
                  </p>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "#f1f5f9",
                  padding: "48px",
                  borderRadius: "24px",
                  border: "3px solid #e2e8f0",
                }}
              >
                <h4
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "24px",
                    fontFamily: "Arial, sans-serif",
                    color: "#1e293b",
                  }}
                >
                  Habilidades
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                  }}
                >
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "GSAP",
                    "Webflow",
                    "Shopify",
                    "Figma",
                    "Tailwind",
                  ].map((skill) => (
                    <span
                      key={skill}
                      style={{
                        backgroundColor: "#3b82f6",
                        color: "white",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        fontSize: "14px",
                        fontWeight: "600",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "120px 48px",
              backgroundColor: "#f8fafc",
            }}
          >
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <h3
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  marginBottom: "64px",
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#1e293b",
                }}
              >
                Proyectos Destacados
              </h3>

              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: "32px",
                  padding: "48px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  border: "3px solid #e2e8f0",
                }}
              >
                <div style={{ position: "relative", marginBottom: "48px" }}>
                  <div
                    style={{
                      position: "relative",
                      height: "500px",
                      borderRadius: "20px",
                      overflow: "hidden",
                      backgroundImage: `url(${projects[currentProjectIndex].image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <button
                      onClick={prevProject}
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      <ChevronLeft size={24} color="#1e293b" />
                    </button>

                    <button
                      onClick={nextProject}
                      style={{
                        position: "absolute",
                        right: "20px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        border: "none",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                      }}
                    >
                      <ChevronRight size={24} color="#1e293b" />
                    </button>
                  </div>
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "36px",
                      fontWeight: "800",
                      marginBottom: "16px",
                      fontFamily: "Arial, sans-serif",
                      color: "#1e293b",
                    }}
                  >
                    {projects[currentProjectIndex].title}
                  </h4>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "1.6",
                      color: "#64748b",
                      marginBottom: "24px",
                    }}
                  >
                    {projects[currentProjectIndex].description}
                  </p>
                  <div
                    style={{
                      display: "inline-block",
                      backgroundColor: "#f1f5f9",
                      padding: "12px 24px",
                      borderRadius: "12px",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#475569",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    {projects[currentProjectIndex].tech}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    marginTop: "32px",
                  }}
                >
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentProjectIndex(idx)}
                      style={{
                        width: currentProjectIndex === idx ? "40px" : "12px",
                        height: "12px",
                        borderRadius: "6px",
                        backgroundColor:
                          currentProjectIndex === idx ? "#3b82f6" : "#cbd5e1",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contacto"
            style={{
              padding: "120px 48px",
              backgroundColor: "white",
            }}
          >
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <h3
                style={{
                  fontSize: "56px",
                  fontWeight: "900",
                  marginBottom: "24px",
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                  letterSpacing: "-0.02em",
                  color: "#1e293b",
                }}
              >
                Hablemos
              </h3>
              <p
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                  color: "#64748b",
                  marginBottom: "48px",
                  lineHeight: "1.6",
                }}
              >
                ¿Tienes un proyecto en mente? Me encantaría saber más sobre tu
                visión.
              </p>

              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#f8fafc",
                  padding: "48px",
                  borderRadius: "24px",
                  border: "3px solid #e2e8f0",
                }}
              >
                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#1e293b",
                      fontFamily: "Arial, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      fontFamily: "Georgia, serif",
                      backgroundColor: "white",
                    }}
                    placeholder="Tu nombre"
                  />
                </div>

                <div style={{ marginBottom: "24px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#1e293b",
                      fontFamily: "Arial, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      fontFamily: "Georgia, serif",
                      backgroundColor: "white",
                    }}
                    placeholder="tu@email.com"
                  />
                </div>

                <div style={{ marginBottom: "32px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "8px",
                      color: "#1e293b",
                      fontFamily: "Arial, sans-serif",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "16px",
                      borderRadius: "12px",
                      border: "2px solid #e2e8f0",
                      fontFamily: "Georgia, serif",
                      resize: "vertical",
                      backgroundColor: "white",
                    }}
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#3b82f6",
                    color: "white",
                    padding: "18px",
                    fontSize: "18px",
                    fontWeight: "700",
                    borderRadius: "12px",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "Arial, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  <Send size={20} />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </section>

          <footer
            style={{
              backgroundColor: "#1e293b",
              color: "#e2e8f0",
              padding: "80px 48px 40px",
              borderTop: "4px solid #fbbf24",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "48px",
                  marginBottom: "48px",
                }}
              >
                <div>
                  <h4
                    style={{
                      fontSize: "24px",
                      fontWeight: "900",
                      marginBottom: "16px",
                      fontFamily: "Arial, sans-serif",
                      color: "#fbbf24",
                    }}
                  >
                    TU NOMBRE
                  </h4>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                      color: "#94a3b8",
                    }}
                  >
                    Diseñador y desarrollador creando experiencias digitales
                    memorables.
                  </p>
                </div>

                <div>
                  <h5
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      marginBottom: "16px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Redes Sociales
                  </h5>
                  <div style={{ display: "flex", gap: "16px" }}>
                    <a
                      href="#"
                      style={{
                        color: "#e2e8f0",
                        transition: "color 0.2s",
                      }}
                    >
                      <Mail size={24} />
                    </a>
                    <a
                      href="#"
                      style={{
                        color: "#e2e8f0",
                        transition: "color 0.2s",
                      }}
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      style={{
                        color: "#e2e8f0",
                        transition: "color 0.2s",
                      }}
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div
                style={{
                  paddingTop: "32px",
                  borderTop: "1px solid #334155",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#94a3b8",
                }}
              >
                <p>© 2025 Tu Nombre. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      )}

      {currentPage === "draw" && (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "120px 48px",
          }}
        >
          <h2
            style={{
              fontSize: "72px",
              fontWeight: "900",
              textAlign: "center",
              marginBottom: "32px",
              fontFamily: "Arial, sans-serif",
              background: "linear-gradient(135deg, #2563eb, #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Lienzo Libre
          </h2>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#64748b",
              maxWidth: "600px",
            }}
          >
            Este es tu espacio para crear libremente. Dibuja lo que quieras.
          </p>
        </div>
      )}

      {currentPage === "archive" && (
        <div
          style={{
            minHeight: "100vh",
            padding: "120px 48px",
            backgroundColor: "white",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "72px",
                fontWeight: "900",
                marginBottom: "64px",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                color: "#1e293b",
              }}
            >
              Archive
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
                gap: "32px",
              }}
            >
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: "3px solid #e2e8f0",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(0,0,0,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    style={{
                      height: "250px",
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{ padding: "24px" }}>
                    <h4
                      style={{
                        fontSize: "24px",
                        fontWeight: "800",
                        marginBottom: "12px",
                        fontFamily: "Arial, sans-serif",
                        color: "#1e293b",
                      }}
                    >
                      {project.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "#64748b",
                        marginBottom: "16px",
                      }}
                    >
                      {project.description}
                    </p>
                    <div
                      style={{
                        display: "inline-block",
                        backgroundColor: "#f1f5f9",
                        padding: "8px 16px",
                        borderRadius: "8px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#475569",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {project.tech}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
