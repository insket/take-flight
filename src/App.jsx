import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas shadows>
      <Suspense fallback={'loading......'}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default App;
