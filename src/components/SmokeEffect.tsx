function SmokeEffect() {
  return (
    <>
      {/* Fumée gauche */}
      <div className="fixed top-45 left-[-120px] w-130 h-130 bg-gradient-to-tl from-purple-800 to-pink-500 opacity-13 blur-3xl rounded-full z-0 pointer-events-none" />

      {/* Fumée droite */}
      <div className="fixed bottom-10 right-[-120px] w-130 h-130  bg-gradient-to-r from-blue-800 via-cyan-500  opacity-11 blur-3xl rounded-full z-0 pointer-events-none" />
    </>
  );
}

export default SmokeEffect;
