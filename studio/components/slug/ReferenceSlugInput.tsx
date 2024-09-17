// components/ReferenceSlugInput.tsx

import { TextInput } from "@sanity/ui";
import React, { useEffect, useState } from "react";
import { PatchEvent, set, unset, useClient } from "sanity";

interface ReferenceSlugInputProps {
  value?: string;
  readOnly?: boolean;
  schemaType: {
    title: string;
    name: string;
    description?: string;
  };
  onChange: (event: PatchEvent) => void;
  renderDefault: (props: any) => React.ReactNode;
  elementProps: {
    id: string;
    ref: React.Ref<HTMLInputElement>;
    onBlur: () => void;
    onFocus: () => void;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
  document: {
    internalLink?: {
      _ref: string;
    };
  };
}

const ReferenceSlugInput: React.FC<ReferenceSlugInputProps> = (props) => {
  const { value, readOnly, onChange, elementProps, document } = props;
  const [slug, setSlug] = useState<string | null>(value || null);
  const client = useClient();

  useEffect(() => {
    if (document?.internalLink?._ref) {
      client
        .fetch<
          string | null
        >("*[_id == $id][0].slug.current", { id: document.internalLink._ref })
        .then((fetchedSlug) => {
          setSlug(fetchedSlug || null);
          onChange(PatchEvent.from(fetchedSlug ? set(fetchedSlug) : unset()));
        });
    }
  }, [document?.internalLink?._ref, client, onChange]);

  return (
    <TextInput
      readOnly={readOnly}
      value={slug || ""}
      ref={elementProps.ref}
      onBlur={elementProps.onBlur}
      onFocus={elementProps.onFocus}
      onChange={(event) => {
        setSlug(event.currentTarget.value);
        onChange(
          PatchEvent.from(
            event.currentTarget.value
              ? set(event.currentTarget.value)
              : unset(),
          ),
        );
      }}
    />
  );
};

export default ReferenceSlugInput;
