// import { Outlet } from "react-router-dom";
// import Navbar from "../components/common/Navbar";
// import Footer from "../components/common/Footer";

// const MainLayout = () => {
//   return (
//     <>
//       <div className="min-h-screen flex flex-col ">
//         <Navbar />
//         <main className="flex-grow">
//           <Outlet />
//         </main>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default MainLayout;

import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/common/Navbar";
import FullScreenNav from "../components/common/FullScreenNav";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar onMenuClick={() => setIsNavOpen(true)} />

      <FullScreenNav
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
      />

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;