import { Flex } from "@chakra-ui/layout";
import { get } from "../lib/api/apiClient"
  
function toLUV ({ toDOHs }) {

return (
<div>
  {toDOHs.filter(toDOH => toDOH.isDone === true).map(doneToDOH => (
    <li key={toDOHs}>
      {doneToDOH.name}
    </li>
  ))}
</div>
)}

  
export async function getServerSideProps(context) {
    const toDOHs = await get('toDOH');
  
    return {
      props: { toDOHs },
    };
  }
  export default toLUV;