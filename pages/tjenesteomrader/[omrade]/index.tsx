import { GetStaticPaths, GetStaticProps } from 'next';
import { getMarkdownObject } from 'src/tjenesteomrader/utils/tjenesteomradeFunctions';
import {
  tjenesteomradePath,
  TjenesteomradeProps,
} from 'src/tjenesteomrader/utils/tjenesteomradeTypes';

export { default } from 'src/tjenesteomrader/areas';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = tjenesteomradePath.map((omrade) => ({
    params: { omrade },
  }));
  return { paths: paths, fallback: false };
};

export const getStaticProps: GetStaticProps<TjenesteomradeProps> = async (
  context,
) => {
  if (context?.params!.omrade) {
    const filePath = context?.params!.omrade.toString();
    var markdown = await getMarkdownObject(filePath);
    return {
      props: {
        fileContents: markdown.fileContents,
        name: markdown.name,
        color: markdown.color,
      },
    };
  }

  return {
    notFound: true,
  };
};
