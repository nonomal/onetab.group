export type AnyRecord = Record<string, any>

export type Tab = AnyRecord

export type Tabs = Array<AnyRecord>

export type UserType = 'GitHub' | 'Google'

export type RecurrenceType = 'monthly' | 'yearly'

export interface Session {
  id: string
  title: string
  tabTree: Tabs
  collapsed: boolean
  created_at: number | string
  updated_at: number | string
  account_id?: string
}

export type Account = {
  id: string
  name: string
  email: string
  type: UserType
  avatar_url: string
  accounts_url: string
  created_at: number | string
  updated_at?: number | string
  synced_at?: number | string
}

export type License = {
  id: string
  account_id: string
  email: string
  otg_version: string
  // license info
  license_key: string
  purchaser_id: string
  price: number
  gumroad_fee: number
  currency: string
  recurrence: RecurrenceType
  ip_country: string
  created_at: number | string
  expiry_at: number | string
}
