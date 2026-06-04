import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="bg-base-100 min-h-screen flex flex-col">
      {/* Header */}
      <header>
        <Header />
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar />
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-11/12 mx-auto my-3 grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Left Aside */}
        <aside className="col-span-1 md:col-span-3 sticky top-4 h-[80vh] overflow-auto p-4 bg-gradient-to-b from-white to-gray-50 shadow-lg rounded-xl space-y-4">
          <LeftAside />
        </aside>

        {/* Main Section */}
        <section className="col-span-1 md:col-span-6 space-y-4">
          {state === "loading" ? <Loading /> : <Outlet />}
        </section>

        {/* Right Aside */}
        <aside className="hidden md:block md:col-span-3 sticky top-4 h-[80vh] overflow-auto p-4 bg-white shadow-lg rounded-xl space-y-4">
          <RighAside />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;