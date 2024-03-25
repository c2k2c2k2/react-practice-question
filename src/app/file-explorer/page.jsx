"use client";
import React, { useState } from "react";

import { Folder } from "../../components/file-explorer/Folder";
import useTraverseTree from "../../hooks/use-traverse-tree";
import explorer from "../../data/fileExplorerData";

const FIleExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default FIleExplorer;
