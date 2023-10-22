const invoicesColumns = [
  { name: 'ID', uid: 'id', sortable: true },
  { name: 'INVOICE NUMBER', uid: 'invoiceNumber', sortable: true },
  { name: 'DATE', uid: 'date', sortable: true },
  { name: 'MAIL STATUS', uid: 'mailStatus', sortable: true },
  { name: 'CUSTOMER', uid: 'customer', sortable: true },
  { name: 'ACTIONS', uid: 'actions' },
]
const statusOptions = [
  { name: 'Sent', uid: 'sent' },
  { name: 'Failed', uid: 'failed' },
  { name: 'Pending', uid: 'pending' },
]

export { invoicesColumns, statusOptions }
