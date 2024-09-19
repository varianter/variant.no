import { ArrayOfObjectsInputProps, ObjectItem } from "sanity";

interface OrderedArrayOfObjectsInputProps extends ArrayOfObjectsInputProps {
  valueCompareFn: (a: ObjectItem, b: ObjectItem) => number;
}

export default function ValueOrderedArrayOfObjectsInput({
  valueCompareFn,
  ...defaultProps
}: OrderedArrayOfObjectsInputProps) {
  const orderedMembers = defaultProps.members.toSorted((a, b) => {
    // place error items at the end
    if (a.kind === "error") {
      if (b.kind === "error") {
        return 0;
      } else {
        return 1;
      }
    } else if (b.kind === "error") {
      return -1;
    }
    return valueCompareFn(a.item.value, b.item.value);
  });
  return defaultProps.renderDefault({
    ...defaultProps,
    members: orderedMembers,
  });
}
