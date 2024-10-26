"use client";

import { useEffect, useState } from "react";

const Page = () => {
  const [number, setNumber] = useState(60);
  if(number>=0){

    const adding1 = () => {
        setNumber((prev) => prev>0 ? prev-20 : prev);
    };
      useEffect(() => {
          const interval = setInterval(adding1, 1000);
          return () => clearInterval(interval);
      }, []);
  }

  return (
    <div>
      <div>{number}</div>
    </div>
  );
};
export default Page;
