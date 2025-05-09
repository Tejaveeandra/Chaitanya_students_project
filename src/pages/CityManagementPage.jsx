import React, { useState, useEffect, useRef } from 'react';
import { Funnel, ArrowUp, Plus, Trash2, Pen, Eye, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { useFormContext } from '../components/FormContext';
import { IoIosFunnel } from 'react-icons/io';

// CityForm Component (for adding new fields)
const CityForm = ({ onSubmit, onCancel, onChange }) => {
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
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="city-form-container">
      <div className="form-header">
        <h2 className="form-title">Add New Field</h2>
        <button className="close-button" onClick={onCancel}>
          <X size={16} />
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="cityId">City ID</label>
            <input
              type="text"
              id="cityId"
              name="cityId"
              value={formData.cityId}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="cityCode">City Code</label>
            <input
              type="text"
              id="cityCode"
              name="cityCode"
              value={formData.cityCode}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group large-input">
            <label htmlFor="city">City Name</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="district">District ID</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group large-input">
            <label htmlFor="zone">Zone ID</label>
            <input
              type="text"
              id="zone"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group large-input">
            <label htmlFor="payrollCityCode">Payroll City Code</label>
            <input
              type="text"
              id="payrollCityCode"
              name="payrollCityCode"
              value={formData.payrollCityCode}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncStatus">Sync Status</label>
            <input
              type="text"
              id="syncStatus"
              name="syncStatus"
              value={formData.syncStatus}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncDate">Sync Date</label>
            <input
              type="text"
              id="syncDate"
              name="syncDate"
              value={formData.syncDate}
              onChange={handleChange}
              placeholder="Enter Value"
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

// CityViewForm Component (for viewing city details)
const CityViewForm = ({ city, onDelete, onEdit, onClose }) => {
  return (
    <div className="city-form-container">
      <div className="form-header">
        <h2 className="form-title">View</h2>
        <button className="close-button" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
      <div>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="cityId">City ID</label>
            <input
              type="text"
              id="cityId"
              name="cityId"
              value={city.cityId}
              readOnly
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="cityCode">City Code</label>
            <input
              type="text"
              id="cityCode"
              name="cityCode"
              value={city.cityCode}
              readOnly
            />
          </div>
          <div className="form-group large-input">
            <label htmlFor="city">City Name</label>
            <input
              type="text"
              id="city"
              name="city"
              value={city.city}
              readOnly
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="status">Status</label>
            <input
              type="text"
              id="status"
              name="status"
              value={city.status}
              readOnly
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="district">District ID</label>
            <input
              type="text"
              id="district"
              name="district"
              value={city.district}
              readOnly
            />
          </div>
          <div className="form-group large-input">
            <label htmlFor="zone">Zone ID</label>
            <input
              type="text"
              id="zone"
              name="zone"
              value={city.zone}
              readOnly
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group large-input">
            <label htmlFor="payrollCityCode">Payroll City Code</label>
            <input
              type="text"
              id="payrollCityCode"
              name="payrollCityCode"
              value={city.payrollCityCode}
              readOnly
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncStatus">Sync Status</label>
            <input
              type="text"
              id="syncStatus"
              name="syncStatus"
              value={city.syncStatus}
              readOnly
            />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncDate">Sync Date</label>
            <input
              type="text"
              id="syncDate"
              name="syncDate"
              value={city.syncDate}
              readOnly
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="button" className="delete-button" onClick={onDelete}>
            Delete
          </button>
          <button type="button" className="edit-button" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

// Main CityManagementPage Component
const CityManagementPage = () => {
  const { setIsFormOpen } = useFormContext();
  const [showForm, setShowForm] = useState(false);
  const [showViewForm, setShowViewForm] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);
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
    { cityId: 7, cityCode: 'Andhra Pradesh', city: 'Guntur', state: 'Andhra Pradesh', district: 'Updated', zone: 'Updated', payrollCityCode: '01', status: 'Updated', syncStatus: "Updated", syncDate: 'Updated' },
  ]);

  const [previewCity, setPreviewCity] = useState(null);

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

  useEffect(() => {
    setIsFormOpen(showForm || showViewForm);
    return () => setIsFormOpen(false);
  }, [showForm, showViewForm, setIsFormOpen]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({ city: '', status: '', payrollCityCode: '' });
  };

  const filteredCities = cities.filter((city) => {
    return (
      (!filters.city || city.city.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.status || city.status === filters.status) &&
      (!filters.payrollCityCode || city.payrollCityCode === filters.payrollCityCode)
    );
  });

  const handleAddCity = (newCity) => {
    const nextId = cities.length + 1;
    setCities((prev) => [...prev, { ...newCity, cityId: nextId, syncDate: newCity.syncDate || 'Updated', syncStatus: newCity.syncStatus || 'Updated' }]);
    setPreviewCity(null);
    setShowForm(false);
  };

  const handleFormChange = (data) => {
    setPreviewCity(data);
  };

  const handleViewCity = (city) => {
    setSelectedCity(city);
    setShowViewForm(true);
  };

  const handleDeleteCity = () => {
    if (selectedCity) {
      setCities((prev) => prev.filter((city) => city.cityId !== selectedCity.cityId));
      setShowViewForm(false);
      setSelectedCity(null);
    }
  };

  const handleEditCity = () => {
    // For now, we'll just close the view form. You can extend this to open an edit form if needed.
    setShowViewForm(false);
    setSelectedCity(null);
  };

  return (
    <div className="city-page-container" style={{ minHeight: '400px', width: '100%' }}>
      {!showForm && !showViewForm && (
        <div className="page-header">
          <h2 className="page-title">City</h2>
          <div className="page-actions">
            <div className="filter-container" ref={filterRef}>
              <button className="action-button" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                {Object.values(filters).some((value) => value !== '') ? (
                  <IoIosFunnel className="icon" style={{ marginRight: '6px', width:'24', height:'24' }} />
                ) : (
                  <Funnel className="icon" style={{ marginRight: '6px',width:'24', height:'24'}} />
                )}
                Filter
                {Object.values(filters).filter((value) => value !== '').length > 0 && (
                  <span className="filter-badge">{Object.values(filters).filter((value) => value !== '').length}</span>
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
                    <select id="status-filter" name="status" value={filters.status} onChange={handleFilterChange}>
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
                  <div className="form-actions">
                    <button onClick={clearFilters} className="clear-filter-button">
                      Clear All
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button className="action-button">
              <ArrowUp className="icon" style={{ marginRight: '6px',width:'24',height:'24' }} />
              Export
            </button>
            <button className="action-button primary" onClick={() => setShowForm(true)}>
              <Plus className="icon" style={{ marginRight: '6px',width:'24', height:'24' }} />
              Add New Field
            </button>
          </div>
        </div>
      )}

      {showForm ? (
        <CityForm
          onSubmit={handleAddCity}
          onCancel={() => {
            setShowForm(false);
            setPreviewCity(null);
          }}
          onChange={handleFormChange}
        />
      ) : showViewForm ? (
        <CityViewForm
          city={selectedCity}
          onDelete={handleDeleteCity}
          onEdit={handleEditCity}
          onClose={() => {
            setShowViewForm(false);
            setSelectedCity(null);
          }}
        />
      ) : (
        <>
          <div className="table-wrapper">
            <div className="table-inner">
              <table className="table-container">
                <thead className="Table_head">
                  <tr>
                    <th className="checkbox-column">
                      <input type="checkbox" />
                    </th>
                    <th className="city-id-column">City ID</th>
                    <th className="city-code-column">City Code</th>
                    <th className="city-column">City</th>
                    <th className="status-column">Status</th>
                    <th className="district-id-column">District ID</th>
                    <th className="zone-id-column">Zone ID</th>
                    <th className="payroll-city-code-column">Payroll City Code</th>
                    <th className="sync-status-column">Sync Status</th>
                    <th className="sync-date-column">Sync Date</th>
                    <th className="action-column">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {[...filteredCities, ...(previewCity ? [{ ...previewCity, cityId: cities.length + 1 }] : [])].map((row) => (
                    <tr key={row.cityId || 'preview'}>
                      <td className="checkbox-column">
                        <input type="checkbox" disabled={row.cityId === undefined} />
                      </td>
                      <td className="city-id-column">{row.cityId || 'Preview'}</td>
                      <td className="city-code-column">{row.cityCode}</td>
                      <td className="city-column">{row.city}</td>
                      <td className="status-column">{row.status}</td>
                      <td className="district-id-column">{row.district}</td>
                      <td className="zone-id-column">{row.zone}</td>
                      <td className="payroll-city-code-column">{row.payrollCityCode}</td>
                      <td className="sync-status-column">{row.syncStatus}</td>
                      <td className="sync-date-column">{row.syncDate}</td>
                      <td className="action-column">
                        {row.cityId ? (
                          <div className="table-actions">
                            <span className="table-action">
                              <Trash2 className="icon" />
                            </span>
                            <span className="table-action">
                              <Pen className="icon" />
                            </span>
                            <span className="table-action" onClick={() => handleViewCity(row)}>
                              <Eye className="icon" /> View
                            </span>
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
          width: 1180px;
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
          justify-content: center;
          gap: 6px;
          width: auto;
          height: 40px;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background-color: #f0f0f0;
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: #444;
          position: relative;
          box-sizing: border-box;
        }

        .action-button.primary {
          background-color: #007bff;
          color: #fff;
          border-color: #007bff;
        }

        .filter-badge {
          position: absolute;
          top: -8px;
          right: 0px;
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

        .icon {
          font-size: 16px;
          vertical-align: middle;
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

        .table-wrapper {
          width: 1210px;
          height: 644px;
          overflow: auto;
          margin: 0 auto;
          position: relative;
        }
       

        .table-inner {
          width: 1320px;
          overflow: hidden;
        }

        .table-container {
          width: 100%;
          table-layout: auto;
          border-collapse: collapse;
          background-color: #f8f9fa;
        }

        .table-container th,
        .table-container td {
          padding: 12px;
          text-align: left;
          font-size: 14px;
          border-bottom: 1px solid #e2e8f0;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .Table_head {
          font-size: 12px;
        }

        .table-container th {
          background-color: #f8f9fa;
          font-weight: 600;
          font-size: 14px; 
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .table-container thead th:last-child {
          padding-right: 17px;
        }

        .table-container thead tr {
          box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        .checkbox-column {
          width: 40px;
        }

        .checkbox-column input[type="checkbox"] {
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(208, 213, 221, 1);
          width: 16px;
          height: 16px;
          appearance: none;
          cursor: pointer;
          border-radius: 4px;
        }

        .checkbox-column input[type="checkbox"]:checked {
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(208, 213, 221, 1);
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
          background-size: cover;
        }

        .city-id-column {
          width: 98px;
        }

        .city-code-column {
          width: 157px;
        }

        .city-column {
          width: 106px;
        }

        .status-column {
          width: 84px;
        }

        .district-id-column {
          width: 113px;
        }

        .zone-id-column {
          width: 110px;
        }

        .payroll-city-code-column {
          width: 139px;
        }

        .sync-status-column {
          width: 139px;
        }

        .sync-date-column {
          width: 119px;
        }

        .action-column {
          width: 218px;
        }

        .table-actions {
          display: inline-flex;
          align-items: center;
          gap: 25px;
          justify-content: center;
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
          border: 1px solid rgba(234, 236, 240, 1)
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
          border: 1px solid rgba(234, 236, 240, 1)
          //border: 1px solid #ccc;
          border-radius: 5px;
        }

        .pagination-button .icon {
          font-size: 16px;
        }

        .pagination-numbers {
          display: flex;
          align-items: center;
          gap: 2px;
          
        }

        .pagination-numbers button {
          width: 40px;
          height: 40px;
      border: 1px solid rgba(234, 236, 240, 1)
          color:1px solid rgba(234, 236, 240, 1)

          font-size: 16px;
          cursor: pointer;
          border: none;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

.pagination-numbers button.active {
  background: rgba(245, 247, 255, 1);
  color: rgba(52, 37, 255, 1);
  font-weight: 600;
}

     .previous {
  position: absolute;
  left: 40px;
  font-size: 14px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(208, 213, 221, 1); 
  margin-left: 260px;
}


        .next {
          position: absolute;
          right: 20px;
          font-size: 14px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(208, 213, 221, 1);
          margin-right: 20px;
        }

        .city-form-container {
          position: absolute;
          top: 180px;
          left: 640px;
          width: 480px;
          height: 416px;
          background: rgba(255, 255, 255, 1);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
          box-sizing: border-box;
          z-index: 1000;
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          // border-bottom: 1px solid #e0e0e0;
          padding-bottom: 10px;
        }

        .form-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin: 0;
        }

        .close-button {
          background: none;
          border: none;
          cursor: pointer;
          color: #666;
          padding: 0;
        }

        .form-row {
          display: flex;
          gap: 18px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group.small-input input {
          width: 94px;
          height: 40px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
         
          box-sizing: border-box;
        }

        .form-group.large-input input {
          width: 211px;
          height: 40px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          box-sizing: border-box;
        }

        .form-group label {
          display: block;
          font-size: 12px;
          font-weight: 500;
           color: rgba(52, 64, 84, 1);  
          margin-bottom: 5px;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 32px;
        }

        .cancel-button {
          background: rgba(255, 255, 255, 1);
          color: red;
          border: 1px solid red;
          width: 102px;
          height: 44px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-button {
          background-color: #007bff;
          color: #fff;
          width: 318px;
          height: 44px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .delete-button {
          background: rgba(255, 255, 255, 1);
          color: red;
          border: 1px solid red;
          width: 102px;
          height: 44px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edit-button {
          background-color: #007bff;
          color: #fff;
          width: 318px;
          height: 44px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 12px;
          font-weight: 500;
          padding: 10px 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cancel-button:hover,
        .submit-button:hover,
        .delete-button:hover,
        .edit-button:hover {
          opacity: 0.9;
        }
          @media (max-width: 1440px) {
  .table-inner {
    min-width: 600px; /* Reduce min-width to fit better */
  }
}

@media (max-width: 1024px) {
  .table-inner {
    min-width: 800px;
  }
}

@media (max-width: 768px) {
  .table-inner {
    min-width: 600px;
  }
}
      `}</style>
    </div>
  );
};

export default CityManagementPage;