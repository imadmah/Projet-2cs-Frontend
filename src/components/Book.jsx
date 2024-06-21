import React from "react";
import PropTypes from "prop-types";

const Book = (props) => {
  return (
    <div className="flex w-full max-w-lg border rounded-md shadow-lg overflow-hidden">
      <img
        src={props.image}
        alt={`${props.title} cover`}
        className="w-1/2 object-cover"
      />
      <div className="w-1/2 p-2 bg-white">
        <h2 className="text-2xl font-bold">{props.title}</h2>
        <p className="mt-2 text-sm text-gray-700">{props.Description}</p>
        <div className="mt-4">
          <span className="font-bold">Authors:</span>
          <ul className="list-disc ml-5 mt-2 text-sm text-gray-700">
            {props.authors.map((author, index) => (
              <li key={index}>{author}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 justify-end">
          <span className="font-bold">Published on:</span>
          <span className="ml-2 text-blue-600">{props.date}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
