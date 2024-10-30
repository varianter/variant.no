"use client";

import { useEffect } from "react";
import { StringInputProps, set } from "sanity";

export default function EmptySectionInput(props: StringInputProps) {
  useEffect(() => {
    // set hidden placeholder field to some arbitrary value
    // to ensure the section is created
    props.onChange(set("placeholder"));
  }, [props]);

  return <></>;
}
