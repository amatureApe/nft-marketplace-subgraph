import { BigInt } from "@graphprotocol/graph-ts"
import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent
} from "../generated/NftMarketplace/NftMarketplace"

export function handleItemBought(event: ItemBoughtEvent): void {
  // Save that event in our graph
  // update our activeitems

  // get or create an itemlisted object
  // each item needs a unique Id
}

export function handleItemCanceled(event: ItemCanceledEvent): void { }

export function handleItemListed(event: ItemListedEvent): void { }

