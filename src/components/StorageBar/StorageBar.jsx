import "./StorageBar.css";

const StorageBar = ({
  used = 70,
  total = "100 GB",
  available = "30 GB",
}) => {
  return (
    <div className="storage-card">

      <div className="storage-header">
        <h3>Storage</h3>
        <span>{used}% Used</span>
      </div>

      <div className="storage-progress">
        <div
          className="storage-fill"
          style={{ width: `${used}%` }}
        ></div>
      </div>

      <div className="storage-details">

        <div className="storage-item">
          <h4>Total Space</h4>
          <p>{total}</p>
        </div>

        <div className="storage-item">
          <h4>Available</h4>
          <p>{available}</p>
        </div>

      </div>

    </div>
  );
};

export default StorageBar;