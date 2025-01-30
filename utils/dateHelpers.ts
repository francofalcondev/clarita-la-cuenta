import { format, parse } from "date-fns";
import { enUS, es } from "date-fns/locale";

const now = new Date();
const formattedDate = format(now, "MMM dd, yyyy, HH:mm", { locale: es });
export const parsedDate = parse(
  formattedDate,
  "MMM dd, yyyy, HH:mm",
  new Date(),
);
