import { useEffect, useState } from "react";

export const Display = (props) => {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    setTimeout(() => {
      setText(`カウント: ${props.count}`);
    }, 2000);
  }, []);

  return (
    <div>
      {text}
    </div>
  )
}