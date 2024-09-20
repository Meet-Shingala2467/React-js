import { useEffect, useState } from "react";
import "./useEffect.css";

function Useeffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("black");
  const [fontSize, setFontSize] = useState("24px"); // Added state for font size
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
      setColor(getRandomColor());
      setFontSize(`${24 + Math.floor(Math.random() * 10)}px`); // Dynamically set font size randomly
      setEmoji(getRandomEmoji());
    }, 1000);
  }, [count]);

  const getRandomColor = () => {
    const colors = [
      "red",
      "green",
      "blue",
      "pink",
      "purple",
      "black",
      "orange",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getRandomEmoji = () => {
    const emojis = [
      "🚀",
      "👽",
      "💻",
      "🎉",
      "😄",
      "🤖",
      "🚫",
      "😊",
      "👍",
      "🚫",
      "🚪",
      "🚫",
      "🚭",
      "🚮",
      "🚯",
      "🚰",
      "🚱",
      "🚲",
      "🚳",
      "🚴",
      "🚵",
      "🚶",
      "🚷",
      "🚸",
      "🚹",
      "🚺",
      "🚻",
      "🚾",
      "🚿",
    ];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1 style={{ color: color, fontSize: fontSize }}>
        {emoji} {count} {emoji}
      </h1>{" "}
      {/* Updated to use dynamic font size and added random emoji */}
    </div>
  );
}

export default Useeffect;
