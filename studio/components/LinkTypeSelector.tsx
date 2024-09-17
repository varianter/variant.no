import { Box, Card, Flex, Grid, Text } from "@sanity/ui";
import React from "react";
import { PatchEvent, set } from "sanity";

interface LinkTypeSelectorProps {
  value?: string;
  onChange: (event: PatchEvent) => void;
}

const linkTypes = [
  { title: "Internal", value: "internal", icon: "🔗" },
  { title: "External", value: "external", icon: "🌐" },
  { title: "Email address", value: "email", icon: "✉️" },
  { title: "Phone number", value: "phone", icon: "📞" },
];

const LinkTypeSelector: React.FC<LinkTypeSelectorProps> = ({
  value,
  onChange,
}) => {
  const handleClick = (type: string) => {
    onChange(PatchEvent.from(set(type)));
  };

  return (
    <Grid columns={2} gap={3}>
      {linkTypes.map((type) => (
        <Card
          key={type.value}
          padding={3}
          radius={2}
          shadow={1}
          style={{
            cursor: "pointer",
            backgroundColor: value === type.value ? "#E3F2FD" : "white",
          }}
          onClick={() => handleClick(type.value)}
        >
          <Flex align="center">
            <Box marginRight={3}>{type.icon}</Box>
            <Text>{type.title}</Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
};

export default LinkTypeSelector;
