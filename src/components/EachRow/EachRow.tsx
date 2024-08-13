import { FC, useState } from "react";
import { IPropNode } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSelected } from "../../store/Slices/selectedSlice/selectedSlice";
import styles from "./EachRow.module.css";
import AddIcon from "../../Icons/AddIcon/AddIcon";
import EditIcon from "../../Icons/EditIcon/EditIcon";
import DeleteIcon from "../../Icons/DeleteIcon/DeleteIcon";
import { axiosForCreating } from "../../store/Slices/treeSlice/api/axiosForCreateing";
import Modal from "../Modal";
import { axiosForEditing } from "../../store/Slices/treeSlice/api/axiosForEditing";
import { axiosForDeleting } from "../../store/Slices/treeSlice/api/axiosForDeleting";
import { axiosTree } from "../../store/Slices/treeSlice/api/axiosForTree";
import { TREE_NAME } from "../../config";


const EachRow: FC<IPropNode> = ({ node }) => {
  const isRoot = node.name === "newTree";
  const selected = useAppSelector((state) => state.selected);
  const tree = useAppSelector((state) => state.tree);
  const dispatch = useAppDispatch();
  const [opened, setOpened] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const hasChildren = node.children.length > 0;


  const handleOnclick = () => {
    setOpened((prev) => !prev);
    dispatch(setSelected(node));
  };

  const handleOnClickAdding = (
    treeName: string,
    parentNodeId: number,
    nodeName: string
  ) => {
    dispatch(axiosForCreating({ nodeName, parentNodeId, treeName }));
    dispatch(axiosTree());
  };

  const handleOnClickingEditing = (
    treeName: string,
    nodeId: number,
    newNodeName: string
  ) => {
    dispatch(axiosForEditing({ treeName, nodeId, newNodeName }));
    dispatch(axiosTree());
  };

  const handleOnClickingDeleting = (treeName: string, nodeId: number) => {
    dispatch(axiosForDeleting({ treeName, nodeId }));
  };

  const handleOnIconClick = (iconType: string) => {
    setActiveIcon(iconType);
    setIsModalOpen(true);
  };

  const handleOnSubmit = async (inputValue: string, iconType: string) => {
    if (iconType === "add") {
      handleOnClickAdding("newTree", node.id, inputValue);
    }
    if (iconType === "edit") {
      handleOnClickingEditing("newTree", selected.id, inputValue);
    }
  };

  if (tree.isLoading) return <>...Loading</>;
  if (tree.isError) return <>...Error</>;
  return (
    <div>
      <div
        onClick={handleOnclick}
        className={selected.name === node.name ? styles.selected : styles.row}
      >
        <div style={{ marginTop: "5px" }}>
          {hasChildren && ">"}
          {node.name}
        </div>
        {isRoot ? (
          <AddIcon onClick={() => handleOnIconClick("add")} />
        ) : (
          <div style={{ display: "flex" }}>
            <AddIcon onClick={() => handleOnIconClick("add")} />
            <EditIcon onClick={() => handleOnIconClick("edit")} />
            <DeleteIcon
              onClick={() => handleOnClickingDeleting(TREE_NAME, selected.id)}
            />
          </div>
        )}
      </div>
      {hasChildren &&
        opened &&
        node.children.map((eachChild) => (
          <div key={eachChild.id} className={styles.child}>
            <EachRow node={eachChild} />
          </div>
        ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleOnSubmit}
        iconType={activeIcon || ""}
      />
    </div>
  );
};

export default EachRow;
