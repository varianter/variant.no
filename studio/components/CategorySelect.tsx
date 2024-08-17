import React, { useEffect, useState } from "react";
import { Select } from "@sanity/ui";
import { useClient, set, StringInputProps, PatchEvent } from "sanity";
import { fetchWithToken } from "studio/lib/fetchWithToken";

interface Category {
  _key: string;
  name: string;
}

interface CategorySelectorProps extends StringInputProps {}

const CategorySelector = React.forwardRef<
  HTMLSelectElement,
  CategorySelectorProps
>((props, ref) => {
  const { value, onChange } = props;
  const client = useClient();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const result = await fetchWithToken<Category[]>(
        `*[_type == "blog"][0].categories`
      );

      setCategories(result || []);
    }
    fetchCategories();
  }, [client]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(PatchEvent.from(set(event.target.value)));
  };

  return (
    <Select
      ref={ref}
      value={value || ""}
      onChange={handleChange}
      placeholder="Select a category"
    >
      <option value="" disabled>
        Select a category
      </option>
      {categories.map((category) => (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      ))}
    </Select>
  );
});

CategorySelector.displayName = "CategorySelector";

export default CategorySelector;
