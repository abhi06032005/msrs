import React from "react";

const images = [
  "/event1.png",
  "/e4.png",
  "/e5.png",
  "/e6.png",
  "/e7.png",
  "/e8.png",
  "/e9.png",
  "/e3.png",
];

// Original grid config for bento style layout
const gridConfig = [
  { colSpan: 2, rowSpan: 2 }, // larger block top-left
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 },
  { colSpan: 1, rowSpan: 1 }, // wide second row block
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 1, rowSpan: 2 },
  { colSpan: 2, rowSpan: 2 },
];

const Gallery = () => (
    <div className="w-full flex flex-col items-center py-8 px-4 bg-linear-to-br from-purple-50 via-pink-50 to-white rounded-lg shadow-lg  mx-auto">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-6 select-none tracking-wide">
      EVENTS
    </h2>
    <div
      className="grid grid-cols-4 grid-rows-4 gap-6 w-[1100px]"
      style={{
        gridAutoRows: "120px",
        gridAutoFlow: "dense",
      }}
    >
      {images.slice(0, 8).map((src, idx) => {
        const { colSpan, rowSpan } = gridConfig[idx];
        return (
          <div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-[1.05]"
            style={{
              gridColumnEnd: `span ${colSpan}`,
              gridRowEnd: `span ${rowSpan}`,
            }}
          >
            <img
              src={src}
              alt={`Event ${idx + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
              decoding="async"
            />
          </div>
        );
      })}
    </div>
    <button className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition">
      See More
    </button>
  </div>
);

export default Gallery;
