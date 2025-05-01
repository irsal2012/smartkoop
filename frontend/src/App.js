import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Layout components
import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';

// Auth pages
import Login from './pages/auth/Login';
// These pages don't exist yet
// import Register from './pages/auth/Register';
// import ForgotPassword from './pages/auth/ForgotPassword';

// Dashboard pages
import Dashboard from './pages/dashboard/Dashboard';

// Member pages
import MemberList from './pages/members/MemberList';
import MemberDetail from './pages/members/MemberDetail';
import MemberForm from './pages/members/MemberForm';

// The following pages don't exist yet
// Customer pages
// import CustomerList from './pages/customers/CustomerList';
// import CustomerDetail from './pages/customers/CustomerDetail';
// import CustomerForm from './pages/customers/CustomerForm';

// Sales pages
// import SalesOrderList from './pages/sales/SalesOrderList';
// import SalesOrderDetail from './pages/sales/SalesOrderDetail';
// import SalesOrderForm from './pages/sales/SalesOrderForm';
// import SalesInvoiceList from './pages/sales/SalesInvoiceList';

// Supplier pages
// import SupplierList from './pages/suppliers/SupplierList';
// import SupplierDetail from './pages/suppliers/SupplierDetail';
// import SupplierForm from './pages/suppliers/SupplierForm';

// Purchase pages
// import PurchaseOrderList from './pages/purchases/PurchaseOrderList';
// import PurchaseOrderDetail from './pages/purchases/PurchaseOrderDetail';
// import PurchaseOrderForm from './pages/purchases/PurchaseOrderForm';

// Asset pages
// import AssetList from './pages/assets/AssetList';
// import AssetDetail from './pages/assets/AssetDetail';
// import AssetForm from './pages/assets/AssetForm';

// Accounting pages
// import JournalEntryList from './pages/accounting/JournalEntryList';
// import JournalEntryForm from './pages/accounting/JournalEntryForm';
// import ChartOfAccounts from './pages/accounting/ChartOfAccounts';
// import FinancialReports from './pages/accounting/FinancialReports';

// Document pages
// import DocumentList from './pages/documents/DocumentList';
// import DocumentDetail from './pages/documents/DocumentDetail';
// import DocumentUpload from './pages/documents/DocumentUpload';

// Auth context
import { AuthProvider } from './context/AuthContext';

// Protected route component
const ProtectedRoute = ({ children }) => {
  // This is a placeholder for actual authentication logic
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Routes>
          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            {/* These routes are commented out because the components don't exist yet */}
            {/* <Route path="/register" element={<Register />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          </Route>
          
          {/* Protected routes */}
          <Route element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Member routes */}
            <Route path="/members" element={<MemberList />} />
            <Route path="/members/new" element={<MemberForm />} />
            <Route path="/members/:id" element={<MemberDetail />} />
            <Route path="/members/:id/edit" element={<MemberForm />} />
            
            {/* The following routes are commented out because the components don't exist yet */}
            
            {/* Customer routes */}
            {/* <Route path="/customers" element={<CustomerList />} /> */}
            {/* <Route path="/customers/new" element={<CustomerForm />} /> */}
            {/* <Route path="/customers/:id" element={<CustomerDetail />} /> */}
            {/* <Route path="/customers/:id/edit" element={<CustomerForm />} /> */}
            
            {/* Sales routes */}
            {/* <Route path="/sales/orders" element={<SalesOrderList />} /> */}
            {/* <Route path="/sales/orders/new" element={<SalesOrderForm />} /> */}
            {/* <Route path="/sales/orders/:id" element={<SalesOrderDetail />} /> */}
            {/* <Route path="/sales/orders/:id/edit" element={<SalesOrderForm />} /> */}
            {/* <Route path="/sales/invoices" element={<SalesInvoiceList />} /> */}
            
            {/* Supplier routes */}
            {/* <Route path="/suppliers" element={<SupplierList />} /> */}
            {/* <Route path="/suppliers/new" element={<SupplierForm />} /> */}
            {/* <Route path="/suppliers/:id" element={<SupplierDetail />} /> */}
            {/* <Route path="/suppliers/:id/edit" element={<SupplierForm />} /> */}
            
            {/* Purchase routes */}
            {/* <Route path="/purchases/orders" element={<PurchaseOrderList />} /> */}
            {/* <Route path="/purchases/orders/new" element={<PurchaseOrderForm />} /> */}
            {/* <Route path="/purchases/orders/:id" element={<PurchaseOrderDetail />} /> */}
            {/* <Route path="/purchases/orders/:id/edit" element={<PurchaseOrderForm />} /> */}
            
            {/* Asset routes */}
            {/* <Route path="/assets" element={<AssetList />} /> */}
            {/* <Route path="/assets/new" element={<AssetForm />} /> */}
            {/* <Route path="/assets/:id" element={<AssetDetail />} /> */}
            {/* <Route path="/assets/:id/edit" element={<AssetForm />} /> */}
            
            {/* Accounting routes */}
            {/* <Route path="/accounting/journal" element={<JournalEntryList />} /> */}
            {/* <Route path="/accounting/journal/new" element={<JournalEntryForm />} /> */}
            {/* <Route path="/accounting/chart-of-accounts" element={<ChartOfAccounts />} /> */}
            {/* <Route path="/accounting/reports" element={<FinancialReports />} /> */}
            
            {/* Document routes */}
            {/* <Route path="/documents" element={<DocumentList />} /> */}
            {/* <Route path="/documents/upload" element={<DocumentUpload />} /> */}
            {/* <Route path="/documents/:id" element={<DocumentDetail />} /> */}
          </Route>
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </AuthProvider>
  );
}

export default App;
