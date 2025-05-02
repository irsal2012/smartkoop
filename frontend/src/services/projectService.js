import api from './api';

/**
 * Project Service
 * 
 * This service handles all API calls related to projects and project invoices.
 */
const projectService = {
  /**
   * Project methods
   */
  getProjects: async (skip = 0, limit = 100) => {
    try {
      const response = await api.get(`/projects?skip=${skip}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },

  getProject: async (id) => {
    try {
      const response = await api.get(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with ID ${id}:`, error);
      throw error;
    }
  },

  createProject: async (projectData) => {
    try {
      const response = await api.post('/projects', projectData);
      return response.data;
    } catch (error) {
      console.error('Error creating project:', error);
      throw error;
    }
  },

  updateProject: async (id, projectData) => {
    try {
      const response = await api.put(`/projects/${id}`, projectData);
      return response.data;
    } catch (error) {
      console.error(`Error updating project with ID ${id}:`, error);
      throw error;
    }
  },

  deleteProject: async (id) => {
    try {
      const response = await api.delete(`/projects/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting project with ID ${id}:`, error);
      throw error;
    }
  },

  /**
   * Project Task methods
   */
  getProjectTasks: async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}/tasks`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching tasks for project with ID ${projectId}:`, error);
      throw error;
    }
  },

  getProjectTask: async (taskId) => {
    try {
      const response = await api.get(`/projects/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching task with ID ${taskId}:`, error);
      throw error;
    }
  },

  createProjectTask: async (projectId, taskData) => {
    try {
      const response = await api.post(`/projects/${projectId}/tasks`, {
        ...taskData,
        project_id: projectId
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating task for project with ID ${projectId}:`, error);
      throw error;
    }
  },

  updateProjectTask: async (taskId, taskData) => {
    try {
      const response = await api.put(`/projects/tasks/${taskId}`, taskData);
      return response.data;
    } catch (error) {
      console.error(`Error updating task with ID ${taskId}:`, error);
      throw error;
    }
  },

  deleteProjectTask: async (taskId) => {
    try {
      const response = await api.delete(`/projects/tasks/${taskId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting task with ID ${taskId}:`, error);
      throw error;
    }
  },

  /**
   * Time Entry methods
   */
  getTimeEntries: async (taskId) => {
    try {
      const response = await api.get(`/projects/tasks/${taskId}/time-entries`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching time entries for task with ID ${taskId}:`, error);
      throw error;
    }
  },

  getTimeEntry: async (entryId) => {
    try {
      const response = await api.get(`/projects/time-entries/${entryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching time entry with ID ${entryId}:`, error);
      throw error;
    }
  },

  createTimeEntry: async (taskId, entryData) => {
    try {
      const response = await api.post(`/projects/tasks/${taskId}/time-entries`, {
        ...entryData,
        task_id: taskId
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating time entry for task with ID ${taskId}:`, error);
      throw error;
    }
  },

  updateTimeEntry: async (entryId, entryData) => {
    try {
      const response = await api.put(`/projects/time-entries/${entryId}`, entryData);
      return response.data;
    } catch (error) {
      console.error(`Error updating time entry with ID ${entryId}:`, error);
      throw error;
    }
  },

  deleteTimeEntry: async (entryId) => {
    try {
      const response = await api.delete(`/projects/time-entries/${entryId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting time entry with ID ${entryId}:`, error);
      throw error;
    }
  },

  /**
   * Project Invoice methods
   */
  getProjectInvoices: async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}/invoices`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching invoices for project with ID ${projectId}:`, error);
      throw error;
    }
  },

  getAllInvoices: async (skip = 0, limit = 100) => {
    try {
      const response = await api.get(`/projects/invoices?skip=${skip}&limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all project invoices:', error);
      throw error;
    }
  },

  getProjectInvoice: async (invoiceId) => {
    try {
      const response = await api.get(`/projects/invoices/${invoiceId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  createProjectInvoice: async (projectId, invoiceData) => {
    try {
      const response = await api.post(`/projects/${projectId}/invoices`, {
        ...invoiceData,
        project_id: projectId
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating invoice for project with ID ${projectId}:`, error);
      throw error;
    }
  },

  updateProjectInvoice: async (invoiceId, invoiceData) => {
    try {
      const response = await api.put(`/projects/invoices/${invoiceId}`, invoiceData);
      return response.data;
    } catch (error) {
      console.error(`Error updating invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  deleteProjectInvoice: async (invoiceId) => {
    try {
      const response = await api.delete(`/projects/invoices/${invoiceId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  /**
   * Invoice Item methods
   */
  getInvoiceItems: async (invoiceId) => {
    try {
      const response = await api.get(`/projects/invoices/${invoiceId}/items`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching items for invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  getInvoiceItem: async (itemId) => {
    try {
      const response = await api.get(`/projects/invoice-items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching invoice item with ID ${itemId}:`, error);
      throw error;
    }
  },

  createInvoiceItem: async (invoiceId, itemData) => {
    try {
      const response = await api.post(`/projects/invoices/${invoiceId}/items`, {
        ...itemData,
        invoice_id: invoiceId
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating item for invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  updateInvoiceItem: async (itemId, itemData) => {
    try {
      const response = await api.put(`/projects/invoice-items/${itemId}`, itemData);
      return response.data;
    } catch (error) {
      console.error(`Error updating invoice item with ID ${itemId}:`, error);
      throw error;
    }
  },

  deleteInvoiceItem: async (itemId) => {
    try {
      const response = await api.delete(`/projects/invoice-items/${itemId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting invoice item with ID ${itemId}:`, error);
      throw error;
    }
  },

  /**
   * Payment methods
   */
  getInvoicePayments: async (invoiceId) => {
    try {
      const response = await api.get(`/projects/invoices/${invoiceId}/payments`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching payments for invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  getPayment: async (paymentId) => {
    try {
      const response = await api.get(`/projects/payments/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching payment with ID ${paymentId}:`, error);
      throw error;
    }
  },

  createPayment: async (invoiceId, paymentData) => {
    try {
      const response = await api.post(`/projects/invoices/${invoiceId}/payments`, {
        ...paymentData,
        invoice_id: invoiceId
      });
      return response.data;
    } catch (error) {
      console.error(`Error creating payment for invoice with ID ${invoiceId}:`, error);
      throw error;
    }
  },

  updatePayment: async (paymentId, paymentData) => {
    try {
      const response = await api.put(`/projects/payments/${paymentId}`, paymentData);
      return response.data;
    } catch (error) {
      console.error(`Error updating payment with ID ${paymentId}:`, error);
      throw error;
    }
  },

  deletePayment: async (paymentId) => {
    try {
      const response = await api.delete(`/projects/payments/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting payment with ID ${paymentId}:`, error);
      throw error;
    }
  }
};

export default projectService;
