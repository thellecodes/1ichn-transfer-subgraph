import {
  TransferCall
} from "../generated/OneInch/OneInch"
import { AllTransfer } from "../generated/schema"

export function handlerTransfer(call: TransferCall): void {
  let id = call.transaction.hash
  let transaction = new AllTransfer(id.toString())
  transaction.from = call.transaction.from
  transaction.value = call.transaction.value
  transaction.save()
}

