import Link from "next/link";
import React from "react";

const ClientPage = () => {
  return (
    <div>
      <h1 className="text-7xl">Client Page</h1>
      <Link href="/" className="text-2xl">
        Home Page
      </Link>
    </div>
  );
};

export default ClientPage;
