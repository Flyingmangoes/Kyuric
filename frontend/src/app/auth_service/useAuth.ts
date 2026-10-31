import { computed, ref } from 'vue'

export interface User {
  name: string
  email: string
}

const KEY = 'flomm_user'

const load = (): User | null => {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as User) : null
  } catch {
    return null
  }
}

const user = ref<User | null>(load())

export function useAuth() {
  const isLoggedIn = computed(() => user.value !== null)

  const initials = computed(() =>
    (user.value?.name ?? '')
      .split(' ')
      .filter(Boolean)
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase()
  )

  const login = (u: User) => {
    user.value = u
    localStorage.setItem(KEY, JSON.stringify(u))
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem(KEY)
  }

  return { user, isLoggedIn, initials, login, logout }
}