import React, { useState, useEffect, useRef } from 'react';
import { Funnel, ArrowUp, Plus, Trash2, Pen, Eye, X, ArrowLeft, ArrowRight } from 'lucide-react';

// CityForm Component
const CityForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    cityId: '',
    cityCode: '',
    city: '',
    status: '',
    district: '',
    zone: '',
    payrollCityCode: '',
    syncStatus: '',
    syncDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="city-form-container">
      <div className="form-header">
        <h2 className="form-title">Add New Field</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="cityId">City ID</label>
            <input
              type="text"
              id="cityId"
              name="cityId"
              value={formData.cityId}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="cityCode">City Code</label>
            <input
              type="text"
              id="cityCode"
              name="cityCode"
              value={formData.cityCode}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City Name</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="district">District ID</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zone">Zone ID</label>
            <input
              type="text"
              id="zone"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="payrollCityCode">Payroll City Code</label>
            <input
              type="text"
              id="payrollCityCode"
              name="payrollCityCode"
              value={formData.payrollCityCode}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="syncStatus">Sync Status</label>
            <input
              type="text"
              id="syncStatus"
              name="syncStatus"
              value={formData.syncStatus}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="syncDate">Sync Date</label>
            <input
              type="text"
              id="syncDate"
              name="syncDate"
              value={formData.syncDate}
              onChange={handleChange}
              placeholder="Enter Value"
              required
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Add Field
          </button>
        </div>
      </form>
    </div>
  );
};

// Main CityManagementPage Component
const CityManagementPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    city: '',
    status: '',
    payrollCityCode: '',
  });

  const [cities, setCities] = useState([
    { cityId: 1, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 2, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 3, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 4, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 5, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 6, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
    { cityId: 7, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: 'Updated', syncDate: 'Updated' },
  ]);

  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      city: '',
      status: '',
      payrollCityCode: '',
    });
  };

  const filteredCities = cities.filter((city) => {
    return (
      (!filters.city || city.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.status || city.status === filters.status) &&
      (!filters.payrollCityCode || city.payrollCityCode === filters.payrollCityCode)
    );
  });

  const appliedFilterCount = Object.values(filters).filter((value) => value !== '').length;

  const handleAddCity = (newCity) => {
    const nextId = cities.length + 1;
    setCities((prev) => [...prev, { ...newCity, cityId: nextId, syncDate: newCity.syncDate || 'Updated', syncStatus: newCity.syncStatus || 'Updated' }]);
    setShowForm(false);
  };

  return (
    <div className="city-page-container" style={{ minHeight: '400px', width: '100%' }}>
      {!showForm && (
        <div className="page-header">
          <h2 className="page-title">City</h2>
          <div className="page-actions">
            <div className="filter-container" ref={filterRef}>
              <button
                className="action-button"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Funnel className="icon" style={{ marginRight: '6px' }} />
                Filter
                {appliedFilterCount > 0 && (
                  <span className="filter-badge">{appliedFilterCount}</span>
                )}
              </button>
              {isFilterOpen && (
                <div className="filter-dropdown">
                  <div className="filter-header">
                    <h3>Filters</h3>
                    <button onClick={() => setIsFilterOpen(false)} className="close-filter">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="city-filter">City</label>
                    <input
                      type="text"
                      id="city-filter"
                      name="city"
                      value={filters.city}
                      onChange={handleFilterChange}
                      placeholder="Filter by City"
                    />
                  </div>
                  <div className="filter-group">
                    <label htmlFor="status-filter">Status</label>
                    <select
                      id="status-filter"
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                    >
                      <option value="">All</option>
                      <option value="Updated">Updated</option>
                      <option value="Pending">Pending</option>
                    </select>
                  </div>
                  <div className="filter-group">
                    <label htmlFor="payrollCityCode-filter">Payroll City Code</label>
                    <input
                      type="text"
                      id="payrollCityCode-filter"
                      name="payrollCityCode"
                      value={filters.payrollCityCode}
                      onChange={handleFilterChange}
                      placeholder="Filter by Payroll City Code"
                    />
                  </div>
                  <div className="filter-actions">
                    <button onClick={clearFilters} className="clear-filter-button">
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="action-button">
              <ArrowUp className="icon" style={{ marginRight: '6px' }} />
              Export
            </button>
            <button
              className="action-button primary"
              onClick={() => setShowForm(true)}
            >
              <Plus className="icon" style={{ marginRight: '6px' }} />
              Add New Field
            </button>
          </div>
        </div>
      )}

      {showForm ? (
        <CityForm 
          onSubmit={handleAddCity} 
          onCancel={() => setShowForm(false)}
        />
      ) : (
        <>
          <table className="table-container">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>City ID</th>
                <th>City Code</th>
                <th>City</th>
                <th>Status</th>
                <th>District ID</th>
                <th>Zone ID</th>
                <th>Payroll City Code</th>
                <th>Sync Status</th>
                <th>Sync Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredCities.map((row) => (
                <tr key={row.cityId}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>{row.cityId}</td>
                  <td>{row.cityCode}</td>
                  <td>{row.city}</td>
                  <td>{row.status}</td>
                  <td>{row.district}</td>
                  <td>{row.zone}</td>
                  <td>{row.payrollCityCode}</td>
                  <td>{row.syncStatus}</td>
                  <td>{row.syncDate}</td>
                  <td>
                    <div className="table-actions">
                      <span className="table-action">
                        <Trash2 className="icon" />
                      </span>
                      <span className="table-action">
                        <Pen className="icon" />
                      </span>
                      <span className="table-action">
                        <Eye className="icon" /> View
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="pagination-button previous">
              <ArrowLeft className="icon" />
              <span>Previous</span>
            </button>

            <div className="pagination-content">
              <div className="pagination-numbers">
                {[1, 2, 3, '...', 8, 9, 10].map((page, index) => (
                  <button key={index} className={`pagination-button ${page === 1 ? 'active' : ''}`}>
                    {page}
                  </button>
                ))}
              </div>
            </div>

            <button className="pagination-button next">
              Next <ArrowRight />
            </button>
          </div>
        </>
      )}

      <style>{`
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0px;
          background-color: rgba(255, 255, 255, 1);
          padding: 8px 16px;
          width: 100%;
        }

        .page-title {
          font-size: 24px;
          font-weight: 700;
        }

        .page-actions {
          display: flex;
          gap: 8px;
        }

        .filter-container {
          position: relative;
        }

        .action-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background-color: #f0f0f0;
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: #444;
          position: relative;
        }

        .action-button.primary {
          background-color: #007bff;
          color: #fff;
          border-color: #007bff;
        }

        .filter-badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: #ff4d4f;
          color: #fff;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
          border: 2px solid #fff;
        }

        .filter-dropdown {
          position: absolute;
          top: 40px;
          left: 0;
          background-color: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 16px;
          padding-right: 35px;
          width: 250px;
          z-index: 1000;
        }

        .filter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .filter-header h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        .close-filter {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .filter-group {
          margin-bottom: 16px;
        }

        .filter-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #444;
        }

        .filter-group input,
        .filter-group select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 14px;
          color: #444;
        }

        .filter-actions {
          display: flex;
          justify-content: flex-end;
        }

        .clear-filter-button {
          padding: 8px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          background-color: #f0f0f0;
          cursor: pointer;
          font-size: 14px;
          color: #444;
        }

        .table-container {
          width: 103%;
          padding: 8px 16px;
          border-collapse: collapse;
          background-color: #f8f9fa;
        }

        .table-container th,
        .table-container td {
          padding: 12px;
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
        }

        .table-container th {
          background-color: #f8f9fa;
          font-weight: 600;
        }

        .table-container thead tr {
          box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        .table-actions {
          display: inline-flex;
          align-items: center;
          gap: 25px;
        }

        .table-action {
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          color: #666;
        }

        .pagination {
          display: flex;
          align-items: center;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          z-index: 100;
          background-color: #f0f0f0;
        }

        .pagination-content {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-left: 250px;
        }

        .pagination-button {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          padding: 8px 12px;
          cursor: pointer;
          background-color: #f0f0f0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .pagination-button .icon {
          font-size: 16px;
        }

        .pagination-numbers {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pagination-numbers button {
          width: 40px;
          height: 40px;
          background: rgba(245, 247, 255, 1);
          color: #3425FF;
          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .previous {
          position: absolute;
          left: 20px;
          font-size: 14px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid black;
          margin-left: 260px;
        }

        .next {
          position: absolute;
          right: 20px;
          font-size: 14px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid black;
          margin-right: 65px;
        }

        /* Form Styling */
        .city-form-container {
          position: absolute;
          top: 214px;
          left: 630px;
          width: 480px;
          height: 320px;
          background: rgba(255, 255, 255, 1);
          border-radius: 12px;
           padding: 24px 24px 0 24px;
          box-shadow: 0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08);
          overflow-y: auto; /* Allow scrolling if content overflows */
          box-sizing: border-box;
          
        }

        .form-header {
          margin-bottom: 16px;
        }

        .form-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .form-row {
          display: flex;
          gap: 32px;
          margin-bottom: 12px;
        }

        .form-group {
          flex: 1;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 6px;
          color: #444;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 6px 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          color: #444;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 16px;
        }

        .cancel-button,
        .submit-button {
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          text-transform: uppercase;
        }

        .cancel-button {
          background-color: #ff4d4f;
          color: #fff;
        }

        .submit-button {
          background-color: #007bff;
          color: #fff;
        }

        .cancel-button:hover,
        .submit-button:hover {
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
};

export default CityManagementPage;