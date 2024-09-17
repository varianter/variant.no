import { QueryResponseInitial } from "@sanity/react-loader";
import { PageBuilder } from "studio/lib/interfaces/pages";

export interface PreviewProps {
  initialData: QueryResponseInitial<PageBuilder>;
  sectionIndex: number;
}
