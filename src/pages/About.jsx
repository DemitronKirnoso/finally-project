import React, { useState, useEffect } from "react";

function About() {
  const [shapes, setShapes] = useState([]);
  const [particles, setParticles] = useState([]);
  const [shapeType, setShapeType] = useState("square");
  const [shapeSize, setShapeSize] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [draggingShape, setDraggingShape] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const [particleCount, setParticleCount] = useState(5);

  // Генерация случайного цвета
  const getRandomColor = () => {
    const colors = ["#ff6347", "#90e6ff", "#ffa500", "#98fb98", "#dda0dd"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Создание фигуры
  const addShape = () => {
    const newShape = {
      id: Date.now(),
      type: shapeType,
      size: shapeSize,
      color: getRandomColor(),
      x: Math.random() * (window.innerWidth - shapeSize),
      y: Math.random() * (window.innerHeight - shapeSize),
    };
    setShapes((prevShapes) => [...prevShapes, newShape]);
  };

  // Создание частицы
  const addParticle = () => {
    const newParticle = {
      id: Date.now(),
      size: Math.random() * 40 + 10,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: getRandomColor(),
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
    };
    setParticles((prevParticles) => [...prevParticles, newParticle]);
  };

  // Функция перетаскивания
  const startDrag = (e, shape) => {
    setDraggingShape(shape);
    setDragOffset({
      x: e.clientX - shape.x,
      y: e.clientY - shape.y,
    });
  };

  // Обработка перетаскивания
  const handleDrag = (e) => {
    if (!draggingShape) return;
    const newX = e.clientX - dragOffset.x;
    const newY = e.clientY - dragOffset.y;
    setShapes((prevShapes) =>
      prevShapes.map((shape) =>
        shape.id === draggingShape.id
          ? { ...shape, x: newX, y: newY }
          : shape
      )
    );
  };

  // Завершение перетаскивания
  const stopDrag = () => {
    setDraggingShape(null);
  };

  // Анимация частиц
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
        }))
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "relative",
        fontFamily: "'Poppins', sans-serif",
        overflow: "hidden",
      }}
      onMouseMove={handleDrag}
      onMouseUp={stopDrag}
    >
      <div className="ff gap-[50px] w-full h-[100px] opacity-75 bg-[#90e6ff] ">
          <a className="text-[50px] gap-[50px] ml-[30px] font-extrabold text-[#0061ff]" href="https://finally-project-kappa.vercel.app">Домой</a>
          
            </div>
      <h1 className="text-4xl font-bold text-[#084f81] mb-4 font-light">Playground</h1>

      {/* Кнопки для выбора формы и добавления объектов */}
      <div className="mb-4">
        <button
          onClick={() => setShapeType("square")}
          className="font-extrabold mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out"
        >
          Квадрат
        </button>
        <button
          onClick={() => setShapeType("circle")}
          className="font-extrabold mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out"
        >
          Круг
        </button>
      </div>

      {/* Размер фигуры */}
      <div className="mb-4">
        <input
          type="range"
          min="50"
          max="300"
          value={shapeSize}
          onChange={(e) => setShapeSize(Number(e.target.value))}
          className="p-2 border rounded-lg w-72"
        />
        <span className="ml-2 text-lg text-[#084f81]">{shapeSize}px</span>
      </div>

      {/* Кнопка добавления фигуры */}
      <button
        onClick={addShape}
        className="font-extrabold mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out"
      >
        Добавить
      </button>

      {/* Кнопка для изменения фона */}
      <button
        onClick={() => setBackgroundColor(backgroundColor === "white" ? "#90e6ff" : "white")}
        className="font-extrabold mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out"
      >
        Поменять фон
      </button>

      {/* Кнопка добавления частиц */}
      <button
        onClick={addParticle}
        className="font-extrabold mt-[15px] bg-[#a0d8ff] border border-[#084f81] border-[4px] rounded-[15px] p-[10px] hover:bg-[#7bc6ff] transition-all duration-225 ease-out"
      >
        Добавить частицы
      </button>

      {/* Контейнер для отображения фигур и частиц */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "80vh",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        {/* Частицы */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            style={{
              position: "absolute",
              top: `${particle.y}px`,
              left: `${particle.x}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease",
            }}
          />
        ))}

        {/* Фигуры */}
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              position: "absolute",
              top: `${shape.y}px`,
              left: `${shape.x}px`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              backgroundColor: shape.color,
              borderRadius: shape.type === "circle" ? "50%" : "0",
              cursor: "move",
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, background-color 0.3s ease",
              opacity: 0.9,
            }}
            onClick={() => {
              setShapes(
                shapes.map((s) =>
                  s.id === shape.id
                    ? { ...s, color: getRandomColor() }
                    : s
                )
              );
            }}
            onMouseDown={(e) => startDrag(e, shape)}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
