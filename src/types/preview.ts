import { QueryResponseInitial } from "@sanity/react-loader";
import { PageBuilder } from "studio/lib/payloads/pages";

export interface PreviewProps {
  initialData: QueryResponseInitial<PageBuilder>;
  sectionIndex: number;
}
