import React, { useEffect, useState } from "react";
import "../style/Project.css";

function Projects() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch JSON data from public directory
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto b " id="projects" data-aos="fade-down">
      <p className="text-4xl mb-11 sec-title">Projects</p>
      <div className="flex proj-con justify-center" data-aos="fade-down">
        {items.map((card) => {
          return (
            <a
              href={card.url}
              target="_blank"
              key={card}
              rel="noreferrer"
              className="card-opt mb-11"
            >
              <img className="object-contain" src={card.img} alt="project" />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
