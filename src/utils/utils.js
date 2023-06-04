export const validateDate = date => {
  return date >= new Date().toISOString().split('T')[0]
}
