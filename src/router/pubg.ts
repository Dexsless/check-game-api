import { hitCoda, Result } from '../utils'

export default async function pubg(id: number, zone: number): Promise<Result> {
  const body = `voucherPricePoint.id=5170&voucherPricePoint.price=1579&voucherPricePoint.variablePrice=0&user.userId=${id}&voucherTypeName=PUBG_MOBILE&shopLang=id_ID&voucherTypeId=2&gvtId=2`
  
  const data = await hitCoda(body)

  return {
    success: true,
    game: 'PUBG Mobile',
    id,
    server: zone,
    name: data.confirmationFields.username
  }
}
