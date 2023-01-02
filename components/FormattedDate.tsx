import { useState, useEffect } from "react";
import { dateFormatter } from "../utils/dateFormatter";

export const FormattedDate = ({ date }: { date: string }) => {
  const [formattedDate, setFormattedDate] = useState(date);

  useEffect(() => setFormattedDate(dateFormatter(date)), []);

  return <>{formattedDate}</>;
};
