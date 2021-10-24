/** @format */

import React, { useEffect, useState } from "react";
import get from "../services";

export default function Footer({ attributionText }) {
  const [attributionTextData, setAtributionText] = useState([]);

  useEffect(() => {
    get().then((data) => {
      // console.log(data);
      setAtributionText(data.attributionText);
    });
  }, []);

  return (
    <div>
      <h4>Biljana Pavlovic</h4>
      <p>{attributionTextData}</p>
    </div>
  );
}
