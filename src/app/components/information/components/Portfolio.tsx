import React from "react";
import Section from "@/app/common/Section";
import Card from "@/app/common/CardPortfolio";
import Project from "@/app/assets/project.jpg";

const Portfolio = () => {
  return (
    <div className="mb-20 text-black">
      <Section
        title="Portfolio"
        description="Projects I have been involved in."
      />

      <div className="overflow-x-auto whitespace-nowrap">
        <div className="inline-block mr-20">
          <Card
            image={Project}
            title="PC Inventory Management"
            description="Developed an inventory management application for laboratory computers with Spring Boot and Angular, utilizing MySQL for database management and collaborating on testing and debugging."
            url="wwwww"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Project}
            title="SMS Notification for Bancolombia's Fiduciary Business"
            description="Description 1"
            url="wwwww"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Project}
            title="Payroll Management"
            description="Description 1"
            url="wwwww"
          />
        </div>
        <div className="inline-block mr-20">
          <Card
            image={Project}
            title="Freight Administration"
            description="Description 1"
            url="wwwww"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
