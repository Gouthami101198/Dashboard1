import { useState } from "react";
import "./FolderTree.css";

import {
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

import { FaFolder } from "react-icons/fa";

const FolderNode = ({ folder }) => {
  const [open, setOpen] = useState(folder.open || false);

  return (
    <li className="tree-node">

      <div
        className="tree-item"
        onClick={() => setOpen(!open)}
      >
        <div className="tree-left">

          {folder.children && folder.children.length > 0 ? (
            open ? <FiChevronDown /> : <FiChevronRight />
          ) : (
            <span className="tree-space"></span>
          )}

          <FaFolder className="tree-folder-icon" />

          <span>{folder.name}</span>

        </div>
      </div>

      {open && folder.children && (
        <ul className="tree-children">
          {folder.children.map((child) => (
            <FolderNode
              key={child.id}
              folder={child}
            />
          ))}
        </ul>
      )}

    </li>
  );
};

const FolderTree = ({ folders }) => {
  return (
    <ul className="folder-tree">
      {folders.map((folder) => (
        <FolderNode
          key={folder.id}
          folder={folder}
        />
      ))}
    </ul>
  );
};

export default FolderTree;