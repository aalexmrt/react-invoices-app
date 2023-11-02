import './styles.css'

export default function InvoiceDetail({ invoice, issuer }) {
  if (Object.keys(invoice).length === 0) return null

  return (
    <>
      <div className="invoice-box">
        <table>
          <tbody>
            <tr className="top">
              <td colSpan="2">
                <table>
                  <tbody>
                    <tr>
                      <td className="title">LOGO</td>

                      <td>
                        Invoice #: 123
                        <br />
                        Date: January 1, 2023
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr className="information">
              <td colSpan="2">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        {invoice.customer.name}
                        <br />
                        {invoice.customer.address}
                        <br />
                        {invoice.customer.legalId}
                      </td>

                      <td>
                        {issuer.name}
                        <br />
                        {issuer.address}
                        <br />
                        {issuer.city}
                        <br />
                        {issuer.legalId}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr className="heading">
              <td>Item</td>
              <td>Quantity</td>
              <td>Price</td>
            </tr>
            {invoice.products.map((product, index) => (
              <tr
                key={index}
                className={
                  index === invoice.products.length ? 'item' : 'item last'
                }
              >
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price} $</td>
              </tr>
            ))}

            <tr className="total">
              <td></td>
              <td></td>
              <td>Total: $385.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
