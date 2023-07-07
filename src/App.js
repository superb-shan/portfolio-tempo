import Header from "./components/Header";
import AllRoutes from "./components/AllRoutes";

function App() {
  const personalDetails = {
    name: "Shankar",
    location: "Tirupur, Tamilnadu",
    email: "shankar.k2021csec@sece.ac.in",
    availability: "Open for work",
    brand:
      "A sanguine dynamic person with creative, confident, and crucial skills seeking new challenges and self-improving with new technologies in this ever-changing world.",
  };

  return (
    <>
      <Header />
      <AllRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
