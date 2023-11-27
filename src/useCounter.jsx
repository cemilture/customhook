import { useState } from "react";

function useCounter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2>Sayı : {num}</h2>
      <button onClick={() => setNum(num + 1)}>Arttır</button>
      <button onClick={() => setNum(num - 1)}>Azalt</button>
      <button onClick={() => setNum(0)}>Sıfırla</button>
    </div>
  );
}

export default useCounter;
