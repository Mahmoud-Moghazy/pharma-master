import React, { Fragment, useState, useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import { Hourglass } from "react-loader-spinner";
import "./App.css";

const App = () => {
  const [buttonTop, setButtonTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setButtonTop(true);
      } else {
        setButtonTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    // Set loading to false after 5000ms (5 seconds)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const [showHello, setShowHello] = useState(false); // Control visibility of "Hello" text

  useEffect(() => {
    // Show "Hello" after a delay (e.g., 1000ms)
    setTimeout(() => {
      setShowHello(true);
    }, 1000);
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          {/* Show "Hello" only when showHello state is true */}
          {showHello && (
            <div className="text">
              <h1>PharmacyHub</h1>
            </div>
          )}
          <Hourglass
            id="spinner"
            visible={true}
            height={80}
            width={80}
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#008829", "#008829"]}
          />
        </div>
      ) : (
        <Fragment>
          <Layout />
        </Fragment>
      )}
      {buttonTop && (
        <button
          onClick={top}
          className={`btn-top ${buttonTop ? "visible" : ""}`}
        >
          Top
        </button>
      )}
    </div>
  );
};

export default App;
