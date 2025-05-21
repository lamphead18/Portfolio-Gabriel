import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { BackgroundDecorations } from "./components/BackgroundDecorations";
import Home from "./pages/Home";
import { About } from "./components/sections/About";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="overflow-hidden bg-background min-h-screen">
      <AnimatePresence mode="wait" onExitComplete={() => setShowHome(true)}>
        {showLoader && <Loader isVisible />}
        {!showLoader && showHome && (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <BackgroundDecorations />

            <Header />
            <Home />
            <About />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
