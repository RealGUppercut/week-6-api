"use client";

import React, { useEffect, useState } from "react";
// import "./page.module.css";

function HomePage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data);
    }
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Image Title</th>
          <th>Image URL</th>
          <th>Image Alt Text</th>
        </tr>
      </thead>
      <tbody>
        {images.map((image) => (
          <tr key={image.id}>
            <td>{image.title}</td>
            <td>{image.url}</td>
            <td>{image.alt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default HomePage;
