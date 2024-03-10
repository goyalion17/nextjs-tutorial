import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <ul>
        <li>
          <Link href="/about" className="text-2xl">
            About
          </Link>
        </li>
        <li>
          <Link href="/client" className="text-2xl">
            Client
          </Link>
        </li>
        <li>
          <Link href="/drinks" className="text-2xl">
            Drinks
          </Link>
        </li>
        <li>
          <Link href="/prisma-exemple" className="text-2xl">
            Prisma Example
          </Link>
        </li>
        <li>
          <Link href="/query" className="text-2xl">
            Query
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="text-2xl">
            Tasks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
