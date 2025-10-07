import React from "react";

import BonusGraphParent from "src/advanced-calculator/Graphs/BonusGraph";
import { RichText } from "src/components/richText/RichText";
import Text from "src/components/text/Text";
import { Benefit, BonusPage } from "studio/lib/interfaces/compensations";

interface BonusSectionProps {
  benefit: Benefit;
  yearlyBonusesForLocation?: BonusPage[];
}

const bonusSection = ({
  benefit,
  yearlyBonusesForLocation,
}: BonusSectionProps) => {
  return (
    <div>
      <Text type="titleL">{benefit.basicTitle}</Text>
      <RichText value={benefit.richText} />
      {yearlyBonusesForLocation && (
        <BonusGraphParent yearlyBonusesForLocation={yearlyBonusesForLocation} />
      )}
    </div>
  );
};

export default bonusSection;
