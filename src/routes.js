;<Route path="/" element={<h1>Hello world</h1>}>
  <Route path="auth">
    <Route path="register" element={<Register />} />
  </Route>
  {/* <Route index element={<h1>aldsjkfk</h1>} /> */}
  <Route path="invoices">
    <Route path=":id/view" element={<InvoiceDetail />} />
    <Route path=":invoiceId/edit" element={<FormPage />} />
    <Route path="add" element={<FormPage />} />
    <Route index element={<DashboardPage />} />
  </Route>

  <Route path="*" element={<h1>Not found page </h1>} />
</Route>
