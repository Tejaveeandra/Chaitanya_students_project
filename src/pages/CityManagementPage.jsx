import React, { useState, useEffect, useRef } from 'react';
import { Funnel, ArrowUp, Plus, Trash2, Pen, Eye, X, ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { useFormContext } from '../components/FormContext';
import { IoIosFunnel } from 'react-icons/io';
import axios from 'axios';

// CityForm component
const CityForm = ({ onSubmit, onCancel, onChange, initialData }) => {
  const [formData, setFormData] = useState({
    cityId: initialData?.cityId || '',
    cityCode: initialData?.cityCode || '',
    cityName: initialData?.cityName || '',
    status: initialData?.status ? 'true' : 'false', // Convert boolean to string for form
    districtId: initialData?.districtId || '',
    zoneId: initialData?.zoneId || '',
    payrollCityCode: initialData?.payrollCityCode || '',
    syncStatus: initialData?.syncStatus || '',
    syncDate: initialData?.syncDate || '',
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
        <h2 className="form-title">{initialData ? 'Edit City' : 'Add New Field'}</h2>
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
              disabled={!!initialData}
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
              value={formData.cityName}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <div className="form-group small-input">
            <label htmlFor="districtId">District ID</label>
            <input
              type="text"
              id="districtId"
              name="districtId"
              value={formData.districtId}
              onChange={handleChange}
              placeholder="Enter Value"
            />
          </div>
          <div className="form-group large-input">
            <label htmlFor="zoneId">Zone ID</label>
            <input
              type="text"
              id="zoneId"
              name="zoneId"
              value={formData.zoneId}
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
              type="date"
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
            {initialData ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

// CityViewForm component
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
            <input type="text" id="cityId" name="cityId" value={city.cityId} readOnly />
          </div>
          <div className="form-group small-input">
            <label htmlFor="cityCode">City Code</label>
            <input type="text" id="cityCode" name="cityCode" value={city.cityCode} readOnly />
          </div>
          <div className="form-group large-input">
            <label htmlFor="city">City Name</label>
            <input type="text" id="city" name="city" value={city.cityName} readOnly />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group small-input">
            <label htmlFor="status">Status</label>
            <input type="text" id="status" name="status" value={city.status ? 'Active' : 'Inactive'} readOnly />
          </div>
          <div className="form-group small-input">
            <label htmlFor="districtId">District ID</label>
            <input type="text" id="districtId" name="districtId" value={city.districtId || 'N/A'} readOnly />
          </div>
          <div className="form-group large-input">
            <label htmlFor="zoneId">Zone ID</label>
            <input type="text" id="zoneId" name="zoneId" value={city.zoneId || 'N/A'} readOnly />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group large-input">
            <label htmlFor="payrollCityCode">Payroll City Code</label>
            <input type="text" id="payrollCityCode" name="payrollCityCode" value={city.payrollCityCode} readOnly />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncStatus">Sync Status</label>
            <input type="text" id="syncStatus" name="syncStatus" value={city.syncStatus} readOnly />
          </div>
          <div className="form-group small-input">
            <label htmlFor="syncDate">Sync Date</label>
            <input type="text" id="syncDate" name="syncDate" value={city.syncDate} readOnly />
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

const CityManagementPage = () => {
  const { setIsFormOpen, setSidebarVisible } = useFormContext();
  const [showForm, setShowForm] = useState(false);
  const [showViewForm, setShowViewForm] = useState(false);
  const [editCity, setEditCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    cityName: '',
    status: '',
    payrollCityCode: '',
    districtId: '',
    zoneId: '',
    syncStatus: '',
    syncDate: '',
  });
  const [pageTitle, setPageTitle] = useState('City');
  const [tableScrollTop, setTableScrollTop] = useState(0);
  const [shouldHideHeaderElements, setShouldHideHeaderElements] = useState(false);
  const [cities, setCities] = useState([]);
  const [previewCity, setPreviewCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const tableRef = useRef(null);
  const filterRef = useRef(null);
  const lastScrollY = useRef(0);

  const API_BASE_URL = 'http://localhost:8000/api/cities';

  // Fetch all cities
  const fetchCities = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllCities`);
      setCities(response.data);
    } catch (err) {
      setError('Failed to fetch cities. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch city by ID
  const fetchCityById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/getCityById/${id}`);
      setSelectedCity(response.data);
      setShowViewForm(true);
    } catch (err) {
      setError('Failed to fetch city details. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add a new city
  const handleAddCity = async (newCity) => {
    setLoading(true);
    setError(null);
    try {
      // Transform the data to match backend expectations
      const transformedCity = {
        cityId: newCity.cityId ? parseInt(newCity.cityId) : undefined,
        cityCode: parseInt(newCity.cityCode),
        cityName: newCity.cityName,
        status: newCity.status === 'true', // Convert string to boolean
        districtId: parseInt(newCity.districtId),
        zoneId: parseInt(newCity.zoneId),
        payrollCityCode: parseInt(newCity.payrollCityCode),
        syncStatus: newCity.syncStatus,
        syncDate: newCity.syncDate || null, // Backend expects a date or null
      };

      console.log('Sending to backend:', transformedCity); // Log the transformed data

      const response = await axios.post(`${API_BASE_URL}/addCity`, transformedCity);
      setCities((prev) => [...prev, response.data]);
      setPreviewCity(null);
      setShowForm(false);
    } catch (err) {
      setError('Failed to add city: ' + err.message);
      console.error('Error adding city:', err.response?.data || err);
    } finally {
      setLoading(false);
    }
  };

  // Update a city
  const handleUpdateCity = async (updatedCity) => {
    setLoading(true);
    setError(null);
    try {
      const transformedCity = {
        cityId: parseInt(updatedCity.cityId),
        cityCode: parseInt(updatedCity.cityCode),
        cityName: updatedCity.cityName,
        status: updatedCity.status === 'true', // Convert string to boolean
        districtId: parseInt(updatedCity.districtId),
        zoneId: parseInt(updatedCity.zoneId),
        payrollCityCode: parseInt(updatedCity.payrollCityCode),
        syncStatus: updatedCity.syncStatus,
        syncDate: updatedCity.syncDate || null,
      };

      const response = await axios.put(`${API_BASE_URL}/updateCity/${updatedCity.cityId}`, transformedCity);
      setCities((prev) => prev.map((city) => (city.cityId === response.data.cityId ? response.data : city)));
      setShowForm(false);
      setEditCity(null);
    } catch (err) {
      setError('Failed to update city: ' + err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete a city
  const handleDeleteCity = async () => {
    if (selectedCity) {
      setLoading(true);
      setError(null);
      try {
        await axios.delete(`${API_BASE_URL}/deleteCity/${selectedCity.cityId}`);
        setCities((prev) => prev.filter((city) => city.cityId !== selectedCity.cityId));
        setShowViewForm(false);
        setSelectedCity(null);
      } catch (err) {
        setError('Failed to delete city. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');
    const handleMediaQueryChange = (e) => {
      setPageTitle(e.matches ? 'Student Master' : 'City');
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

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

  useEffect(() => {
    const handleTableScroll = () => {
      if (tableRef.current) {
        const currentScrollY = tableRef.current.scrollTop;
        setTableScrollTop(currentScrollY);

        if (window.innerWidth <= 480) {
          const tableScrollingUp = currentScrollY > lastScrollY.current;
          const atTop = currentScrollY === 0;

          if (atTop) {
            setShouldHideHeaderElements(false);
            setSidebarVisible(true);
          } else if (tableScrollingUp) {
            setShouldHideHeaderElements(true);
            setSidebarVisible(false);
          } else {
            setShouldHideHeaderElements(false);
            setSidebarVisible(true);
          }

          lastScrollY.current = currentScrollY;
        }
      }
    };

    const tableElement = tableRef.current;
    if (tableElement) {
      tableElement.addEventListener('scroll', handleTableScroll);
    }

    return () => {
      if (tableElement) {
        tableElement.removeEventListener('scroll', handleTableScroll);
      }
    };
  }, [setSidebarVisible]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      cityName: '',
      status: '',
      payrollCityCode: '',
      districtId: '',
      zoneId: '',
      syncStatus: '',
      syncDate: '',
    });
  };

  const filteredCities = cities.filter((city) => {
    return (
      (!filters.cityName || city.cityName.toLowerCase().includes(filters.city.toLowerCase())) &&
      (!filters.status || (filters.status === 'true' ? city.status : !city.status)) &&
      (!filters.payrollCityCode || city.payrollCityCode.toString().includes(filters.payrollCityCode)) &&
      (!filters.districtId || city.districtId.toString().includes(filters.districtId)) &&
      (!filters.zoneId || city.zoneId.toString().includes(filters.zoneId)) &&
      (!filters.syncStatus || city.syncStatus === filters.syncStatus) &&
      (!filters.syncDate || city.syncDate.toString().toLowerCase().includes(filters.syncDate.toLowerCase()))
    );
  });

  const handleFormChange = (data) => {
    setPreviewCity({
      cityId: data.cityId || 'Preview',
      cityCode: data.cityCode || '',
      cityName: data.cityName || '',
      status: data.status === 'true', // Convert to boolean for preview
      districtId: data.districtId || '',
      zoneId: data.zoneId || '',
      payrollCityCode: data.payrollCityCode || '',
      syncStatus: data.syncStatus || '',
      syncDate: data.syncDate || '',
    });
  };

  const handleViewCity = (city) => {
    fetchCityById(city.cityId);
  };

  const handleEditCity = () => {
    setEditCity(selectedCity);
    setShowViewForm(false);
    setShowForm(true);
  };

  return (
    <div className="city-page-container" style={{ minHeight: '400px', width: '100%' }} tableScrollTop={tableScrollTop}>
      {!showForm && !showViewForm && (
        <>
          <div className="page-header-scrollable">
            <div className="page-header">
              <div className="header-left">
                {pageTitle === 'Student Master' && !shouldHideHeaderElements ? (
                  <>
                    <h2 className="page-title">{pageTitle}</h2>
                    <div className="search-bar-wrapper">
                      <Search className="search-icon" size={18} />
                      <input
                        type="text"
                        className="search-bar"
                        placeholder="Search"
                        value={filters.city}
                        onChange={(e) => handleFilterChange({ target: { name: 'city', value: e.target.value } })}
                      />
                    </div>
                  </>
                ) : pageTitle !== 'Student Master' && (
                  <h2 className="page-title">{pageTitle}</h2>
                )}
              </div>
              <div className="page-actions">
                <div className="filter-container" ref={filterRef}>
                  <button className="action-button" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    {Object.values(filters).some((value) => value !== '') ? (
                      <IoIosFunnel className="icon" style={{ marginRight: '6px', width: '24', height: '24' }} />
                    ) : (
                      <Funnel className="icon" style={{ marginRight: '6px', width: '24', height: '24' }} />
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
                        <label htmlFor="city-filter">CityName</label>
                        <input
                          type="text"
                          id="city-filter"
                          name="city"
                          value={filters.cityName}
                          onChange={handleFilterChange}
                          placeholder="Filter by City"
                        />
                      </div>
                      <div className="filter-group">
                        <label htmlFor="status-filter">Status</label>
                        <select id="status-filter" name="status" value={filters.status} onChange={handleFilterChange}>
                          <option value="">All</option>
                          <option value="true">Active</option>
                          <option value="false">Inactive</option>
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
                      <div className="filter-group">
                        <label htmlFor="districtId-filter">District ID</label>
                        <input
                          type="text"
                          id="districtId-filter"
                          name="districtId"
                          value={filters.districtId}
                          onChange={handleFilterChange}
                          placeholder="Filter by District ID"
                        />
                      </div>
                      <div className="filter-group">
                        <label htmlFor="zoneId-filter">Zone ID</label>
                        <input
                          type="text"
                          id="zoneId-filter"
                          name="zoneId"
                          value={filters.zoneId}
                          onChange={handleFilterChange}
                          placeholder="Filter by Zone ID"
                        />
                      </div>
                      <div className="filter-group">
                        <label htmlFor="syncStatus-filter">Sync Status</label>
                        <select id="syncStatus-filter" name="syncStatus" value={filters.syncStatus} onChange={handleFilterChange}>
                          <option value="">All</option>
                          <option value="Updated">Updated</option>
                          <option value="Pending">Pending</option>
                        </select>
                      </div>
                      <div className="filter-group">
                        <label htmlFor="syncDate-filter">Sync Date</label>
                        <input
                          type="text"
                          id="syncDate-filter"
                          name="syncDate"
                          value={filters.syncDate}
                          onChange={handleFilterChange}
                          placeholder="Filter by Sync Date"
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
                  <ArrowUp className="icon" style={{ marginRight: '6px', width: '24', height: '24' }} />
                  Export
                </button>
                <button className="action-button primary" onClick={() => setShowForm(true)}>
                  <Plus className="icon" style={{ marginRight: '6px', width: '24', height: '24' }} />
                  Add New Field
                </button>
              </div>
            </div>
          </div>
          <div className="table-section">
            {loading && <div>Loading...</div>}
            {error && <div className="error-message">{error}</div>}
            <div className="table-wrapper" ref={tableRef}>
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
                    {[...filteredCities, ...(previewCity ? [{ ...previewCity, cityId: 'Preview' }] : [])].map((row) => (
                      <tr key={row.cityId || 'preview'}>
                        <td className="checkbox-column">
                          <input type="checkbox" disabled={row.cityId === 'Preview'} />
                        </td>
                        <td className="city-id-column">{row.cityId}</td>
                        <td className="city-code-column">{row.cityCode}</td>
                        <td className="city-column">{row.cityName}</td>
                        <td className="status-column">{row.status ? 'Active' : 'Inactive'}</td>
                        <td className="district-id-column">{row.districtId || 'N/A'}</td>
                        <td className="zone-id-column">{row.zoneId || 'N/A'}</td>
                        <td className="payroll-city-code-column">{row.payrollCityCode}</td>
                        <td className="sync-status-column">{row.syncStatus}</td>
                        <td className="sync-date-column">{row.syncDate}</td>
                        <td className="action-column">
                          {row.cityId !== 'Preview' && (
                            <div className="table-actions">
                              <span
                                className="table-action"
                                onClick={() => {
                                  setSelectedCity(row);
                                  handleDeleteCity();
                                }}
                              >
                                <Trash2 className="icon" />
                              </span>
                              <span
                                className="table-action"
                                onClick={() => {
                                  setEditCity(row);
                                  setShowForm(true);
                                }}
                              >
                                <Pen className="icon" />
                              </span>
                              <span className="table-action" onClick={() => handleViewCity(row)}>
                                <Eye className="icon" /> View
                              </span>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {!shouldHideHeaderElements && (
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
            )}
          </div>
        </>
      )}

      {showForm && (
        <CityForm
          onSubmit={editCity ? handleUpdateCity : handleAddCity}
          onCancel={() => {
            setShowForm(false);
            setPreviewCity(null);
            setEditCity(null);
          }}
          onChange={handleFormChange}
          initialData={editCity}
        />
      )}
      {showViewForm && (
        <CityViewForm
          city={selectedCity}
          onDelete={handleDeleteCity}
          onEdit={handleEditCity}
          onClose={() => {
            setShowViewForm(false);
            setSelectedCity(null);
          }}
        />
      )}

      <style>{`
        .city-page-container {
          width: 100%;
          min-height: 400px;
        }

        .error-message {
          color: red;
          text-align: center;
          margin-bottom: 16px;
        }

        .page-header-scrollable {
          max-height: 100vh;
          overflow-y: visible;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0;
          background-color: rgba(255, 255, 255, 1);
          padding: 8px 16px;
          width: 100%;
          max-width: 1200px;
          box-sizing: border-box;
          min-height: 56px;
          overflow: visible;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .page-title {
          font-size: 24px;
          font-weight: 700;
        }

        .page-actions {
          display: flex;
          gap: 8px;
          align-items: center;
          position: relative;
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
          right: 0;
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

        .search-bar-wrapper {
          display: flex;
          align-items: center;
          background-color: #f0f0f0;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 4px 8px;
          width: 200px;
          transition: opacity 0.3s ease-in-out;
        }

        .search-icon {
          color: #666;
          margin-right: 8px;
        }

        .search-bar {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 14px;
          color: #444;
          outline: none;
        }

        .search-bar::placeholder {
          color: #888;
        }

        .filter-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 16px;
          width: 250px;
          max-height: 400px;
          overflow-y: auto;
          z-index: 10000002;
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

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
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

        .table-section {
          width: 100%;
          max-width: 1210px;
          position: relative;
          z-index: 10;
        }

        .table-wrapper {
          width: 100%;
          max-width: 1200px;
          height: 644px;
          overflow-x: auto;
          overflow-y: auto;
          position: relative;
          z-index: 10;
        }

        .table-inner {
          min-width: 1320px;
          position: relative;
          z-index: 10;
        }

        .table-container {
          width: 100%;
          table-layout: fixed;
          border-collapse: collapse;
          background-color: #f8f9fa;
          position: relative;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          z-index: 10;
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
          background-color: #f8f9fa;
          position: sticky;
          top: 0;
          z-index: 15;
        }

        .table-container th {
          font-weight: 600;
          font-size: 14px;
        }

        .table-container thead tr {
          box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.1);
        }

        .checkbox-column {
          width: 40px;
          position: sticky;
          left: 0;
          z-index: 20;
          background-color: #f8f9fa;
        }

        .checkbox-column th {
          position: sticky;
          top: 0;
          left: 0;
          z-index: 25;
          background-color: #f8f9fa;
        }

        .checkbox-column input[type="checkbox"] {
          width: 16px;
          height: 16px;
          margin: 0 auto;
          display: block;
          border: 1px solid rgba(208, 213, 221, 1);
          border-radius: 4px;
          appearance: none;
          cursor: pointer;
          background-color: #fff;
        }

        .checkbox-column input[type="checkbox"]:checked {
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
          display: none;
          align-items: center;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 10px 20px;
          box-sizing: border-box;
          z-index: 100;
          border: 1px solid rgba(234, 236, 240, 1);
          transition: transform 0.3s ease-in-out;
        }

        .pagination-content {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .pagination-button {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          padding: 8px 12px;
          cursor: pointer;
          border: 1px solid rgba(234, 236, 240, 1);
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
          border: 1px solid rgba(234, 236, 240, 1);
          font-size: 16px;
          cursor: pointer;
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
          left: 280px;
          font-size: 14px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(208, 213, 221, 1);
        }

        .next {
          position: absolute;
          right: 20px;
          font-size: 14px;
          background: rgba(255, 255, 255, 1);
          border: 1px solid rgba(208, 213, 221, 1);
        }

        .city-form-container {
          position: fixed;
          top: 180px;
          left: 60%;
          transform: translateX(-50%);
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

        .form-group.small-input input,
        .form-group.small-input select {
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
          .table-wrapper {
            max-width: 97%;
          }
          .table-inner {
            min-width: 100%;
          }
        }

        @media (max-width: 1024px) {
          .page-header {
            width: 100%;
            max-width: 810px;
          }
          .table-wrapper {
            max-width: 790px;
          }
          .table-inner {
            min-width: 1320px;
          }
          .previous {
            left: 200px;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            width: 100%;
            max-width: 570px;
          }
          .table-wrapper {
            max-width: 570px;
          }
          .table-inner {
            min-width: 1320px;
          }
          .pagination {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .page-header {
            width: 100%;
            padding: 8px 10px;
            margin-left: 0;
            flex-wrap: wrap;
            gap: 12px;
            background: #FFFFFF;
            flex-direction: column;
            align-items: flex-start;
            min-height: 120px;
            overflow: visible;
          }

          .header-left {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 110px;
          }

          .page-title {
            font-size: 20px;
            font-weight: 500;
            width: 150px;
            height: 19px;
          }

          .search-bar-wrapper {
            width: 95px;
            height: 31px;
            border-radius: 31px;
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
          }

          .page-actions {
            display: flex;
            gap: 12px;
            margin-left: 2px;
            position: sticky;
            top: 130px;
            background: #fff;
            z-index: 9;
            padding: 8px 0;
            width: 100%;
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
            background: #FFFFFF;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            color: #444;
            position: relative;
            box-sizing: border-box;
          }

          .table-section {
            margin-top: 0;
          }

          .Table_head {
            font-size: 12px;
            background-color: #f8f9fa;
            position: sticky;
            top: 0;
            z-index: 15;
          }

          .table-wrapper {
            max-width: 430px;
            height: calc(100vh - 190px);
            overflow-y: auto;
          }

          .table-inner {
            min-width: 1320px;
          }

          .city-form-container {
            width: 90%;
            left: 5%;
            transform: none;
            top: 100px;
          }

          .filter-dropdown {
            width: 90%;
            left: 0;
            top: 100%;
            max-height: 300px;
            padding: 12px;
            z-index: 10000002;
          }

          .pagination {
            left: 0;
            width: 100%;
            transform: translateY(0);
          }

          .form-row {
            flex-direction: column;
            gap: 12px;
          }

          .form-group.small-input {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .form-group.small-input input {
            width: 100%;
          }

          .form-group.large-input {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .form-group.large-input input {
            width: 100%;
          }

          .form-row:nth-child(1) {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          }

          .form-row:nth-child(1) .form-group.small-input {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

          .form-row:nth-child(1) .form-group.large-input {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .form-row:nth-child(2) {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
          }

          .form-row:nth-child(2) .form-group.small-input {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

          .form-row:nth-child(2) .form-group.large-input {
            flex: 0 0 100%;
            max-width: 100%;
          }

          .form-row:nth-child(3) {
            flex-direction: row;
            gap: 12px;
            flex-wrap: wrap;
          }

          .form-row:nth-child(3) .form-group.large-input {
            flex: 0 0 100%;
            max-width: 100%;
            gap: 12px;
          }

          .form-row:nth-child(3) .form-group.small-input {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
             
          }

          .form-row:nth-child(3) .form-group.small-input:nth-child(2),
          .form-row:nth-child(3) .form-group.small-input:nth-child(3) {
            display: inline-block;
            vertical-align: top;
            flex-direction: row;
          }

          .form-row:nth-child(3)::after {
            content: '';
            display: block;
            
            clear: both;
            gap: 10px;
          }

          .form-actions {
            flex-direction: row;
            align-items: flex-end;
            gap: 12px;
          }

          .cancel-button,
          .submit-button,
          .delete-button,
          .edit-button {
            width: 50%;
            max-width: 50%;
          }
        }

        @media (max-width: 375px) {
          .page-title {
            font-size: 20px;
            font-weight: 700;
            width: 170px;
            height: 19px;
          }

          .page-header {
            width: 100%;
            padding: 8px 10px;
            margin-left: 0;
            flex-wrap: wrap;
            gap: 10px;
          }

          .header-left {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 60px;
          }

          .search-bar-wrapper {
            width: 95px;
            height: 31px;
            border-radius: 31px;
            background: #FFFFFF;
            border: 1px solid #DCDCDC;
          }

          .action-button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
            min-width: 76px;
            max-width: 160px;
            height: 40px;
            padding: 6px 8px;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            background: #FFFFFF;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            color: #444;
            position: relative;
            box-sizing: border-box;
          }

          .table-wrapper {
            max-width: 370px;
          }

          .table-inner {
            min-width: 1320px;
          }
        }

        @media (max-width: 320px) {
          .page-header {
            width: 100%;
            padding: 8px 10px;
          }

          .search-bar-wrapper {
            width: 120px;
          }

          .table-wrapper {
            max-width: 330px;
          }

          .table-inner {
            min-width: 1320px;
          }
        }
      `}</style>
    </div>
  );
};

export default CityManagementPage;