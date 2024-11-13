import { Routes, Route } from 'react-router-dom'; // Import Routes instead of Switch

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> // Use element and JSX components
      <Route path="/about" element={<About />} />
    </Routes>
  );
}