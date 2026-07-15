import "./FileManager.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

import FolderSidebar from "../../components/FolderSidebar/FolderSidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import UploadButton from "../../components/UploadButton/UploadButton";
import FolderGrid from "../../components/FolderGrid/FolderGrid";
import FileGrid from "../../components/FileGrid/FileGrid";
import FileInfoPanel from "../../components/FileInfoPanel/FileInfoPanel";
import StorageBar from "../../components/StorageBar/StorageBar";

import { storageData } from "../../data/fileManagerData";

const FileManager = () => {
  const handleUpload = () => {
    alert("Upload button clicked!");
  };

  return (
    <div className="file-manager-page">

      {/* Left Dashboard Sidebar */}
      <Sidebar />

      <div className="file-manager-main">

        {/* Top Navbar */}
        <Navbar />

        <div className="file-manager-layout">

          {/* Folder Navigation */}
          <FolderSidebar />

          {/* Main Content */}
          <div className="file-manager-content">

            <div className="file-manager-top">

              <SearchBar />

              <UploadButton onUpload={handleUpload} />

            </div>

            <FolderGrid />

            <FileGrid />

            <StorageBar
              used={storageData.used}
              total={storageData.total}
              available={storageData.available}
            />

          </div>

          {/* Right Information Panel */}
          <FileInfoPanel />

        </div>

      </div>

    </div>
  );
};

export default FileManager;