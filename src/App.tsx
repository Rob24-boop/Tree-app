import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { axiosTree } from "./store/Slices/treeSlice/api/axiosForTree";
import TreeContainer from "./container/TreeContainer";

const App = () => {
  const dispatch = useAppDispatch();
  const tree = useAppSelector((state) => state.tree);

  useEffect(() => {
    dispatch(axiosTree());
  }, []);
  if (tree.data) {
    return <TreeContainer tree={tree.data} />;
  } else "You haven't a tree yet";
};

export default App;
