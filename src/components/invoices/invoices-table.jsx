import { useState } from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
} from '@nextui-org/react'
import { EyeIcon, EditIcon, DeleteIcon } from '../icons'
import { Link } from 'react-router-dom'

const COLUMNS = [
  {
    id: 'number',
    title: 'INVOICE NUMBER',
  },
  {
    id: 'date',
    title: 'DATE',
  },
  {
    id: 'mailStatus',
    title: 'MAIL STATUS',
  },
  {
    id: 'customer',
    title: 'CUSTOMER',
  },
  {
    id: 'actions',
    title: 'ACTIONS',
  },
]
const STATUS_COLOR_MAP = {
  sent: 'success',
  failed: 'danger',
  pending: 'warning',
}

export function ListOfInvoices({ invoices, removeInvoice, downloadInvoice }) {
  const [selectedKeys, setSelectedKeys] = useState(new Set())

  return (
    <Table
      removeWrapper
      aria-label="Example static collection table"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader>
        {COLUMNS.map((column) => (
          <TableColumn
            align={
              column.id === 'actions' || column.id === 'mailStatus'
                ? 'center'
                : 'start'
            }
            key={column.id}
          >
            {column.title}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent={'No invoices to display.'}>
        {invoices.map((invoice) => {
          return (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.number}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>
                <Chip
                  className="capitalize"
                  color={STATUS_COLOR_MAP[invoice.mailStatus]}
                  size="sm"
                  variant="flat"
                >
                  {invoice.mailStatus}
                </Chip>
              </TableCell>
              <TableCell>{invoice.customer.name}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Link to={`${invoice.id}/view`}>
                    <Tooltip content="Details">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EyeIcon />
                      </span>
                    </Tooltip>
                  </Link>
                  <Link to={`${invoice.id}/edit`}>
                    <Tooltip content="Edit invoice">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />
                      </span>
                    </Tooltip>
                  </Link>

                  <Tooltip color="danger" content="Delete invoice">
                    <span
                      onClick={() => removeInvoice(invoice.id)}
                      className="text-lg text-danger cursor-pointer active:opacity-50"
                    >
                      <DeleteIcon />
                    </span>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export function Invoices({ invoices, removeInvoice, downloadInvoice }) {
  return (
    <div className="w-full">
      {invoices && (
        <ListOfInvoices
          invoices={invoices}
          removeInvoice={removeInvoice}
          downloadInvoice={downloadInvoice}
        />
      )}
    </div>
  )
}
