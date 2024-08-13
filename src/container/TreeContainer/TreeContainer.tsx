import { FC } from "react";
import { IPropTree } from "../../types/types";
import EachRow from "../../components/EachRow";

const TreeContainer: FC<IPropTree> = ({ tree }) => {
  return <EachRow node={tree} />;
};

export default TreeContainer;
