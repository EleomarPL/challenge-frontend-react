export const calculateLimit = (page, rowsPerPage, currentPage) => {
  const items = 20 * currentPage
  const repairPage = page + 1
  let requestAnotherPage = false

  if (repairPage * rowsPerPage > items) {
    requestAnotherPage = true
  }

  return requestAnotherPage
}
