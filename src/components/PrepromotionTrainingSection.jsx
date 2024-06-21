import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as d3 from "d3";
import { BiChevronRight } from "react-icons/bi";
import FormationCard from "./FormationCard";

function PrepromotionTrainingSection() {
  const chartRef = useRef(null);
  const [formations, setFormations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/formations")
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching formations:", error);
      });
  }, []);
  useEffect(() => {
    const data = [
      { label: "Information System", value: 35.71 },
      { label: "Systems and Networks", value: 28.57 },
      { label: "Development", value: 7.14 },
      { label: "Basic Competencies", value: 14.29 },
      { label: "Cross-functional Competencies", value: 14.29 },
    ];

    // Set the dimensions and radius of the pie chart
    const width = 360;
    const height = 360;
    const margin = 40;

    const radius = Math.min(width, height) / 2 - margin;

    // Remove any existing SVG
    d3.select(chartRef.current).select("svg").remove();

    // Append the SVG object to the chart container
    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height + 100) // Extra height for the legend
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2.5})`);

    // Set the color scale
    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.label))
      .range(d3.schemeCategory10);

    // Compute the position of each group on the pie
    const pie = d3.pie().value((d) => d.value);

    const data_ready = pie(data);

    // Build the pie chart
    svg
      .selectAll("path")
      .data(data_ready)
      .enter()
      .append("path")
      .attr(
        "d",
        d3
          .arc()
          .innerRadius(radius * 0.48)
          .outerRadius(radius - 1)
      )
      .attr("fill", (d) => color(d.data.label))
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    // Legend layout
    const legendOffsetX = -180; // Offset X position
    const legendOffsetY = height / 2; // Offset Y position
    const legendColumns = 2;
    const legendWidth = 170;

    const legend = svg
      .selectAll(".legend")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => {
        const x = legendOffsetX + (i % legendColumns) * legendWidth;
        const y = legendOffsetY + Math.floor(i / legendColumns) * 25;
        return `translate(${x},${y})`;
      });

    legend
      .append("rect")
      .attr("x", 0)
      .attr("y", 10)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", (d) => color(d.label));

    legend
      .append("text")
      .attr("x", 24)
      .attr("y", 19)
      .attr("dy", ".35em")
      .style("text-anchor", "start")
      .text((d) => d.label);
  }, []);

  return (
    <div className="w-full h-full bg-[#F6FAFF] flex flex-col items-center justify-center gap-8">
      <h1 className="text-5xl text-center text-main-blue font-bold py-3">
        Pre-promotion Training
      </h1>
      <div className="flex w-10/12 gap-12">
        <div className="w-2/3 font-semibold text-xl indent-12 text-justify flex flex-col gap-4 leading-relaxed">
          <p>
            The National School of Computer Science is organizing the 4th
            pre-promotion training session 'March 2024' for access to the rank
            of Assistant Engineer in Computer Science Level 1, benefiting senior
            computer technicians from public institutions.
          </p>
          <p>
            The training will enable access to the rank of assistant in computer
            science and will consist of 210 hours of instruction spread over 7
            months, with one week per month.
          </p>
          <p>
            The knowledge acquired during this training is organized into 5
            competency areas: Basic Skills, Systems and Networks, Information
            Systems, Development, and Cross-functional Skills.
          </p>
          <p>
            The distribution of subjects and hourly volume per category is the
            following.
          </p>
        </div>
        <div className="w-1/3" ref={chartRef}></div>
      </div>
      <div className="flex gap-4">
        {formations.map((item, index) => (
          <FormationCard
            key={index}
            Image={item.Image}
            Title={item.Title}
            Description={item.Description}
            Duration={item.Duration}
          />
        ))}
      </div>
      <div className="flex justify-center mt-2 gap-24 mb-8">
        <a href="https://www.esi.dz/edt.html">
          <button className="flex items-center justify-center gap-x-4 w-64 py-2 font-medium text-white bg-blue-600 rounded group">
            <span>Check schedule</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
          </button>
        </a>
        <a href="/ProgramsDetails">
          <button className="flex items-center justify-center gap-x-4 w-64 py-2 font-medium text-white bg-blue-600 rounded group">
            <span>View program details</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default PrepromotionTrainingSection;
