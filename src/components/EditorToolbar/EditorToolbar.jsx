import "./EditorToolbar.css";

import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiList,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignRight,
  FiLink,
  FiImage,
  FiPaperclip,
  FiSmile,
} from "react-icons/fi";

const EditorToolbar = () => {
  return (
    <div className="editor-toolbar">

      <button title="Bold">
        <FiBold />
      </button>

      <button title="Italic">
        <FiItalic />
      </button>

      <button title="Underline">
        <FiUnderline />
      </button>

      <div className="divider"></div>

      <button title="Bullet List">
        <FiList />
      </button>

      <button title="Align Left">
        <FiAlignLeft />
      </button>

      <button title="Align Center">
        <FiAlignCenter />
      </button>

      <button title="Align Right">
        <FiAlignRight />
      </button>

      <div className="divider"></div>

      <button title="Insert Link">
        <FiLink />
      </button>

      <button title="Insert Image">
        <FiImage />
      </button>

      <button title="Attach File">
        <FiPaperclip />
      </button>

      <button title="Emoji">
        <FiSmile />
      </button>

    </div>
  );
};

export default EditorToolbar;