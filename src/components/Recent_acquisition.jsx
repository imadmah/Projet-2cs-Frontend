import React from "react";
import Slider from "./Slider";
import kotlin_book from "../assets/images/atomic-kotlin.png";
import bibPresentation from "../assets/images/bib_presentation.png";
import deep_learning_book from "../assets/images/deep-learning.png";
import dev_ops_book from "../assets/images/Dev_ops.png";
import { BiChevronRight } from "react-icons/bi";
import Book from "./Book";

const slides = [
  {
    content: (
      <div className="flex justify-center gap-x-8">
        <Book
          image={kotlin_book}
          title="Atomic Kotlin"
          Description="A comprehensive guide to learn the Kotlin programming language. It covers all the essential concepts of Kotlin in a clear and concise manner, making it easy for beginners to understand and master the language."
          authors={["Bruce Eckel", "Svetlana Isakaova"]}
          date="November 2022"
        />
        <Book
          image={deep_learning_book}
          title="Comprendre le deep learning"
          Description="This book or resource likely provides an overview of deep learning concepts and techniques, with a focus on neural networks."
          authors={["Jean-Claude Heudin"]}
          date="November 2021"
        />
      </div>
    ),
  },
  {
    content: (
      <div className="flex justify-center gap-x-8">
        <Book
          image={deep_learning_book}
          title="Comprendre le deep learning"
          Description="This book or resource likely provides an overview of deep learning concepts and techniques, with a focus on neural networks."
          authors={["Jean-Claude Heudin"]}
          date="November 2021"
        />
        <Book
          image={dev_ops_book}
          title="Mettre en oeuvre DevOps"
          Description="Mettre en oeuvre DevOps Dunod is a book published by Dunod that focuses on implementing DevOps practices in organizations. It covers topics such as continuous integration, continuous delivery, automation, collaboration between development and operations teams, and more."
          authors={["Alain Sacquet", "Christophe Rochefolle"]}
          date="May 2013"
        />
      </div>
    ),
  },
];

function Recent_acquisition() {
  return (
    <div className=" w-full flex h-full bg-[#F6FAFF] flex-col px-32 gap-y-4 items-center justify-center  ">
      <p className="text-4xl font-bold text-main-blue">Recent acquisitions</p>
      <p className="mx-32 text-xl">
        “ Every year, the library purchases new books according to the needs of
        its members, especially the needs of teachers (on average 40 to 60
        titles, each consisting of 3 to 5 copies).“
      </p>
      <Slider slides={slides} />
      <button
        onClick={() => window.open("https://biblio.esi.dz/", "_blank")}
        className="flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group mt-4"
      >
        <span>Browse Catalog</span>
        <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
      </button>
    </div>
  );
}

export default Recent_acquisition;
