export interface IRow {
  id: number;
  name: string;
  children: IRow[];
}

export interface IPropTree {
  tree: IRow;
}

export interface IPropNode {
  node: IRow;
}

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newItem: string, iconType: string) => void;
  iconType: string;
}

export interface IIconProp {
  onClick: React.MouseEventHandler<SVGSVGElement> | undefined;
}

export interface ICreateArgs {
  treeName: string;
  parentNodeId: number;
  nodeName: string;
}

export interface IDeleteArgs {
  treeName: string;
  nodeId: number;
}

export interface IEditArgs {
  treeName: string;
  nodeId: number;
  newNodeName: string;
}

export interface IInitialTree {
  data: IRow | null;
  isError: boolean;
  isLoading: boolean;
}
