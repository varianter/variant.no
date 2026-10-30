import { FooterIllustration } from "src/components/navigation/footer/footerIllustration/FooterIllustration";
import ContactBox from "src/components/sections/contact-box/ContactBox";
import { getDraftModeInfo } from "src/utils/draftmode";
import { ColorPalette, ContactBoxSection } from "studio/lib/interfaces/pages";
import { FOOTER_COLOR_QUERY } from "studio/lib/queries/siteSettings";
import { loadStudioQuery } from "studio/lib/store";

import { defaultContactBox } from "./defaultContactBox";
import styles from "./footerContactBox.module.css";

interface FooterContactBoxProps {
  language: string;
  path: string[];
  /** Page-specific box. Falls back to the default box. */
  section?: ContactBoxSection | null;
  /** Show only the illustrations, e.g. on pages with their own contact block. */
  hideBox?: boolean;
}

export default async function FooterContactBox({
  language,
  path,
  section,
  hideBox = false,
}: FooterContactBoxProps) {
  const { perspective } = await getDraftModeInfo();
  const palette = (
    await loadStudioQuery<ColorPalette[] | null>(
      FOOTER_COLOR_QUERY,
      { language },
      { perspective },
    )
  ).data;
  const pathname = `/${path.join("/")}`;
  const color =
    palette?.find((item) => pathname.includes(item.slug))?.footerWidgetColor ||
    "#FFD02F";

  return (
    <div className={styles.footerContactBox}>
      <FooterIllustration color={color} />
      {!hideBox && (
        <div className={styles.box}>
          <ContactBox
            section={section ?? defaultContactBox(language)}
            language={language}
          />
        </div>
      )}
    </div>
  );
}
