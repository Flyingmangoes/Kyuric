export interface UserModel {
  userId: string;
  fullName: string;
  username: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;

  locale: string;
  country: string;
  address: string;

  userType: string;
  isVerified: boolean;

  emailConsent: boolean;
  smsConsent: boolean;
  consentUpdated: string;
  consentSrc: string;

  preferredHub: 'tokyo' | 'nyc' | 'paris' | 'indonesia'
  currency: 'idr'|'usd' | 'jpy' | 'eur'

  createdAt: string;
  updatedAt: string;
}

export type ProfileForm = Pick<
  UserModel,
  'fullName' | 'username' | 'email' | 'phoneNumber' | 'preferredHub' | 'currency'
>

export function mapUserResponse(raw: Record<string, unknown>): UserModel {
  const first = (raw.firstName as string) || ''
  const last = (raw.lastName as string) || ''
  return {
    userId: (raw.userId as string) || '',
    fullName: (raw.fullName as string) || `${first} ${last}`.trim(),
    username: (raw.username as string) || '',
    email: (raw.email as string) || '',
    phoneNumber: (raw.phoneNumber as string) || '',
    avatarUrl: (raw.avatarUrl as string) || '',
    locale: (raw.locale as string) || '',
    country: (raw.country as string) || '',
    address: (raw.address as string) || '',
    userType: (raw.userType as string) || '',
    isVerified: (raw.isVerified as boolean) || false,
    emailConsent: (raw.emailConsent as boolean) || false,
    smsConsent: (raw.smsConsent as boolean) || false,
    consentUpdated: (raw.consentUpdated as string) || '',
    consentSrc: (raw.consentSrc as string) || '',
    preferredHub: (raw.preferredHub as UserModel['preferredHub']) || 'tokyo',
    currency: (raw.currency as UserModel['currency']) || 'usd',
    createdAt: (raw.createdAt as string) || '',
    updatedAt: (raw.updatedAt as string) || '',
  }
}