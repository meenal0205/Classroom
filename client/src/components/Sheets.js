import { useRouter } from "next/router";
import React from "react";

const Sheets = ({ id }) => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div
      className="m-4 p-4 bg-white shadow-xl rounded-lg cursor-pointer"
      onClick={() => router.push(`${pathname.slice(0, 8)}/assignment?id=${id}`)}
    >
      <h1 className="text-lg font-semibold">Assignment</h1>
    </div>
  );
};

export default Sheets;
