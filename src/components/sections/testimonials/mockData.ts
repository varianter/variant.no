import { TestimonialsSection } from "studio/lib/payloads/pages";
import alex from "../../../stories/assets/alex.jpg";
import mika from "../../../stories/assets/mika.jpg";
import vince from "../../../stories/assets/vince.jpg";

export const testimonialsMockData: TestimonialsSection = {
  _type: "testimonials",
  _key: "b69121269c53",
  basicTitle: "Take it from our customers",
  listOfTestimonials: [
    {
      _type: "testimony",
      _key: "f04d406056f0",
      image: {
        _key: "5b1236abdc4c",
        _type: "image",
        alt: "Oline Norkvinn",
        src: alex,
      },
      subTitle: "CEO — Exciting Company",
      basicTitle: "Oline Norkvinn",
      richText: [
        {
          _type: "block",
          _key: "272e06bbca76",
          children: [
            {
              _key: "dcf62ae1c1f10",
              _type: "span",
              marks: [],
              text: "Wow wow I just love Energi.AI",
            },
          ],
          style: "h3",
        },
        {
          _type: "block",
          _key: "aeaf84e0d01a",
          children: [
            {
              _key: "c0d1a8f2b3d4",
              _type: "span",
              marks: [],
              text: "I just tried Energi.AI's carbon accounting system and it's great! It lets me account my carbon without the hassle of manually uploading and calculating every single CO2e!",
            },
          ],
          style: "normal",
        },
        {
          _type: "block",
          _key: "bbf945a7e3b9",
          children: [
            {
              _key: "e6f4b6a5d1c2",
              _type: "span",
              marks: [],
              text: "Energi.AI has become my favorite company.",
            },
          ],
          style: "normal",
        },
      ],
    },
    {
      _type: "testimony",
      _key: "4ae892e5e21c",
      image: {
        _key: "5b1236abdc4c",
        _type: "image",
        alt: "Trym Johansen",
        src: mika,
      },
      subTitle: "CEO — Another Company",
      basicTitle: "Trym Johansen",
      richText: [
        {
          _type: "block",
          _key: "fb76b7d0e2f7",
          children: [
            {
              _key: "c4f5e6a7b8d9",
              _type: "span",
              marks: [],
              text: "Energi.AI has transformed our carbon accounting process.",
            },
          ],
          style: "h3",
        },
        {
          _type: "block",
          _key: "d2f1e0a9b3c4",
          children: [
            {
              _key: "e5f6a7b8c9d0",
              _type: "span",
              marks: [],
              text: "The system is incredibly user-friendly and has saved us so much time and effort.",
            },
          ],
          style: "normal",
        },
        {
          _type: "block",
          _key: "a4b3c2d1e5f6",
          children: [
            {
              _key: "d1c2e3f4a5b6",
              _type: "span",
              marks: [],
              text: "Highly recommend it to any company looking to streamline their sustainability efforts.",
            },
          ],
          style: "normal",
        },
      ],
    },
    {
      _type: "testimony",
      _key: "f04d406056f0",
      image: {
        _key: "5b1236abdc4c",
        _type: "image",
        alt: "Oline Norkvinn",
        src: vince,
      },
      subTitle: "Sustainability Manager",
      basicTitle: "Hanne Ulsrud",
      richText: [
        {
          _type: "block",
          _key: "272e06bbca76",
          children: [
            {
              _key: "dcf62ae1c1f10",
              _type: "span",
              marks: [],
              text: "Wow wow I just love Energi.AI",
            },
          ],
          style: "h3",
        },
        {
          _type: "block",
          _key: "aeaf84e0d01a",
          children: [
            {
              _key: "c0d1a8f2b3d4",
              _type: "span",
              marks: [],
              text: "I just tried Energi.AI's carbon accounting system and it's great! It lets me account my carbon without the hassle of manually uploading and calculating every single CO2e!",
            },
          ],
          style: "normal",
        },
        {
          _type: "block",
          _key: "bbf945a7e3b9",
          children: [
            {
              _key: "e6f4b6a5d1c2",
              _type: "span",
              marks: [],
              text: "Energi.AI has become my favorite company.",
            },
          ],
          style: "normal",
        },
      ],
    },
  ],
};
