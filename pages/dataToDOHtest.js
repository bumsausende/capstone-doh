import { getToDOHs } from "../utils/DataDOH/getDOHData";

const dataToDOHtest = ({ toDOHs }) => {
  console.log(toDOHs);
  return <div>
  <h1>what toDOH!</h1>
  <p>
    <small>(show DB DOH)</small>
  </p>
  <ul>
    {toDOHs.map((toDOH) => (
      <li key={toDOH}>
        <h2>{toDOH.name}</h2>
        <h3>{toDOH.description1}</h3>
        <p>{toDOH.isInside}</p>
      </li>
    ))}
  </ul>
</div>
};

export default dataToDOHtest;

export async function getStaticProps() {
  const res = await getToDOHs();
  const toDOHs = await JSON.parse(JSON.stringify(res));
  if (!toDOHs) {
    console.log("failed to fetch item Data");
    return {
      notFound: true,
    };
  }

  return {
    props: { toDOHs },
  };
}
