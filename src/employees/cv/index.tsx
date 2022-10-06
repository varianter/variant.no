import { InferGetStaticPropsType } from "next";
import { getStaticProps } from "pages/ansatte/cv/[name]";

type Props = InferGetStaticPropsType<typeof getStaticProps>

const CV = ({ employee }: Props) => {
    return <p>{ JSON.stringify(employee) } </p>
}

export default CV;