import { GetStaticPaths, GetStaticProps } from 'next';
import { getMarkdownObject } from 'src/tjenesteomrader/utils/tjenesteomradeFunctions';
import {
  tjenesteomradePath,
  TjenesteomradeProp,
  TjenesteomradeProps,
} from 'src/tjenesteomrader/utils/tjenesteomradeTypes';

export { default } from 'src/tjenesteomrader/areas';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tjenesteomradePath.map((omrade) => ({
    params: { omrade },
  }));
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TjenesteomradeProp> = async (
  context,
) => {
  const metadata: TjenesteomradeProps = {
    fileContents: 'a',
    name: 'a',
    color: 'ffff',
  };
  let markdown = metadata;
  if (context?.params!.omrade != undefined) {
    const filePath = context?.params!.omrade.toString();
    markdown = await getMarkdownObject(filePath);
  }

  return {
    props: {
      prop: markdown,
    },
  };
};
